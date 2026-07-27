import type { ReactNode } from "react";

const styles = {
  mistake: {
    label: "Common mistake",
    className:
      "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200",
  },
  framework: {
    label: "Framework",
    className:
      "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-200",
  },
  data: {
    label: "The data",
    className:
      "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-200",
  },
} as const;

export function Callout({
  type = "framework",
  title,
  children,
}: {
  type?: keyof typeof styles;
  title?: string;
  children: ReactNode;
}) {
  const style = styles[type];
  return (
    <div className={`not-prose my-6 rounded-lg border px-5 py-4 ${style.className}`}>
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide opacity-70">
        {title ?? style.label}
      </p>
      <div className="text-sm leading-relaxed [&>p]:m-0 [&>ul]:mt-2 [&>ul]:list-disc [&>ul]:pl-5">
        {children}
      </div>
    </div>
  );
}
