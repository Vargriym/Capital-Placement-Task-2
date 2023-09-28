import React from 'react';
import MyCheckbox from '../components/ui/Checkbox';

export const Divider: React.FC = () => (
    <div className="h-[22px] border-2 border-[#F3F3F4] mx-4"></div>
  );

interface HeaderItemProps {
    label: string;
    count: number;
    color: string;
    bgColor: string;
    className?: string
    spanClassName?: string;
  }
  
  const HeaderItem: React.FC<HeaderItemProps> = ({ label, count, color, bgColor, className, spanClassName }) => (
    <div>
      <p className={`text-[14px] font-medium text-${color} ${className}`}>
        {label} <span className={`bg-${bgColor} ${spanClassName} ml-1 rounded-full p-1 text-[10px] font-medium`}>{count}</span>
      </p>
    </div>
  );

interface LeftHeaderProps {
  qualifiedCount: number;
  taskCount: number;
  disqualifiedCount: number;
}
  

const LeftHeader: React.FC<LeftHeaderProps> = ({
  qualifiedCount,
  taskCount,
  disqualifiedCount,
}) => {
  return (
    <div className='flex items-center rounded-t-[16px] bg-white h-[54px] w-[440px] px-6'>
      <MyCheckbox />
      <Divider />
      <HeaderItem spanClassName='bg-[#EDF4FF]' className='text-[#1D4ED8] font-semibold' label="Qualified" count={qualifiedCount} color="#1D4ED8" bgColor="#EDF4FF" />
      <Divider />
      <HeaderItem className='font-medium' spanClassName='bg-[#F7F8FD]' label="Task" count={taskCount} color="black" bgColor="#F7F8FD" />
      <Divider />
      <HeaderItem className='font-medium' spanClassName='bg-[#F7F8FD]' label="Disqualified" count={disqualifiedCount} color="black" bgColor="#F7F8FD" />
    </div>
  );
};




export default LeftHeader;
