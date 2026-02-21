import React from "react";

export function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) {
  let base =
    "inline-flex items-center justify-center gap-2 font-bold transition-all border-2 border-black tracking-wider uppercase";

  let variants = {
    default:
      "bg-black text-white shadow-[4px_4px_0px_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
    outline:
      "bg-white text-black shadow-[4px_4px_0px_black] hover:bg-black hover:text-white hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
  };

  let sizes = {
    default: "px-4 py-2 text-xs",
    sm: "px-3 py-1 text-[10px]",
    lg: "px-8 py-4 text-sm",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}