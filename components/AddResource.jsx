'use client'

import React from 'react'
import { BsSend } from 'react-icons/bs'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { addResource } from '../app/_actions/AddResource'
import { useFormState, useFormStatus } from 'react-dom'
import Button from './Button'

export default function AddResource() {
    const [error, action] = useFormState(addResource, {})

    return (
        <div>
            <form action={action} className='p-4 border border-slate-700 rounded-2xl '>
                <div className="form-control flex flex-col gap-1 mb-8">
                    <Label htmlFor="title">Title</Label>
                    <Input type="text" id='title' name='title' placeholder='Enter resource name' className='text-slate-800' required />
                    {error.title && <div className='text-destructive'>{error.title}</div>}
                </div>
                <div className="form-control flex flex-col gap-1 mb-8">
                    <Label htmlFor="category">Category</Label>
                    <Input type="text" className='text-slate-800' id='category' name='category' placeholder='Category' required />
                    {error.category && <div className='text-destructive'>{error.category}</div>}
                </div>
                <div className="form-control flex flex-col gap-1 mb-8">
                    <Label htmlFor="description">Description</Label>
                    <Textarea type="text" className='text-slate-800' id='description' name='description' placeholder='Description' required />
                    {error.description && <div className='text-destructive'>{error.description}</div>}
                </div>
                <div className="form-control flex flex-col gap-1 mb-12">
                    <Label htmlFor="file">Resource File</Label>
                    <Input type="file" id='file' className="bg-transparent border-none" name='file' required />
                    {error.file && <div className='text-destructive'>{error.file}</div>}
                </div>
                <div className="form-control flex flex-col gap-1 mb-12">
                    <Label htmlFor="image">Image (Thumbnail)</Label>
                    <Input type="file" id='image' className="bg-transparent border-none" name='image' required />
                    {error.image && <div className='text-destructive'>{error.image}</div>}
                </div>
                <SubmitButton />
            </form>
        </div>
    )
}


function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <Button type='submit' disabled={pending} className={'w-full p-2 text-lg'}>{pending ? "Creating.." : "Create resource"}</Button>
    )
}