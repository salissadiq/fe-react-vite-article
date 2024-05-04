import { z } from "zod";

export const articleValidationSchema = z.object({
    name: z.string().min(5, { message: "Name should'nt be lessthan 5 characters" }).max(250),
    email: z.string().email().min(5, { message: "Email should'nt be lessthan five characters" }).max(250, { message: "Email should not be morethan 250 characters" }),
    address: z.string().min(5).max(250),
    phone: z.string().min(10).max(15),
    articleTitle: z.string().min(5).max(250),
    content: z.string().min(20, { message: "Article should'nt be lessthan 20 characters" }),   
})