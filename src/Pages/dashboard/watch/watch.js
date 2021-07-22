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
import IconButton from '@material-ui/core/IconButton';
import { Link } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    root: {
    margin: '20px 0px',
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
    const [expanded, setExpanded] = React.useState(false);
    const [video , setVideo] = React.useState([]);
    let history = useHistory();


    useEffect(() => {
        async function getVideo() { 
            const {data} = await axios.get(`${config.SERVER_URL}/watches?_sort=date:ASC`, {
              headers: { Authorization: `Bearer ${ctx.getCookie('token')}` }
              });
              setVideo(data)
        }
        getVideo()
    }, [])

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <div className={classes.root}>
            {video.map((vid, index)=>{
                return (
                    <Card key={index} className={classes.cardroot}>
                                
                                    <CardContent>
                                        <Typography  variant="h5" component="h2">
                                            {vid.title} 
                                        </Typography>
                                        <Typography  variant="h6" component="h2">
                                            {moment(vid.date).format('MMMM DD, YYYY')}
                                        </Typography>
                                        <Typography  variant="caption" component="h2">
                                           {vid.description}
                                        </Typography>
                                    </CardContent>
                                
                                <CardActions>
                                            <Button size="large" color="primary" >
                                                 <Link href={vid.url}>
                                                    <Typography variant="h6" component="h2"> Watch Now </Typography>
                                                </Link>
                                            </Button>
                                </CardActions>

                    </Card>

                )

            })}
                    
        </div>
    );

}