import React from 'react'
import { Controller } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import { InputLabel, OutlinedInput, TextField } from '@mui/material'
interface ITextFieldInputProps {
 id: string
 name: string
 control: any
 error?: any
 label?: string
 placeholder?: string
 type: string
}
const TextFieldInput: React.FC<ITextFieldInputProps> = ({
 control,
 name,
 error,
 label,
 placeholder,
 id,
 type = 'text',
}) => {
 return (
  <FormControl fullWidth error={!!error}>
   <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
     <OutlinedInput
      type={type}
      id={id}
      error={!!error}
      value={field.value}
      onChange={field.onChange}
      label={label}
     />
    )}
   />
   <InputLabel id={id}>{label}</InputLabel>
  </FormControl>
 )
}

export default TextFieldInput
