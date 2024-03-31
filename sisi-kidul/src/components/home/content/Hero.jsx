import React from 'react';
import { bogor, HeroBg, kemendikbud, TPS } from '../../../assets';
export const Hero = () => {
  return (
    <div className='flex justify-center items-center '>
      <div className='flex flex-col lg:flex-row  items-center container mx-auto '>
        <div className='w-1/2 flex flex-col mx-auto p-20'>
          <div className=''>
          <p className='text-[32px]'>Sarana Informasi Dan Sosialisasi </p>
          <p className='text-[60px] text-custom-purple1 uppercase font-[750] leading-[1.2]'>Gerakan Transisi PAUD ke SD yang Menyenangkan</p>
          <p className='text-[20px] text-justify mt-6 font'>Kemendikbudristek telah menerbitkan kebijakan tentang Gerakan Transisi PAUD ke SD yang Menyenangkan pada Maret 2023 sebagai bagian dari gerakan Merdeka Belajar. </p>

          <div className='mt-12 text-white inline-block bg-gradient-to-r from-custom-purple2 to-custom-indigo2 to-custom-purple3 rounded-full'>
            <p className='text-[18px] py-3 px-10'>Pelajari Modul</p>
          </div>
          </div>
        </div>
        <div className='w-1/2  lg:mt-0 flex justify-center items-center mx-auto p-20'>
          <img src={HeroBg} alt="" className='' />
        </div>
      </div>
    </div>
  );
};
