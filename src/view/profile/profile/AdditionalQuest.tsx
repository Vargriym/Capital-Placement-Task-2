import React from 'react';
import { Dropdown } from 'antd';
import videoImage from '../../../assets/images/videoImage.png';

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];


interface QuestionProps {
  title: string;
  type: string;
  content: React.ReactNode;
}

const QuestionSection: React.FC<QuestionProps> = ({ title, type, content }) => (
  <div className={`my-8 flex items-center`}>
    <div className={`h-[12px] w-[12px] rounded-full mr-7 bg-red-400`}></div>
    <div>
      <span className={getTypeTagStyle(type)}>{type}</span>
      <hr></hr>
      <p className="text-[14px] font-extralight my-3">{title}</p>
      {content}
    </div>
    
  </div>
);

const getTypeTagStyle = (type: string) => {
  const tagStyles: Record<string, string> = {
    'Short answer': 'text-[#5F5F5F]',
    'Video uploaded': 'text-[#216C84]',
    Number: 'text-[#216C84]',
    'Multiple choice': 'text-[#216C84]',
    Dropdown: 'text-[#82E0FF]',
  };

  return `bg-[${getTagBgColor(type)}] text-[10px] p-1 rounded-t-[8px] ${tagStyles[type] || ''}`;
};

const getTagBgColor = (type: string) => {
  const bgColors: Record<string, string> = {
    'Short answer': '#FFFBE4',
    'Video uploaded': '#EEF2FF',
    Number: '#FFF6F7',
    'Multiple choice': '#F0FFEB',
    Dropdown: '#F2FCFC',
  };

  return bgColors[type] || '';
};

const AdditionalQuest: React.FC = () => {
  return (
    <div className="min-h-[100vh] w-full rounded-[16px] p-6 bg-white">
      <div className="flex items-center w-full justify-between">
        <p className="font-semibold text-[14px]">Additional Questions</p>
        <Dropdown className="text-[14px] cursor-pointer border p-2 w-[200px] rounded-[8px]" menu={{ items }}>
          <p>Sort</p>
        </Dropdown>
      </div>

      <QuestionSection
        title="What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply"
        type="Short answer"
        content={<p className="p-3 rounded-[8px] text-[#216C84] bg-[#F8FAFF] text-[12px]">Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>}
      />

      <QuestionSection
        title="What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply"
        type="Video uploaded"
        content={<img src={videoImage} alt="image frame" />}
      />

      <QuestionSection
        title="What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply"
        type="Number"
        content={
          <p className="p-3 rounded-[8px] text-[#216C84] bg-[#F8FAFF] text-[12px]">
            Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        }
      />

      <QuestionSection
        title="What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply"
        type="Multiple choice"
        content={
          <ul className="flex items-center">
            <li className="bg-[#F8FAFF] text-[12px] rounded-[16px] p-2 text-[#216C84]">New York</li>
            <li className="bg-[#F8FAFF] text-[12px] mx-3 rounded-[16px] p-2 text-[#216C84]">New York</li>
            <li className="bg-[#F8FAFF] text-[12px] rounded-[16px] p-2 text-[#216C84]">New York</li>
          </ul>
        }
      />

      <QuestionSection
        title="What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply"
        type="Dropdown"
        content={<p className="p-3 rounded-[8px] text-[#216C84] bg-[#F8FAFF] text-[12px]">Dorem ipsum dolor sit amet, consectetur adipiscing elit.</p>}
      />
    </div>
  );
};

export default AdditionalQuest;
