import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Head from './Head'

export default function Layout() {
  return (
    <div className='flex flex-col h-screen w-screen overflow-hidden'>
        <Head/>
        <div className='flex h-full'>
          <Sidebar/>
            <div className='h-full w-full'>{<Outlet/>}</div>
        </div>
    </div>
  )
}
