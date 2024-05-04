import * as yup from "yup"


export const articleValidationSchema = yup.object({
    name: yup.string().min(5, { message: "Name should'nt be lessthan 5 characters" }).max(250),
    email: yup.string().email().min(5, { message: "Email should'nt be lessthan five characters" }).max(250, { message: "Email should not be morethan 250 characters" }),
    address: yup.string().min(5).max(250),
    phone: yup.string().min(10).max(15),
    articleTitle: yup.string().min(5).max(250),
    content: yup.string().min(20, { message: "Article should'nt be lessthan 20 characters" }),   
})