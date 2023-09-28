import React from 'react'
import viewResumeIcon from "../../../assets/icons/eyesIcon.png"
import downloadIcon from "../../../assets/icons/downloadResumeIcon.png"

//type Props = {}

const Resume: React.FC = () => {
  return (
    <div className='h-[997px] w-full p-6 bg-[#F1F1F1] rounded-[16px]'>
        <div className='flex items-center py-3  w-full justify-between'>
            <p className='font-semibold text-[14px]'>Resume</p>

            <div className='flex items-center'>
                <img src={viewResumeIcon} alt="Resume view" className='border border-[#ECECEC] rounded-[8px] p-2'/>
                <img src={downloadIcon} className='ml-4 border border-[#ECECEC] rounded-[8px] p-2' alt="Download resume" />
            </div>
        </div>
        <div className='bg-gray-200 rounded-[4px] w-full h-[93%]'>

        </div>
    </div>
  )
}

export default Resume