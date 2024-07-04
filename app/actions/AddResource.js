"use server"

async function addResource(formData) {
    const titleValue = formData.get('title')
    const descriptionValue = formData.get('description')
    const categoryValue = formData.get('category')
    const filePathValue = formData.get('filepath')

}