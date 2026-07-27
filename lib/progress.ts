"use client";

import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "ai-automation-curriculum:completed";
const listeners = new Set<() => void>();
const EMPTY: Set<string> = new Set();
let cache: Set<string> | null = null;

function readCompleted(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw) as string[]);
  } catch {
    return new Set();
  }
}

function getSnapshot(): Set<string> {
  if (!cache) cache = readCompleted();
  return cache;
}

function getServerSnapshot(): Set<string> {
  return EMPTY;
}

function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function writeCompleted(completed: Set<string>) {
  cache = completed;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(completed)));
  listeners.forEach((listener) => listener());
}

export function useProgress() {
  const completed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback((slug: string) => {
    const next = new Set(getSnapshot());
    if (next.has(slug)) {
      next.delete(slug);
    } else {
      next.add(slug);
    }
    writeCompleted(next);
  }, []);

  const isComplete = useCallback((slug: string) => completed.has(slug), [completed]);

  return { completed, toggle, isComplete };
}
