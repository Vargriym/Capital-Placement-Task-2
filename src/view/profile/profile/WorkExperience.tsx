import React from 'react'
import workIcon from "../../../assets/icons/workIcon.svg"
import { renderInfoCard } from '../../../components/profile/RenderInfoCard'

//type Props = {}

const ICONS: Record<string, string> = {
    work: workIcon
}

const WorkExperience: React.FC = () => {
  return (
    <section className='bg-white rounded-[16px] w-full p-6 '>
      <h2 className='font-semibold text-[14px]'>Work Experience</h2>

      <div className='grid mt-4 grid-cols-1 gap-8 rounded-[16px]'>
        {renderInfoCard('Cyber Security Intern', 'Coop Training', 'work', ICONS, " | Saudi Arabia Jan 2022 - Jan 2023 | Saudi Arabia | Saudi Arabia")}
        {renderInfoCard('Cyber Security Intern', 'Coop Training', 'work', ICONS, " | Saudi Arabia Jan 2022 - Jan 2023 | Saudi Arabia | Saudi Arabia")}
      </div>
    </section>
  )
}

export default WorkExperience