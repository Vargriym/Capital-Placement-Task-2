import React from 'react'
import institutionIcon from "../../../assets/icons/educationIcon.svg"
import { renderInfoCard } from '../../../components/profile/RenderInfoCard'

//type Props = {}

const ICONS: Record<string, string> = {
    institution: institutionIcon
}

const Education: React.FC = () => {
  return (
    <section className='bg-white rounded-[16px] w-full p-6 '>
      <h2 className='font-semibold text-[14px]'>Education</h2>

      <div className='grid mt-4 grid-cols-1 gap-8 rounded-[16px]'>
        {renderInfoCard('Bachelor in Biochemistry', 'King Saud University', 'institution', ICONS, "Saudi Arabia Jan 2022 - Jan 2023 | Saudi Arabia | Saudi Arabia")}
        {renderInfoCard('Bachelor in Biochemistry', 'King Saud University', 'institution', ICONS, "Saudi Arabia Jan 2022 - Jan 2023 | Saudi Arabia | Saudi Arabia")}
      </div>
    </section>
  )
}

export default Education