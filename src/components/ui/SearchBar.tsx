import warnIcon from "../../assets/icons/warningIcon.png"
import searchIcon from "../../assets/icons/searchIcon.png"

interface searchProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onSearch: any
    searchValue?: string
}

const SearchBar: React.FC<searchProps> = ({ onSearch, searchValue }) => {


    return (
        <div className='focus:border-gray-300 focus:ring-blue-300 focus:border px-2 relative  w-[384px] flex items-center bg-white rounded-[8px]'>
            <img src={searchIcon} className="absolute left-5" alt="warning" />
            <input value={searchValue} name="searchValue" onChange={onSearch} placeholder='Serach by name, edu, exp or #tag' className='outline-none p-3 ml-10 w-[80%] bg-white placeholder:text-[14px] text-[14px]' />

            <img src={warnIcon} className='absolute right-5' alt="warning" />
        </div>
    )
}

export default SearchBar