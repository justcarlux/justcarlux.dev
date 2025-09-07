"use client";

import { ReactNode } from "react";
import toast from "react-hot-toast";

interface ProfileButtonProps {
  label: string;
  icon: ReactNode;
  action: ProfileButtonAction;
  className?: string;
}

interface ProfileButtonAction {
  type: "link" | "copy";
  value: string;
}

export function ProfileButton({ label, icon, className, action }: ProfileButtonProps) {
  return action.type === "link" ? (
    <a
      className={`bg-gray-700 hover:bg-gray-500 transition-colors cursor-pointer w-40 py-3 text-base font-bold rounded-lg border-[1px] border-gray-500 ${className ?? ""} flex items-center justify-center gap-2`}
      href={action.value}
      target="_blank"
    >
      {icon}
      {label}
    </a>
  ) : (
    <div
      className={`bg-gray-700 hover:bg-gray-500 transition-colors cursor-pointer w-40 py-3 text-base font-bold rounded-lg border-[1px] border-gray-500 ${className ?? ""} flex items-center justify-center gap-2`}
      onClick={() => {
        navigator.clipboard.writeText(action.value);
        toast.dismissAll();
        toast.success("Copied to clipboard!");
      }}
    >
      {icon}
      {label}
    </div>
  );
}
