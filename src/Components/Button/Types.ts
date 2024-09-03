export type typeBtn = "button" | "submit" | "reset"
type viewBtn = "primary" | "secondary" | "tertiary"
export type sizeBtn = "normal" | "medium" | "small"
type positionIcon = "left" | "right"

export interface ButtonProps {
  type?: typeBtn
  view?: viewBtn
  size?: sizeBtn
  className?: string
  disabled?: boolean
  isLoading?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  title: string
}
