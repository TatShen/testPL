"use client";
import { type ChangeEvent, useState } from "react";

import classNames from "classnames";
import style from "./Input.module.css";

import type { InputProps } from "./Types";

const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  updateState,
  className,
  type,
  icon,
  iconPosition,
}) => {
  const [value, setValue] = useState<string>("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateState(e.target.value);
  };

  const classes = classNames(style.input, className);

  const labelClasses = classNames(
    style.label,
    iconPosition && (iconPosition === "left" ? style.iconLeft : style.iconRight)
  );
  return (
    <>
      <label className={labelClasses}>
        {iconPosition === "left" && icon}
        <input
          placeholder={placeholder}
          className={classes}
          name={name}
          type={type || "text"}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
        />
        {iconPosition === "right" && (
          <div className={style.rightIconContainer}>{icon}</div>
        )}
      </label>
    </>
  );
};

export default Input;
