import React from 'react'
import PersonalInfo from './profile/PersonalInfo'
import Education from './profile/Education'
import WorkExperience from './profile/WorkExperience'
import Header from './profile/Header'
import Resume from './profile/Resume'
import AdditionalQuest from './profile/AdditionalQuest'
import OtherPrograms from './profile/OtherPrograms'
import { motion } from "framer-motion"
import Navigation from './Navigation'

const Profile: React.FC = () => {
  return (
    <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }} 
        transition={{ duration: 0.5 }}
        className='w-full min-h-screen'>
      {/* first section (header) */}
      <div>
        <Header />
      </div>

      {/* navigation bar from one part of the profile to other pages/sections of the profile */}
      <div>
          <Navigation />
      </div>

      {/* personal info */}
      <div>
        <PersonalInfo />
      </div>

      {/* education  */}
      <div className='my-7'>
        <Education />
      </div>

      {/* Work Experience */}
      <div className='my-7'>
          <WorkExperience />
      </div>

      {/* resume */}
      <div>
        <Resume />

      </div>

      {/* addtional question */}
      <div className='my-7'>
        <AdditionalQuest />
      </div>

      {/* other programs */}
      <div>
        <OtherPrograms />
      </div>
    </motion.div>
  )
}

export default Profile