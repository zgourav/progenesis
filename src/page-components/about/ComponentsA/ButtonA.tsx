"use client";

import React, { useRef, useState } from "react";
import { Loader2, ChevronDown } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  // Dropdown support
  withDropdown?: boolean;
  dropdownItems?: Array<{ label: string; onClick: () => void }>; // simple list items
  menuAlign?: "left" | "right";
}

export const ButtonA: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  loading = false,
  icon,
  iconPosition = "left",
  withDropdown = false,
  dropdownItems = [],
  menuAlign = "left",
  disabled,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const baseClasses =
    "font-semibold transition-all duration-200 rounded-md inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const variants = {
    primary:
      "bg-[#1656A5] hover:bg-[#144A94] text-white shadow-md hover:shadow-lg focus:ring-[#1656A5]",
    secondary:
      "bg-white hover:bg-gray-50 text-[#1656A5] border border-[#1656A5] focus:ring-[#1656A5]",
    outline:
      "border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 focus:ring-gray-400",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-2.5 text-sm gap-2.5",
    lg: "px-8 py-3 text-base gap-3",
  };

  // Enforce requested sizing overrides:
  // - height: 40px => h-10
  // - width: auto => w-auto
  // - padding: 10px on small (px-2.5) and 16px on md+ (md:px-4)
  // - add gap between icon/text/chevron => gap-2 on small, md:gap-3
  const requestedSize = "h-10 w-auto px-2.5 md:px-4 gap-2 md:gap-3 rounded-[16px]";

  return (
    <div ref={containerRef} className="relative inline-block" style={{padding:'10px'}}>
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${requestedSize} ${className}`}
        style={{ padding: '10px' }} // Override padding to enforce requestedSize
        disabled={loading || disabled}
        onClick={(e) => {
          props.onClick?.(e);
          if (withDropdown && dropdownItems.length > 0) {
            setOpen((o) => !o);
          }
        }}
        {...props}
      >
        {loading && (
          <Loader2 className="animate-spin h-4 w-4 mr-2" aria-hidden="true" />
        )}

        {!loading && icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}

        <span className="whitespace-nowrap">{children}</span>

        {!loading && icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}

        {withDropdown && (
          <ChevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
        )}
      </button>

      {withDropdown && open && dropdownItems.length > 0 && (
        <div
          className={`absolute z-50 mt-2 min-w-[160px] rounded-[16px] bg-white shadow-lg ring-1 ring-black/5 overflow-hidden ${
            menuAlign === "right" ? "right-0" : "left-0"
          }`}
          role="menu"
        >
          {dropdownItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setOpen(false);
                item.onClick();
              }}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ButtonA;