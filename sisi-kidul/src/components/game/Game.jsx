import React, { useState } from 'react';

const Game = () => {
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = (questionId, optionId) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: optionId });
  };

  const handleDescriptionClose = (questionId) => {
    const updatedOptions = { ...selectedOptions };
    delete updatedOptions[questionId];
    setSelectedOptions(updatedOptions);
  };

  const statements = [
    {
      id: 1,
      statement: 'Pertanyaan 1. Anak diharapkan mencapai kesiapan bersekolah di usia 6 tahun (sebelum masuk SD)',
      options: [
        { id: 1, label: 'TEPAT', correct: false, description: 'Jawaban yang anda pilih salah silahkan tutup dan pilih jawaban yang TIDAK TEPAT' },
        { id: 2, label: 'TIDAK TEPAT', correct: true, description: 'Jawaban yang anda pilih benar , Kesiapan bersekolah adalah suatu kondisi yang perlu dibangun sejak di PAUD, dan dapat dilanjutkan di SD kelas awal. Jangan lupa bahwa tidak setiap anak pernah mengalami PAUD, padahal PAUD dirancang sebagai fondasi pendidikan dasar. Apakah kemudian anak yang tidak pernah melalui PAUD tidak lagi  memiliki kesempatan untuk mendapatkan kemampuan fondasi?' }
      ]
    },
    {
      id: 2,
      statement: 'Pernyataan 2. PAUD boleh diajarkan calistung',
      options: [
        { id: 3, label: 'TEPAT', correct: true, description: 'Sesungguhnya yang dibangun sejak dari PAUD adalah kemampuan literasi numerasi, di mana baca tulis hitung adalah bagian di dalamnya. Kemampuan membaca dan berhitung terjadi secara bertahap. Pengenalan kemampuan ini perlu sesuai dengan tahapan perkembangan anak dalam konteks kemampuannya berkomunikasi. serta harus diterapkan dengan cara yang sesuai bagi anak usia dini (menyenangkan dan tidak drilling' },
        { id: 4, label: 'TIDAK TEPAT', correct: false, description: 'Jawaban yang anda pilih salah' }
      ]
    },

    {
        id: 5,
        statement: 'Pernyataan 3. Kemampuan baca tulis hitung hanya dilakukan melalui pengenalan keaksaraan dan angka ',
        options: [
          { id: 6, label: 'TEPAT', correct: false, description: 'Jawaban yang anda pilih salah silahkan tutup dan pilih jawaban yang TIDAK TEPAT' },
          { id: 7, label: 'TIDAK TEPAT', correct: true, description: 'Agar bisa baca tulis hitung, anak memerlukan berbagai kemampuan lain, seperti konsentrasi, mengikuti aturan, dan pengelolaan emosi yang akan membantu kesabaran anak untuk menyimak. Kemampuan memahami arah, juga merupakan fondasi agar anak mengetahui arah membaca. Pengenalan pada berbagai kosakata melalui bernyanyi dan membaca nyaring, akan menguatkan kemampuannya mengasosiasikan kata dengan objek yang terkait. ' }
        ]
      },
      {
        id: 6,
        statement: 'Pernyataan 4. Anak sudah harus dapat baca tulis hitung saat  masuk di SD.  ',
        options: [
          { id: 7, label: 'TEPAT', correct: false, description: 'Jawaban yang anda pilih salah silahkan tutup dan pilih jawaban yang TIDAK TEPAT' },
          { id: 8, label: 'TIDAK TEPAT', correct: true, description: 'Kurikulum sudah secara eksplisit mencerminkan bahwa tidak ada kewajiban agar anak sudah harus bisa baca tulis hitung di kelas 1 SD. Regulasi secara konsisten sudah melarang tes calistung sebagai  bagian dari penerimaan peserta didik baru. Laju perkembangan anak beragam dan masih banyak anak yang  belum pernah dibina di PAUD.' }
        ]
      },
      {
        id: 9,
        statement: 'Pernyataan 5. Kesiapan bersekolah tidak hanya kemampuan baca tulis hitung',
        options: [
          { id: 10, label: 'TEPAT', correct: false, description: 'Jawaban yang anda pilih salah silahkan tutup dan pilih jawaban yang TIDAK TEPAT' },
          { id: 11, label: 'TIDAK TEPAT', correct: true, description: 'Ada banyak kemampuan fondasi yang sangat diperlukan untuk anak  dapat berkegiatan dengan baik di lingkungan belajar. Antara lain, kematangan emosi untuk dapat berinteraksi dengan sehat dengan rekan sebaya; serta pengembangan keterampilan motorik dan perawatan diri yang memadai untuk dapat berpartisipasi di lingkungan sekolah secara mandiri. ' }
        ]
      },
  ];



  return (
    <div className='container flex flex-col mx-auto p-20 justify-center'>
      <div data-aos="fade-up" className='container shadow-lg bg-white p-14'>
        <p className='text-center font-semibold text-[32px] mb-10 text-custom-purple1 '>Permainan : Mana yang Miskonsepsi ?</p>
        {statements.map((statement, index) => (
          <div key={statement.id} className={index !== 0 ? 'mt-10' : ''}>
            <p className='mb-2 text-lg'>{statement.statement}</p>
            {statement.options.map((option) => (
              <button
                key={option.id}
                className={`border p-3 rounded-xl mr-4 ${
                  selectedOptions[statement.id] === option.id
                    ? option.correct
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-white text-black'
                }`}
                onClick={() => handleOptionSelect(statement.id, option.id)}
                disabled={selectedOptions[statement.id] !== undefined}
              >
                <span className="text-sm">{option.label}</span>
              </button>
            ))}
            {selectedOptions[statement.id] && (
              <div className='description bg-purple-500 p-4 text-white rounded-lg my-2 font-semibold'>
                <Description
                  statement={statement}
                  selectedOption={selectedOptions[statement.id]}
                  onClose={() => handleDescriptionClose(statement.id)}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Description = ({ statement, selectedOption, onClose }) => (
  <div className="flex flex-col">
    <p>{statement.options.find((opt) => opt.id === selectedOption).description}</p>
    <button onClick={onClose} className='self-end mt-2 px-4 py-2 bg-white text-purple-500 font-semibold rounded-lg'>
      Tutup
    </button>
  </div>
);

export default Game;
