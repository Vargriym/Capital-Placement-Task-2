import React from 'react'
import { Avatar } from 'antd';
import arrowIcon from "../assets/icons/arrowIcon.png"
import noteIcon from "../assets/icons/noteIcon.png"
import noteBookIcon from "../assets/icons/NotebookIcon.png"
import settingsIcon from "../assets/icons/SettingsIcon.png"
import heartIcon from "../assets/icons/heartIcon.png"
import homeIcon from "../assets/icons/homeIcon.png"
import calendarIcon from "../assets/icons/calendarIcon.png"
import shareIcon from "../assets/icons/shareIcon.png"
import usersIcon from "../assets/icons/usersIcon.png"

const icons: Record<string, string> = {
    home: homeIcon,
    calendar: calendarIcon,
    share: shareIcon,
    note: noteIcon,
    noteBook: noteBookIcon,
    heart: heartIcon,
    arrow: arrowIcon,
    settings: settingsIcon,
    users: usersIcon
  };
  

type SideNavProps = {
    children: React.ReactElement | React.ReactElement[]
}

// coomponent to render Icon
const renderIcon = (iconName: string, altText = iconName) => {
    const icon = icons[iconName];
    if (!icon) return null;
  
    return (
      <div className={`p-4 ${iconName === "share" && "bg-[#F5F8FF] rounded-[8px] p-3"}`} key={iconName}>
        <img src={icon} alt={altText} />
      </div>
    );
  };

const SideNavigation = ({ children }: SideNavProps) => {
  return (
    <div className='flex items-center'>
      <aside className='pt-10 h-screen w-[72px]  bg-white fixed left-0'>
        <section className='w-full -mt-10 h-full flex flex-col items-center relative'>
            <div className='my-3'>
            <Avatar shape='circle' />
            </div>

            {renderIcon('home')}
            {renderIcon('users')}
            {renderIcon('calendar')}
            {renderIcon('share')}
            {renderIcon('note')}
            {renderIcon('noteBook')}
            {renderIcon('heart')}
            {renderIcon('arrow')}

            <section className='absolute flex flex-col items-start bottom-0 p-3'>
            {renderIcon('settings', 'settings-icon')}
            <Avatar
                style={{
                backgroundColor: '#D7E5FD',
                verticalAlign: 'middle',
                color: '#B1CDFD',
                fontWeight: '700',
                }}
                size='large'
                gap={4}
            >
                {'AS'}
            </Avatar>
            </section>         
            </section>
      </aside>

      <main className='bg-[#F9FAFF] min-h-screen ml-20 w-full pt-10 px-10 pb-5'>{children}</main>
    </div>
  );
};
// 


export default SideNavigation;
