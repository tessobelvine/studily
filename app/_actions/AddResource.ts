"use server"
import { z } from "zod"


export async function clientAction(formData: FormData) {
    console.log(formData)
}

// const fileSchema = z.instanceof(File, { message: "Required" })
// const imageSchema = fileSchema.refine(
//     file => file.size === 0 || file.type.startsWith("image/")
// )

z.object({
    name: z.string().min(1),
    category: z.string().min(1),
    description: z.string().min(1),
    // file: fileSchema.refine(file => file.size > 0, "Required"),
    // image: imageSchema.refine(file => file.size > 0, "Required"),
})


async function addResource(formData: { get: (arg0: string) => any }) {
    const titleValue = formData.get('title')
    const descriptionValue = formData.get('description')
    const categoryValue = formData.get('category')
    const filePathValue = formData.get('filepath')

}