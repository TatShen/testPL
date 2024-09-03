import React from "react"

import classNames from "classnames"
import Check from '../../../public/icons/check.svg';
import style from "./CheckBox.module.css"


type CheckBoxProps = {
  label?: string
  checked: boolean
  onChange: (e: boolean) => void
  isDisabled?: boolean
  isError?: boolean
  textPosition?: "left" | "right"
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checked,
  isDisabled,
  isError,
  label,
  onChange,
  textPosition = "right"
}) => {
  const labelClasses = classNames(
    style.label,
    checked && style.checked,
    isError && style.error,
    isDisabled && style.disabled
  )

  return (
    <label className={labelClasses}>
      {label && textPosition === "left" && <span>{label}</span>}
      <div className={style.block}>
        <input
          type="checkbox"
          className={style.input}
          checked={checked}
          disabled={isDisabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        <div className={style.pseudo}>
          <Check/>
        </div>
      </div>
      {label && textPosition === "right" && <span>{label}</span>}
    </label>
  )
}
export default CheckBox
