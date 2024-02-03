import React, { PropsWithChildren } from 'react'

export interface ButtonProps
  extends PropsWithChildren,
    React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return (
    <button className="rounded bg-blue-500 px-4 py-2 text-white dark:bg-red-800">
      {children}
    </button>
  )
}

export default Button
