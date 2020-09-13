import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const[{playlists},dispatch]=useDataLayerValue();
    return (
        <div className='sidebar'> 
        <img className='sidebar_logo' src="music_logo_ctrd.jpg" alt=''/>
        <SidebarOption Icon={HomeIcon}title='Home'/>
        <SidebarOption Icon={SearchIcon}title='Search'/>
        <SidebarOption Icon={LibraryMusicIcon}title='Your Library'/>
        <br/>
        <strong className='sidebar_title'>PLAYLISTS</strong>
        <hr/>

        {playlists?.items?.map(playlist =>(
            <SidebarOption title={playlist.name}/>
        ))}
        {/* <SidebarOption title='Rock'/>
        <SidebarOption title='Hip Hop'/>
        <SidebarOption title='Rnb'/> */}
        </div>
    )
}

export default Sidebar
