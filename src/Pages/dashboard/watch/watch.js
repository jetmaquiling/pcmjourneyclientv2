import React, {useEffect, useContext} from 'react';
import {AuthContext} from '../../../Provider/context';
import { makeStyles } from '@material-ui/core/styles';
import config from '../../../Config/config.json';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Link } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
    margin: '80px 0px',
      width: '100%',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    cardroot:{
        margin: '20px 0px',
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: "90%",
          },
        [theme.breakpoints.down('xs')]: {
            width: "95%",
          },
    },
   
 }));


export default function Watch() {
    const classes = useStyles();
    const ctx = useContext(AuthContext);
    const [video , setVideo] = React.useState([]);
    let history = useHistory();


    useEffect(() => {
        async function getVideo() { 
            const {data} = await axios.get(`${config.SERVER_URL}/watches`, {
              headers: { Authorization: `Bearer ${ctx.getCookie('token')}` }
              });
              setVideo(data)
        }
        getVideo()
    }, [])

    return (
        <div className={classes.root}>
            {video.map((vid, index)=>{
                return (
                    <Card key={index} className={classes.cardroot}>
                            <CardActionArea onClick={()=>history.push(`/dashboard/watch/${index}`)}>
                                <CardMedia
                                component="img"
                                alt={vid.title}
                                height="250"
                                image={vid.clipboard.url}
                                title={vid.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {vid.title} - {moment(vid.date).format('MMMM DD, YYYY')}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                    </Card>

                )

            })}
                    
        </div>
    );

}