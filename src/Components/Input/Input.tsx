"use client"
import { type ChangeEvent, useEffect, useState } from "react"

import classNames from "classnames"
import Close from '../../../public/icons/close.svg'
import style from "./Input.module.css"


import type { InputProps } from "./Types"

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  width,
  labelWidth,
  labelStyle,
  name,
  handler,
  className,
  type,
  icon,
  onblur,
  focus,
  iconPosition,
}) => {
  
  const [value, setValue] = useState<string>("")
  const [isFocus, setIsFocus] = useState(false)
  
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
  }


  const classes = classNames(
    style.input,
    className,
  )

  const labelClasses = classNames(
    labelStyle,
    style.label,
    iconPosition && (iconPosition === "left" ? style.iconLeft : style.iconRight)
  )
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
          onBlur={() => {
            setIsFocus(false)
            if (onblur) {
              onblur()
            }
          }}
          onFocus={() => setIsFocus(true)}
          autoFocus={focus}
        />
        {iconPosition === "right" && (
          <div className={style.rightIconContainer}>{icon}</div>
        )}
      </label>
    </>
  )
}

export default Input
