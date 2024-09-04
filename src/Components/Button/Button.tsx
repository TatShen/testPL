"use client";
import classNames from "classnames";

import style from "./Button.module.css";
import type { ButtonProps } from "./Types";

const Button: React.FC<ButtonProps> = ({
  title,
  type = "button",
  view = "",
  size = "",
  className,
  disabled,
  isLoading,
  onClick,
}) => {
  const classes = classNames(
    style.btn,
    style[view],
    style[size],
    className,
    isLoading ? style.isLoading : "",
    disabled ? style.disabled : ""
  );



  return (
    <button
      type={type}
      className={classes}
      onClick={onClick ? onClick : undefined}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
