import * as Yup from 'yup';
export const YupSchema = Yup.object({
    name: Yup.string().min(2).max(8).required("please enter your name"),
    email: Yup.string().email().min(2).max(16).required("please enter your email"),
    number: Yup.number().required("please enter your phone number")
})