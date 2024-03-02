'use client'

import { useState } from 'react'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { handelFormData } from '@/helpers/requestUtils'
const schema = yup.object({
 username: yup.string().required(),
 password: yup.string().required(),
})
interface IFormInput {
 username: string
 password: string
}
const useLogin = (): any => {
 const [loading, setLoading] = useState<boolean>(false)

 const {
  formState: { errors },
  control,
  handleSubmit,
 } = useForm<IFormInput>({
  resolver: yupResolver(schema),
  defaultValues: {
   username: '',
   password: '',
  },
 })
 const onSubmit: SubmitHandler<IFormInput> = (data) => {
  setLoading(true)
  handelSendRequest(data)
 }

 const handelSendRequest = (data: IFormInput): void => {
  try {
   handelFormData(data)
  } catch (error) {
   console.log(error)
  } finally {
   setTimeout(() => {
    setLoading(false)
   }, 1000)
  }
 }
 return {
  data: {},
  states: {
   errors,
   control,
   loading,
  },
  actions: {
   handleSubmit,
   onSubmit,
  },
 }
}

export default useLogin
