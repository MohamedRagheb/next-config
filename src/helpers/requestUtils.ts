export const handelFormData = (validFormData: any): object => {
 const formData = new FormData()
 for (const property in validFormData) {
  formData.append(property, validFormData[property])
 }
 return formData
}
