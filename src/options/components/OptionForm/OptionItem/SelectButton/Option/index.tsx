import classNames from 'clsx'
import * as React from 'react'

import Button from '../../../../../../core/components/baseItems/Button'
import classes from './styles.css'

type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'className' | 'hidden' | 'type'
>

const Option = ({ children, ...props }: Props) => {
  const inputRef = React.useRef<HTMLInputElement>(null)

  return (
    <label>
      <input ref={inputRef} {...props} hidden type='radio' />
      <Button
        className={classNames(classes.item, {
          [classes['item-active']]: props.checked,
        })}
        disabled={props.checked}
        onClick={React.useCallback(() => {
          if (inputRef.current) inputRef.current.click()
        }, [])}
      >
        {children}
      </Button>
    </label>
  )
}

export default Option
