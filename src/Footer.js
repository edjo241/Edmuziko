import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid,Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_left'>
                <img className='footer_albumLogo'src='data:image/jpeg;base64,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' alt=''/>
                <div className='footer_songInfo'>
                    <h4>Yeah!</h4>
                    <p>Usher</p>
                </div>
            </div>
            <div className='footer_center'>
                < ShuffleIcon className='footer_green'/>
                < SkipPreviousIcon className='footer_icon'/>
                < PlayCircleOutlineIcon fontSize='large' className='footer_icon'/>
                <SkipNextIcon  className='footer_icon'/>
                <RepeatIcon  className='footer_green'/>
            </div>
            <div className='footer_right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
