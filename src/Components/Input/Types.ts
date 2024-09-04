import type { ChangeEvent } from "react";

interface InputProps {
  placeholder: string;
  placeholderStyle?: string;
  width?: string;
  className?: string;
  type?: string;
  icon?: React.ReactNode;
  updateState: (value: string) => void;
  iconPosition?: "left" | "right";
  name: string;
}

export type { InputProps };
