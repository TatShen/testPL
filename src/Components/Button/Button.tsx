"use client";
import classNames from "classnames";

import style from "./Button.module.css";
import Loading from "../../../public/icons/loading.svg";
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

  const content = (
    <>
      <p>{title}</p>
      {!disabled && isLoading && <Loading />}
    </>
  );

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick ? onClick : undefined}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
