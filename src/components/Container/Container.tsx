import clsx from 'clsx'
import css from './Container.module.css'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'div'> {}

export const Container = ({className,...props}: Props) => {
  return (
    <div className={clsx(css.container, className)} {...props} />
  )
}
