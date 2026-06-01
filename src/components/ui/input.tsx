import * as React from "react";

import { cn } from "@/lib/utils";

function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-white outline-none transition focus:border-red-500",
        className
      )}
      {...props}
    />
  );
}

export { Input };