"use server"

import { z } from "zod"
import { db } from "../../lib/db"
import fs from "fs/promises"
import { notFound, redirect } from "next/navigation"
import { revalidatePath } from "next/cache"


const fileSchema = z.instanceof(File, { message: "Required" })
const imageSchema = fileSchema.refine(
    file => file.size === 0 || file.type.startsWith("image/")
)

const addSchema = z.object({
    title: z.string().min(1),
    category: z.string().min(1),
    description: z.string().min(1),
    file: fileSchema.refine(file => file.size > 0, "Required"),
    image: imageSchema.refine(file => file.size > 0, "Required"),
})


export async function addResource(prevState: unknown, formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if (result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data

    await fs.mkdir("resources", { recursive: true })
    const file = `resources/${crypto.randomUUID()}-${data.file.name}`
    await fs.writeFile(file, Buffer.from(await data.file.arrayBuffer()))

    await fs.mkdir("public/resources", { recursive: true })
    const image = `/resources/${crypto.randomUUID()}-${data.image.name}`
    await fs.writeFile(
        `public${image}`,
        Buffer.from(await data.image.arrayBuffer())
    )

    await db.resource.create({
        data: {
            title: data.title,
            description: data.description,
            category: data.category,
            file,
            image
        },
    })

    revalidatePath("/")
    revalidatePath("/resources")

    redirect("/resources")

}