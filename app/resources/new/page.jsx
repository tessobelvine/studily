import AddResource from '@/components/AddResource'
import React from 'react'

export default function page() {
    return (
        <div className='max-w-screen-sm mx-auto'>
            <h2 className="text-white font-extrabold text-md lg:text-2xl uppercase mb-6">add new resource</h2>
            <AddResource />
        </div>
    )
}
