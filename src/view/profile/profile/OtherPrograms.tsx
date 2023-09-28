import React from 'react'

interface EPProps {
    program: string
    programStatus: "Active" | "disqualified"
    location: string
}
const EnrolledPrograms: React.FC<EPProps> = ({ program, programStatus, location }) => {

    return (
        <>
            <div className='flex my-7 items-center w-full justify-between'>
                <div>
                    <p className='text-[14px] font-semibold'>{program}</p>
                    <p className='text my-3 text-[12px]'>Currently At {location}</p>
                </div>
            
            <p className={`text-[9px] px-3 py-1 ${programStatus === "Active" ? "text-[#087B2F] rounded-full border border-[#087B2F]  bg-[#DBF5D3]" : "bg-[#FFECEA] border border-[#FC402B] rounded-full text-[#FC402B]"}}`}>{programStatus}</p>
            </div>

            <hr></hr>
        </>
        
    )
}

const OtherPrograms: React.FC = () => {
  return (
    <div className='p-6 w-full rounded-[16px] bg-white'>
        <div>
            <p className='font-semibold text-[14px]'>Enrolled Other Programs</p>
        </div>

        <div>
            <EnrolledPrograms location='Video Task' program={"Misk Traineeship"} programStatus='Active'/>

            <EnrolledPrograms location='Video Task' program={"Summer Internship"} programStatus='disqualified'/>

            <EnrolledPrograms location='Video Task' program={"XYZ Traineeship"} programStatus='disqualified'/>

            <EnrolledPrograms location='Video Task' program={"London Internship"} programStatus='Active'/>
        </div>
    </div>
  )
}

export default OtherPrograms