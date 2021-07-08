import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import background from './background.jpg';
import moment from 'moment';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../Provider/context';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: 'column',
        backgroundImage: `url(${background})` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "top",
        backgroundSize: 'cover',
        textAlign: 'center',
        padding: '0px 0px 0px 0px',
        width: '100%',
        height: '120vh',
        [theme.breakpoints.down('xs')]: {
            padding: '30px 0px 0px 0px',
        },
    },
    title:{
        padding: '100px 10px 50px 10px', 
        fontSize: '40px',
        [theme.breakpoints.down('sm')]: {
            padding: '100px 5px 30px 5px', 
            fontSize: '25px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '60px 0px 10px 0px',
        },
    },
    dateBox:{
        display: 'flex',
        justifyContent: 'center'
    },
    dateItem:{
        margin: '20px',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            margin: '10px',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '10px',
        },
    },
    dateText:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '25px'
        },
    },
    dateLabel:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        },
    },
    buttonBox1:{
        display: "flex",
        justifyContent:'center',
       
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            margin: '120px 20px 20px 20px',
            justifyContent: 'center',
            alignItems: 'center',
          },
        [theme.breakpoints.down('xs')]: {
           
            
          },        
    },
    appButton1:{
       width: '30rem',
       height: "6rem",
       margin: '100px 20px 20px 20px',
       [theme.breakpoints.down('sm')]: {
        margin: '5px 0px 20px 0px',
      },
        [theme.breakpoints.down('xs')]: {
            width: '30rem',
            height: "5.5rem",
        },    
    },
    buttonBox2:{
        display: "flex",
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        margin: '100px 0px 0px 0px',
        [theme.breakpoints.down('sm')]: {
            margin: '60px 20px 20px 20px',
            justifyContent: 'center',
            
          },
        [theme.breakpoints.down('xs')]: {
            margin: '150px 5px 10px 5px',
            
          },        
    },
    appButton2:{
       width: '60rem',
       height: "6rem",
       margin: '0px 20px 20px 20px',
       [theme.breakpoints.down('sm')]: {
        margin: '5px 0px 20px 0px',
      },
        [theme.breakpoints.down('xs')]: {
            width: '30rem',
            height: "5.5rem",
        },    
    },
}));

export default function ClassLink() {
    const classes = useStyles();
    const ctx = useContext(AuthContext);
    const [link, setLink] = React.useState(false);
    const [state, setState] = React.useState({
        days: 1,
        hours: 7,
        minutes: 0,
        seconds: 0,
    })

    // React.useEffect(() => {
    //     ctx.getEvents();
    //     console.log(ctx.events.PCMdate);
    //     const date = moment(ctx.events.PCMdate);
    //     console.log(date.format("MM DD YYYY, h:mm a"));
    //     setTime(date.format("MM DD YYYY, h:mm a"));
    //     console.log(time)
    // }, [])

    React.useEffect(() => {
        if(ctx.events.PCMdate){
            setInterval(() => {
                const date = moment(ctx.events.PCMdate);
                const then = moment(date.format("MM DD YYYY, h:mm a"), "MM DD YYYY, h:mm a");
                const now = moment();
                const countdown = moment(then - now);
                const days = countdown.format('D');
                const hours = countdown.format('HH');
                const minutes = countdown.format('mm');
                const seconds = countdown.format('ss');
                setState({ days, hours, minutes, seconds });
            }, 1000);
        }else{
            ctx.getEvents()
            const days = 1
            const hours = 7
            const minutes = 0 
            const seconds = 0
            setState({ days, hours, minutes, seconds });
        }
    }, [])

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(ctx.events.PCMdescription)
        setLink(true)
      }

    // const dateFixed = () => {
    //     console.log(ctx.events.PCMdate);
    //     const date = moment(ctx.events.PCMdate);
    //     console.log(date.format("MM DD YYYY, h:mm a"));
    //     setTime(date.format("MM DD YYYY, h:mm a"));
    //     console.log(time)
    //   }
    
      
  return (
    <div className={classes.root}>
            <Typography variant='h3' className={classes.title} >PCM JOURNEY ONLINE CLASS IS STARTING IN : </Typography>
            <div className={classes.dateBox}>
                <div className={classes.dateItem}> 
                    <Typography variant='h2' className={classes.dateText}  >{Math.abs(1 - state.days)}</Typography>
                    <Typography variant='h3'  className={classes.dateLabel}  >DAYS</Typography>
                </div>
                <div className={classes.dateItem}>
                    <Typography variant='h2' className={classes.dateText} >{Math.abs(state.hours - 7)}</Typography>
                    <Typography variant='h3' className={classes.dateLabel}>HOURS</Typography>
                </div>
                <div className={classes.dateItem}>
                    <Typography variant='h2' className={classes.dateText} >{state.minutes}</Typography>
                    <Typography variant='h3' className={classes.dateLabel}>MINUTES</Typography>
                </div>
                <div className={classes.dateItem}>
                    <Typography variant='h2' className={classes.dateText} >{state.seconds}</Typography>
                    <Typography variant='h3' className={classes.dateLabel}>SECONDS</Typography>
                </div>

            </div>

            <div className={classes.buttonBox1} style={{display:(ctx.loggedIn && 'none')}}>
                    <Link to='/signup'>
                        <Button variant="contained" color="primary" className={classes.appButton1} >
                            Sign Up
                        </Button>
                    </Link>
                    <Link to='/login'>
                        <Button variant="contained" color="secondary" className={classes.appButton1} >
                            LOG In
                        </Button>
                    </Link>
            </div>

            <div className={classes.buttonBox2} style={{display:(!ctx.loggedIn && 'none')}}>
                    <a href={ctx.events.PCMlink} >
                        <Button variant="contained" color="secondary" className={classes.appButton2} >
                            <Typography variant='h6' color="primary"  >  Open Zoom Meeting Now</Typography>
                          
                        </Button>
                    </a>
                    {/* <Button onClick={copyCodeToClipboard} style={{backgroundColor: (link && '#79ce638e') }} variant="contained" color="secondary" className={classes.appButton2} >
                            {!link ? 'Click to Copy Invite Link' : "Link Is Copied"}
                    </Button> */}
            </div>


            
    </div>
  );
}