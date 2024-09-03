import type { ChangeEvent } from "react"

import type { Validations } from "../../Hooks/useValidation"

interface InputProps {
  label?: string
  labelStyle?: string
  placeholder: string
  placeholderStyle?: string
  width?: string
  labelWidth?: string
  category?: string
  name: string
  handler?: (event: ChangeEvent<HTMLInputElement>, category?: string) => void
  className?: string
  type?: string
  required?: boolean
  icon?: React.ReactNode
  iconClose?: boolean
  onClose?: () => void
  onblur?: () => void
  updateState?: (value: string) => void
  validations?: Validations
  focus?: boolean
  iconPosition?: "left" | "right"
  errorMsgClassName?: string
  getIsError?: (b: boolean) => void
  animatedPlaceholder?: boolean
  maxInputLength?: number
  readOnly?: boolean
}

export type { InputProps }
