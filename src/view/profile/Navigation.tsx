import React from 'react'
import arrowIcon from "../../assets/icons/arrowIcon.png"

// type Props = {}
interface candidateLinkProps {
    title: string
    link: string
    id: string
    selected?: boolean

}

const candidateLinks: candidateLinkProps[] = [
    {
        title: "Profile",
        link: "",
        id: "1",
        selected: true
    },
    {
        title: "Video",
        link: "",
        id: "2"
    },
    {
        title: "Evaluation",
        link: "",
        id: "3" 
   },
   {
    title: "Placement",
    link: "",
    id: "4"
   },
   {
    title: "Compliance",
    link: "",
    id: "5"
   },
   {
    title: "Notes",
    link: "",
    id: "6"
   }
]

const Navigation: React.FC = () => {
  return (
    <div className='flex items-center w-full justify-around'>
        {
            candidateLinks.map((nav: candidateLinkProps) => {
                return (
                    <a key={nav.id} className={`w-[90px] text-center mb-5 py-1 font-semibold text-[14px] ${nav.selected && "text-[#0557E5] border-b-4 border-[#0557E5]"}`} href={nav.link}>{nav.title}</a>
                )
            })  
        }
        <img src={arrowIcon} alt={"arrow side"} />
    </div>
  )
}

export default Navigation