import { FieldValues, UseFormRegister } from "react-hook-form"

type InputPropsType = {
    className: string,
    label: string | null,
    type?: 'text' | 'number' | 'email',
  name: string,
  register: UseFormRegister<FieldValues & any>,
  required?: boolean;
  disabled?: boolean,
  validate?: (value: string)=> boolean | string
  error?: any
    placeHolder?: string,
}
export default function Input({className, label, name,type, register, required, validate, placeHolder}: InputPropsType) {
  return (
      <div className="flex flex-col justify-center">
      <label htmlFor={name} className={`${label == null ? 'hidden' : ''} font-nunito text-sm font-semibold`}>
        {label}
        {required ? <span className="text-red-500">*</span> : ''}
      </label>
      <input
        type={type}
        className={className}
        placeholder={placeHolder}
        {...register(name, {
          required, 
          validate,
          ...(type=== 'email' ?{
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please enter a valid email',
                },
          }
            :{}
)
        })} />
    </div>
  )
}
