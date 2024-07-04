'use client'

import React from 'react'
import { BsSend } from 'react-icons/bs'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { clientAction } from '../app/_actions/AddResource'

export default function AddResource() {

    return (
        <div>
            <form action={clientAction}  className='p-4 border border-slate-700 rounded-2xl '>
                <div className="form-control flex flex-col gap-1 mb-8">
                    <Label htmlFor="title">Title</Label>
                    <Input type="text" id='title' name='title' placeholder='Enter resource name' className='text-slate-800' required />
                </div>
                <div className="form-control flex flex-col gap-1 mb-8">
                    <Label htmlFor="category">Category</Label>
                    <Input type="text" className='text-slate-800' id='category' name='category' placeholder='Category' required />
                </div>
                <div className="form-control flex flex-col gap-1 mb-8">
                    <Label htmlFor="description">Description</Label>
                    <Textarea type="text" className='text-slate-800' id='description' name='description' placeholder='Description' required />
                </div>
                <div className="form-control flex flex-col gap-1 mb-12">
                    <Label htmlFor="file">Resource File</Label>
                    <Input type="file" id='file' className="bg-transparent border-none" name='file' required />
                </div>
                <div className="form-control flex flex-col gap-1 mb-12">
                    <Label htmlFor="image">Image (Thumbnail)</Label>
                    <Input type="file" id='image' className="bg-transparent border-none" name='image' required />
                </div>
                <button type="submit" className='flex gap-2 items-center justify-center w-full bg-slate-800 p-4 rounded' ><BsSend /> Submit</button>
            </form>
        </div>
    )
}
