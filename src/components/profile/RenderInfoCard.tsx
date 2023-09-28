export const renderInfoCard = (label:string, value: string, iconName: string, ICON: Record<string, string>, otherValue?: string) => {
    return (
      <div className='flex items-center'>
        <img
          className='border border-[#ECECEC] rounded-[8px] p-2'
          src={ICON[iconName]}
          alt={`${label} icon`}
        />
        <div className='ml-3'>
          <p className='text-[14px] mb-2 font-[500]'>{label}</p>
          <p className='text-[14px] font-light'>{value} <span className="text-[#B8B8B8] font-extralight">{otherValue}</span></p>
        </div>
      </div>
    );
  };