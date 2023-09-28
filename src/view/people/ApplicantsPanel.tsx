import React from 'react'
import LeftHeader from '../../Layout/LeftHeader'
import UserCard from '../../components/composite/UserCard'
import SearchBar from '../../components/ui/SearchBar'
import usersInfo, { UserInfo } from '../../utils/usersInfo'
import filterIcon from "../../assets/icons/filterIcon.svg"
import { Avatar } from 'antd'
import downArrowIcon from "../../assets/icons/downArrow.png"


const Main: React.FC = () => {
  const [searchValue, setSearchValue] = React.useState("")
  const [searchResults, setSearchResults] = React.useState<UserInfo[]>([]);

  const candidateSearch = (query: string) => {
    const filteredUsers = usersInfo.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredUsers);
  };


  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSearchValue(value)
    candidateSearch(value)
  }


  return (
    <div>

        <div className='bg-white max-h-[48px] text-[#384A69] flex items-center w-[440px] p-2 justify-between rounded-[8px]'>
          <Avatar
            style={{
              backgroundColor: '#D7E5FD',
              verticalAlign: 'middle',
              color: '#B1CDFD',
              fontWeight: '700',
              height:"32px",
              width:"32px",
              display: "flex",
              alignItems:"center"
              }}
              size='large'
              gap={4}
          >{"SP"}</Avatar> 
          <p>Opportunity Browsing</p>
          <p>2335</p>
          <img src={downArrowIcon} alt="down arrow icon" />
        </div>

        <div className='flex items-center'>
          <SearchBar searchValue={searchValue} onSearch={onSearch} />

          <div className='grid ml-3 my-3 bg-white rounded-[8px] place-items-center w-[48px] h-[48px]'>
            <img src={filterIcon} alt="filter icon" />
          </div>
        </div>
        <>
              {
                searchValue !== "" && searchResults.length === 0 && (
                  <p className='bg-white w-[440px] p-2 shadow-lg absolute z-10 rounded-t-[14px] text-[14px]'>Search result not found</p>
                )
              }
              
              {
                searchValue !== "" && searchResults.length !== 0 && (
                  <div
                  className='absolute bg-white z-10 shadow-lg rounded-[16px]'>
                  <UserCard data={searchResults} />
                  </div>
                )
              }
        </>

        <LeftHeader taskCount={24} disqualifiedCount={78} qualifiedCount={247} />

        <span className='my-3 '></span> 
        <UserCard data={usersInfo}/>
    </div>
  )
}

export default Main