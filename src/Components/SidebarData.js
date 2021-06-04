import React from 'react'
import { BsDropletFill } from 'react-icons/bs'
import { AiFillClockCircle } from 'react-icons/ai'
import { MdSettingsApplications } from 'react-icons/md'
import { HiDownload } from 'react-icons/hi'
import { AiOutlinePicture } from 'react-icons/ai'
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { MdLocalMovies } from 'react-icons/md'
import { RiFileLine } from 'react-icons/ri'
import { AiFillCloud } from 'react-icons/ai'
import { FaDesktop } from 'react-icons/fa'
export const SidebarData = [
    {
        title: 'AirDrop',
        path: '/airdrop',
        icon: <BsDropletFill />,
        cName: 'nav-text'

    },
    {
        title: 'Recents',
        path: '/recents',
        icon: < AiFillClockCircle />,
        cName: 'nav-text'

    },
    {
        title: 'Applications',
        path: '/applications',
        icon: <MdSettingsApplications />,
        cName: 'nav-text'
    },

    {
        title: 'Downloads',
        path: '/downloads',
        icon: <HiDownload />,
        cName: 'nav-text'


    },
    {
        title: 'Pictures',
        path: '/pictures',
        icon: <AiOutlinePicture />,
        cName: 'nav-text'

    }
    , {
        title: 'Music',
        path: '/music',
        icon: <BsMusicNoteBeamed />,
        cName: 'nav-text'

    },
    {
        title: 'Movies',
        path: '/movies',
        icon: <MdLocalMovies />,
        cName: 'nav-text'


    }
    ,
    {
        title: 'Creative cloud files',
        path: '/cloud',
        icon: <RiFileLine />,
        cName: 'nav-text'


    }


]
export const cloudData = [{
    title: 'iCloud drive',
    path: '/drive',
    icon: <AiFillCloud />,
    cName: 'nav-text'

},
{
    title: 'Documents',
    path: '/documents',
    icon: <RiFileLine />,
    cName: 'nav-text'
}
    , {
    title: 'Desktop',
    path: '/desktop',
    icon: <FaDesktop />,
    cName: 'nav-text'
}

]