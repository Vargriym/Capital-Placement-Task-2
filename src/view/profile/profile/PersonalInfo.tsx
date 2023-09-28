import React from 'react';
import nationalityIcon from '../../../assets/icons/nationalityIcon.png';
import nationalIDIcon from '../../../assets/icons/nationalIDIcon.png';
import genderIcon from '../../../assets/icons/genderIcon.png';
import dateIcon from '../../../assets/icons/dateIcon.svg';

const ICONS: Record<string,string> = {
  nationality: nationalityIcon,
  nationalID: nationalIDIcon,
  gender: genderIcon,
  dateOfBirth: dateIcon,
};


const renderInfoCard = (label:string, value: string, iconName: string, ICON: Record<string, string>) => {
    return (
      <div className='flex items-center'>
        <img
          className='border border-[#ECECEC] rounded-[8px] p-2'
          src={ICON[iconName]}
          alt={`${label} icon`}
        />
        <div className='ml-3'>
          <p className='text-[#5F5F5F] text-[14px]'>{label}</p>
          <p className='text-[14px]'>{value}</p>
        </div>
      </div>
    );
  };

const PersonalInfo: React.FC = () => {
  return (
    <section className='bg-white rounded-[16px] w-full p-6 '>
      <h2 className='font-semibold text-[14px]'>Personal Information</h2>

      <div className='grid mt-4 grid-cols-2 gap-8 rounded-[16px]'>
        {renderInfoCard('Nationality', 'Sri Lankan', 'nationality', ICONS)}
        {renderInfoCard('National ID', '0000000000', 'nationalID', ICONS)}
        {renderInfoCard('Gender', 'Female', 'gender', ICONS)}
        {renderInfoCard('Date of Birth', '00-00-0000', 'dateOfBirth', ICONS)}
      </div>
    </section>
  );
};



export default PersonalInfo;
