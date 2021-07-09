import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import EventIcon from '@material-ui/icons/Event';
import LinkIcon from '@material-ui/icons/Link';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import {Link} from 'react-router-dom';
import AlbumIcon from '@material-ui/icons/Album';
import config from '../../Config/config.json';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px 0px 0px 0px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            padding: '30px 0px 0px 0px',
        },
    },

    rootItem:{
        overflow: 'hidden',
        display: 'flex',
        
        height: '200px',
        alignItems: 'center',
        padding: '30px 200px 60px 200px',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
        },
        [theme.breakpoints.down('sm')]: {
            padding: '10px 10px 20px 10px',
            
        },
        [theme.breakpoints.down('xs')]: {
            padding: '10px 5px 0px 5px',
            alignItems: 'end'
        },
    },
    imageBox:{
        width: '40%',
        display: 'flex',
        alignContent: 'center',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            width: '50%',
        },
        // [theme.breakpoints.down('md')]: {
        //     width: '50%',
        // },
        // [theme.breakpoints.down('sm')]: {
        //     width: '50%',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     width: '400%',
        // },
    },
    image:{
        padding: '10px',
        width: '90%',
        height: '40%',
        [theme.breakpoints.down('md')]: {
            padding: '0px',
            width: '90%',
            height: '40%',
        },
       
    },
    noteBox:{
        width: '60%',
        margin: '0px 0px 20px 0px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            width: '60%',
        },
        [theme.breakpoints.down('sm')]: {
            width: '70%',
        },
        
    },
    heading:{
        [theme.breakpoints.down('sm')]: {
            fontSize: '40px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '25px'
        },
    },


    title:{
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        },
    },
    author: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '10px'
        },
    },
    description:{
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },
    },

    button:{
        width: '100%',
        height: '50%',
        background: "linear-gradient(to right, #e43a15, #e65245)"
    },
    buttonitembox:{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconButton:{
        color: theme.palette.secondary.light
    },
    textButton:{
        margin: '0px 10px 0px 10px',
        color: theme.palette.secondary.light,
        [theme.breakpoints.down('xs')]: {
            fontSize: '15px'
        },
    },
    arrowButton:{
        color: theme.palette.secondary.light
    },


}));

export default function Blog() {
    const classes = useStyles();
    const myRef = React.useRef(null);

    const [blogs, setBlogs] = React.useState([]);

    React.useEffect(() => {
        async function getBlogs() { 
            const {data} = await axios.get(`${config.SERVER_URL}/blogs/`);
            setBlogs(data)
        }
        getBlogs()
    }, [])
  
  return (
    <div  container className={classes.root}>

        <div  item md={12} style={{padding: '100px 0px 30px 0px' , width: '100%' ,  display:'flex' , justifyContent: 'center', textAlign: 'center'}}>

        <Typography variant='h2' color='primary' className={classes.heading} ><b>" Every Journey Has A Story "</b></Typography>
        </div>

        {blogs.map((blog, index)=>{
            return (
                <Link to={`/blog/${blog.id}`}>
                    <div item className={classes.rootItem}>

                        <div className={classes.imageBox} >
                            <img  className={classes.image} src={blog.clipboard.url} />
                        </div>
                        
                        <div className={classes.noteBox}  >
                                <Typography variant="h5" className={classes.title} >{blog.title}</Typography>
                                <Typography variant="body2" className={classes.author} >By {blog.author}</Typography>
                                <br/>
                                <Typography variant="body2" className={classes.description} >{blog.description}</Typography>
                        </div>
                        
                    </div>
                </Link>

            )
            



        })}
        

    </div>
  );
}