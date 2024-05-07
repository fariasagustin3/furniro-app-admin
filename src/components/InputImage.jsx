import React from 'react'

const InputImage = ({ title, imageSelected, onChange, handleSelectImage }) => {
  return (
    <div className='pr-7'>
      <h2 className='text-xl mb-5'>{title}</h2>
      <div className='w-80 h-80 border-[1px] border-gray-400 relative'>
        {imageSelected && typeof imageSelected == "object" ? (
          <img
            src={URL.createObjectURL(imageSelected)}
            alt="image-selected"
            className='absolute w-full h-full object-cover'
          />
        ) : imageSelected?.split(":")[0] === "https" ? (
          <img
            src={imageSelected}
            alt="image-selected"
            className='absolute w-full h-full object-cover'
          />
        ) : (
          <label htmlFor="main-image" className=' w-full h-full absolute'>
            <div className='flex items-center justify-center w-full h-full cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#c1c1c1" className="w-16 h-16">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <input onChange={onChange} id="main-image" className='hidden' type="file" />
            </div>
          </label>
        )}
      </div>
      <div>
        <button
          disabled={!imageSelected}
          className={!imageSelected ? 'bg-red-300 px-4 py-2 text-slate-100 font-semibold text-sm mt-2' : 'bg-red-600 px-4 py-2 text-slate-100 font-semibold text-sm mt-2'}
          onClick={handleSelectImage}
        >
          CLEAR
        </button>
      </div>
    </div>
  )
}

export default InputImage