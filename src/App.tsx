import SideNavigation from './Layout/SideNavigation'

import ApplicantsPanel from './view/people/ApplicantsPanel'
import Profile from './view/profile/ApplicantProfile'

function App() {
  //console.log(window.location.pathname)

  return (
    <>
      <SideNavigation>
        <main className='flex items-start'>
          <div className='scrollbar sticky top-0 h-screen w-[800px] overflow-x-hidden overflow-y-auto'>
            <ApplicantsPanel />
          </div>

          <div className='scrollbar sticky top-0 h-screen -ml-72 w-[70%] overflow-x-hidden overflow-y-auto'>
            <Profile />
          </div>  
        </main>
      </SideNavigation>
    </>
  )
}

export default App
