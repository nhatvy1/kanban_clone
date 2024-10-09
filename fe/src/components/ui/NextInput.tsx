import { forwardRef } from 'react'
import { Input, InputProps } from '@nextui-org/react'

interface CustomInputProps extends InputProps {
  label?: string
  name?: string
}

const NextInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ label, name, ...props }, ref) => {
    return (
      <Input
        {...props}
        ref={ref}
        label={<span className=''>{label}</span>}
        name={name}
        placeholder={props.placeholder}
        labelPlacement='outside'
        fullWidth
        radius='none'
        classNames={{
          inputWrapper:
            'bg-transparent shadow-none hover:!bg-transparent border rounded-sm'
        }}
      />
    )
  }
)

NextInput.displayName = 'CustomInput'

export default NextInput
