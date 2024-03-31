import React from 'react'
import { logo } from '../../assets'

export const Nav = () => {
  return (
    <div className="flex bg-gradient-to-r from-custom-purple2 to-custom-indigo2 to-custom-purple3 shadow-md h-18 items-center z-40 fixed w-full top-0 left-0 text-white ">
        <div className="container mx-auto flex items-center justify-between px-20">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="" className='w-20 p-1 drop-shadow-xl'/>
            <p className='tracking-widest font-bold text-xl'>SISI:KIDUL</p>
          </div>

          <div className="flex items-center space-x-10">
            <a href="#1" className="text-[18px]">
              Beranda
            </a>
            <a href="#3" className="text-[18px]">
              Konten
            </a>
            <a href="#4" className="text-[18px]">
              Modul
            </a>
            <a href="#4" className="text-[18px]">
              Galeri
            </a>
          </div>
        </div>
      </div>
    
  )
}
