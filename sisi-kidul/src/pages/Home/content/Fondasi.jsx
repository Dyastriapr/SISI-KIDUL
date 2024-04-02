import React  from 'react';
import { fondasi1, fondasi2, fondasi3, fondasi4, fondasi5, fondasi6 } from '../../../assets';


const Fondasi = () => {
 

  return (
    <div className='flex container flex-col mx-auto p-20 justify-center gap-10'>
      <div data-aos="fade-up" className=''>
        <p className='text-center text-[32px] text-custom-purple1 font-bold'>6 Kemampuan Fondasi Anak</p>
        <p className='text-[20px] text-center'>Kemampuan fondasi ini dibangun secara kontinu dari PAUD hingga kelas dua pada jenjang Sekolah Dasar</p>
      </div>



      <div className="grid grid-cols-6 gap-4 justify-center">
  <div data-aos="fade-up" data-aos-delay="0" className="bg-white shadow-md p-4 h-72 w-52 flex flex-col justify-center items-center text-center rounded-xl transition duration-300 transform hover:shadow-2xl">
    <img className="h-28 w-28 mb-2" src={fondasi1} alt="Card" />
    <div className="text-md w-full">Mengenal Nilai Agama dan Budi Pekerti</div>
  </div>
    
  <div data-aos="fade-up" data-aos-delay="100" className="bg-white shadow-md p-4 h-72 w-52 flex flex-col justify-center items-center text-center rounded-xl transition duration-300 transform hover:shadow-2xl">
    <img className="h-28 w-28 mb-2" src={fondasi2} alt="Card" />
    <div className="text-md w-full">Keterampilan Sosial dan Bahasa</div>
  </div>

  <div  data-aos="fade-up" data-aos-delay="200" className="bg-white shadow-md p-4 h-72 w-52 flex flex-col justify-center items-center text-center rounded-xl transition duration-300 transform hover:shadow-2xl">
    <img className="h-28 w-28 mb-2" src={fondasi3} alt="Card" />
    <div className="text-md w-full">Kematangan Emosi</div>
  </div>

  <div data-aos="fade-up" data-aos-delay="300" className="bg-white shadow-md p-4 h-72 w-52 flex flex-col justify-center items-center text-center rounded-xl transition duration-300 transform hover:shadow-2xl">
    <img className="h-28 w-28 mb-2" src={fondasi4} alt="Card" />
    <div className="text-md w-full">Kematangan Kognitif</div>
  </div>

  <div data-aos="fade-up"data-aos-delay="400" className="bg-white shadow-md p-4 h-72 w-52 flex flex-col justify-center items-center text-center rounded-xl transition duration-300 transform hover:shadow-2xl">
    <img className="h-28 w-28 mb-2" src={fondasi5} alt="Card" />
    <div className="text-md w-full">Keterampilan motorik dan perawatan diri</div>
  </div>

  <div data-aos="fade-up" data-aos-delay="500" className="bg-white shadow-md p-4 h-72 w-52 flex flex-col justify-center items-center text-center rounded-xl transition duration-300 transform hover:shadow-2xl">
    <img className="h-28 w-28 mb-2" src={fondasi6} alt="Card" />
    <div className="text-md w-full">Pemaknaan terhadap belajar yang positif</div>
  </div>
</div>


    </div>
  );
};

export default Fondasi;
