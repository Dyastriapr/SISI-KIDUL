import React from 'react'
import { naungan ,about} from '../../../assets';

export const About = () => {
  return (
    <div className='flex container mx-auto p-20 gap-5'>
      <div className='w-1/2 space-y-10'>
        <div>
        <p className='text-[32px] font-bold mb-5 text-custom-purple1'>Tentang Website SISI:KIDUL</p>
        <p className='text-[20px] text-justify'>Gerakan Transisi PAUD SD merujuk pada upaya sistematis untuk memfasilitasi proses transisi yang lancar dan efektif bagi anak-anak yang pindah dari pendidikan anak usia dini (PAUD) ke Sekolah Dasar (SD). Gerakan ini mencakup berbagai kegiatan dan strategi yang dirancang untuk membantu anak-anak menyesuaikan diri dengan lingkungan sekolah baru, kurikulum yang lebih formal, dan tuntutan belajar yang lebih tinggi. </p>
        </div>
        <div className='flex flex-col space-y-6'>
          <p className='text-[20px]'>dibawah naungan :</p>
          <img src={naungan} alt="" className='w-96' />
        </div>
      </div>

      <div className='w-1/2  lg:mt-0 flex justify-end items-end '>
        <img src={about} alt="" className=''/>
      </div>
    </div>
  )
}
