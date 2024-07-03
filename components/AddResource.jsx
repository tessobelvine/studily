import React from 'react'
import { BsAirplane, BsEnvelope, BsSend } from 'react-icons/bs'

export default function AddResource() {
    return (
        <div>
            <form className=' p-6 border border-slate-700 rounded-2xl '>
                <div className="form-control flex flex-col gap-1 mb-8">
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' name='title' placeholder='Enter resource name' required/>
                </div>
                <div className="form-control flex flex-col gap-1 mb-8">
                    <label htmlFor="description">Description</label>
                    <input type="text" id='description' name='description' placeholder='Description' required />
                </div>
                <div className="form-control flex flex-col gap-1 mb-8">
                    <label htmlFor="category">Category</label>
                    <input type="text" id='category' name='category' placeholder='Category' required />
                </div>
                <div className="form-control flex flex-col gap-1 mb-8">
                    <label htmlFor="filePath">Resource file</label>
                    <input type="file" id='filePath' name='filePath' required />
                </div>
                <button type="submit" className='flex gap-2 items-center justify-center w-full bg-slate-800 p-4 rounded' ><BsSend /> Submit</button>
            </form>
        </div>
    )
}
