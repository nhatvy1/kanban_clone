import { forwardRef, InputHTMLAttributes } from 'react'

interface ICustomInput extends InputHTMLAttributes<HTMLInputElement> {}

const TextField = forwardRef<HTMLInputElement, ICustomInput>((props, ref) => {
  return (
    <input
      className='flex border w-full rounded-lg h-12 px-4 mt-[6px] outline-blue-light outline-1'
      {...props}
      ref={ref}
    />
  )
})
TextField.displayName = "TextField";

export default TextField
