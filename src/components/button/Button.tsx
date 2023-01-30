import React, { FC } from 'react'

interface ButtonType {
  type: "button" | "submit"
  children: React.ReactNode
  className: string
  onClick?: () => void
}

const Button: FC<ButtonType> = ({type, children,className, onClick}) => {
  const a = 0;
  return (
    <button
      type={type === 'submit' ? "submit" : "button"}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;