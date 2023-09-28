import React from 'react'
import { UserInfo } from '../../utils/usersInfo'
import MyCheckbox from '../ui/Checkbox'
import { Avatar } from "antd"
import { motion } from "framer-motion"

type Props = {
    data: UserInfo[]
}

const UserCard: React.FC<Props> = ({ data }) => {
  return (
    <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }} 
        className='bg-white p-6 w-[440px] mt-3'>      
        {
            data.map((user) => {
                return (
                    <div className='my-5 flex items-center' key={user.id}>
                        <div>
                            <MyCheckbox />
                        </div>

                        <Avatar
                            style={{
                                backgroundColor: '#FAFCFF',
                                verticalAlign: 'middle',
                                color: '#B1CDFD',
                                fontWeight: '600',
                                marginLeft: '20px'
                                }}
                                size='large'
                                gap={4} 
                        >{user.initials}
                        </Avatar>

                        <div className={`ml-5 ${user?.selectedcandidate && "bg-[#F5F8FF] rounded-[16px] w-full p-3"}`}>
                            <p className='font-semibold mb-2 text-[14px]'>{user.name}</p>
                            <p className='font-medium mb-2 text-[10px]'>{user.country}</p>
                            <p className='font-light mb-2 text-[10px]'>{user.info}</p>
                            <p className='text-[#8492A7] mb-1 text-[8px]'>{user.hashtags}</p>
                            <div className='flex items-center'>
                                {
                                    user.tags.map((tag, index) => (
                                        <p className='p-1 text-[8px] bg-[#F3FAFC] mx-1 rounded-[16px] text-[#6B6B6B]' key={index+ 1}>{tag}</p>
                                    ))
                                }
                            </div>
                        </div>

                        
                    </div>
                )
            })
        }
    </motion.div>
  )
}

export default UserCard
