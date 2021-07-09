import React, {useEffect, useContext} from 'react';

import { useParams } from 'react-router-dom'
import {AuthContext} from '../../../../Provider/context';
import { makeStyles } from '@material-ui/core/styles';

import config from '../../../../Config/config.json';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '30px 0px',
      width: '100%',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        margin: '10px 0px',
      },
    },
    video:{
        width: "100%",
        display: "flex",
        justifyContent:'center',
        margin: '70px 20px 10px 20px',
        [theme.breakpoints.down('md')]: {
            margin: '70px 20px 10px 20px',
          },
        [theme.breakpoints.down('sm')]: {
            margin: '70px 0px 10px 0px',
          },
    },
    videoFrame:{
        width:"97rem" ,
        height:"56rem",
        [theme.breakpoints.down('md')]: {
            width:"80rem" ,
            height:"45rem",
          },
        [theme.breakpoints.down('sm')]: {
            width:"70rem" ,
            height:"40rem",
          },
        [theme.breakpoints.down('xs')]: {
            width:"80rem" ,
            height:"20rem",
          },
    },
    describeBox:{
        margin: '10px 200px',
        [theme.breakpoints.down('md')]: {
          margin: '10px 150px',
        },
      [theme.breakpoints.down('sm')]: {
          margin: '10px 10px',
        },
      [theme.breakpoints.down('xs')]: {
           margin: '10px 10px',
        },
    } 
 }));


export default function WatchVideo() {
    const classes = useStyles();
    const ctx = useContext(AuthContext);
    const { id } = useParams();
    const [video , setVideo] = React.useState({});
    
    useEffect(() => {
        async function getVideo() { 
            const {data} = await axios.get(`${config.SERVER_URL}/watches`, {
              headers: { Authorization: `Bearer ${ctx.getCookie('token')}` }
              });
              setVideo(data[id])
              console.log(video)
        }
        getVideo()
    }, [])
    if(video){
        return (
            <div className={classes.root}>
    
                <div className={classes.video} >
                    <iframe className={classes.videoFrame}  src={video.url} title={video.title} frameBorder="0" allowFullScreen={true}></iframe>
                </div>   
                <Typography variant='h5'>{video.title}</Typography>
                <div  className={classes.describeBox}>
                    <Typography variant='body2'>{video.description}</Typography>
                </div>
                
                
            </div>
        );
    
    }
    
}