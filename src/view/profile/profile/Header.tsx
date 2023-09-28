import React, { useState } from 'react';
import userProfileImg from '../../../assets/images/profileImage.png';

const initialTags: string[] = ["top_candidates", "marketing_june"];


const Header: React.FC = () => {
  
  const [tags, setTags] = useState<string[]>(initialTags);
  const [newTag, setNewTag] = useState<string>(''); 

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
  };

  const addTag = () => {
    if (newTag.trim() !== '') {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  return (
    <header className='bg-white mb-7 py-3 mt-3 rounded-[16px] w-full'>
      <div className='flex items-center pl-6'>
        <section>
          <img src={userProfileImg} alt='user img' />
        </section>

        <section className='px-6'>
            <div className='flex  items-center'>
                        <p className='font-semibold text-[14px]'>Aaliyah Sanderson</p>
                        <ul className='flex items-center'>
                            <li className='p-1 text-[8px] bg-[#F3FAFC] mx-1 rounded-[16px] text-[#6B6B6B]'>{"New york"}</li>
                            <li className='p-1 text-[8px] bg-[#F3FAFC] mx-1 rounded-[16px] text-[#6B6B6B]'>{"Marketing"}</li>
                            <li className='p-1 text-[8px] bg-[#F3FAFC] mx-1 rounded-[16px] text-[#6B6B6B]'>{"London"}</li>
                        </ul>
                    </div>
                    <p className='font-extralight my-3 text-[10px]'>Saudi Arabia | aaliyahs@gmail.com | +00 000 000 0000</p>
            

            <ul className='flex items-center'>
                {tags.map((tag, index) => (
                <li className='p-1 text-[8px] bg-[#F5F8FF] mx-1 rounded-[16px] text-[#808EA3]' key={index + 1}>
                    {tag} 
                    <button className='ml-1 text-[#808EA3] cursor-pointer' onClick={() => removeTag(tag)}>x</button>
                </li>

                
                ))}
                <div className='flex items-center'>
                    <button className='ml-2 text-[#808EA3] rounded-full h-[20px] w-[20px] bg-[#F5F8FF] p-1 cursor-pointer flex items-center justify-center' onClick={addTag}>+</button>
                    <input
                    type='text'
                    className='p-1 text-[8px] outline-none bg-[#F5F8FF] mx-1 w-[41px] focus:border focus:border-blue-300 rounded-[16px] text-[#808EA3]'
                    placeholder='Add tag'
                    value={newTag}
                    onChange={e => setNewTag(e.target.value)}
                    />
                    
            </div>
            </ul>
        </section>
      </div>
    </header>
  );
};

export default Header;
