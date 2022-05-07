import React from "react"
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'

export const SideBar = [
    {
        title: 'Forms',
        path: '/post',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        title: 'search',
        path: '/search',
        icon: <AiIcons.AiOutlineFileSearch/>,
        cName: 'nav-text'
    },
    {
        title: 'PDF',
        path: '/pdf',
        icon: <AiIcons.AiFillFilePdf/>,
        cName: 'nav-text'
    }
    // {
    //     title: 'Team',
    //     path: '/team',
    //     icon: <IoIcons.IoMdPeople/>,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Messages',
    //     path: '/messages',
    //     icon: <FaIcons.FaEnvelopeOpenText/>,
    //     cName: 'nav-text'
    // },
    // {
    //     title: 'Support',
    //     path: '/support',
    //     icon: <IoIcons.IoMdHelpCircle/>,
    //     cName: 'nav-text'
    // },
    
]