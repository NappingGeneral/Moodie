import React from 'react'
import Head from '../components/shared/Head'

export default function Musica() {
  return (
    <div className='flex flex-col bg-black'>
        <Head/>
        <div className='flex h-[calc(100vh-4rem)] w-screen bg-neutral-500 rounded-t-[2.5rem] box-border'>
          <div className='w-1/3'>Musicaa</div>
          <div className='flex flex-shrink flex-col px-12 w-1/3 bg-violet-900 relative rounded-t-[2.5rem] box-border items-center'>
            <button className='flex justify-center bg-white my-4 p-1 text-xs w-[80px] rounded-3xl'/>
            <div className='flex sm:flex-row flex-col pt-16 pb-6'>
              <img className='overflow-hidden bg-white w-min-10w-80 h-80 bg-cover bg-center' src="https://source.unsplash.com/80x80?face"/>
            </div>
            <label className='text-5xl font-extrabold text-white'>musica</label>
          </div>          
        </div>
    </div>
  )
}
