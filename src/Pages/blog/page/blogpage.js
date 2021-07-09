import React, {useEffect, useContext} from 'react';

import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

import config from '../../../Config/config.json';
import axios from 'axios';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import MetaTags from 'react-meta-tags';

import Button from '@material-ui/core/Button';
import FacebookIcon from '@material-ui/icons/Facebook';
import ShareIcon from '@material-ui/icons/Share';
import { DriveEtaSharp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '100px 100px 100px 100px',
        width: '50%',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        wordWrap: "break-word" ,
         overflow:"hidden",

        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: '70px 0px',
        },
    },
    main:{
        margin: '5px'
    },
    content:{
        width: '100%',
        margin: "10px"
    },
    
    imageBox:{
        width: '100%',
        display: 'flex',
        alignContent: 'center',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
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
        width: '100%',
        height: '50%',
        [theme.breakpoints.down('md')]: {
            padding: '0px',
            width: '100%',
            height: '40%',
        },
    },
    title:{
        fontSize: '50px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '35px'
        },
    },
    author:{
        margin: '10px',
        display: 'flex',
       alignItems: 'center',
    }
       
  
 }));


export default function BlogPage() {
    const classes = useStyles();
    const { id } = useParams();
    const [blog , setBlog] = React.useState({});
    const [link, setLink] = React.useState(false);


    useEffect(() => {
        async function getBlog() { 
            const {data} = await axios.get(`${config.SERVER_URL}/blogs/${id}`);
            setBlog(data)
            setBlog({...data, clipboard: data.clipboard.url, thumbnail: data.clipboard.formats.thumbnail.url  })
            console.log(blog)
        }
        getBlog()

    }, [])

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(`https://jetzrecords.com/blog/${id}`)
        setLink(true)
      }

    if(blog){
        return (

            <div className={classes.root}>

                <MetaTags>
                    <meta property="og:type" content="website" />
                    <title>{blog.title}</title>
                    <meta property="og:title" content={blog.title} />
                    <meta property="og:image" content={blog.thumbnail} />
                    <meta property="og:description" content={blog.description} />
                </MetaTags>

                <div  className={classes.main}>
                    <Typography variant="h6" >Published At {moment(blog.published_at).format("MMMM DD, YYYY")}</Typography>
                    <Typography variant="h2" className={classes.title}>{blog.title}</Typography>
                    <Typography variant="caption" >{blog.description}</Typography>

                    <div className={classes.author}>
                        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50"><mask id="mask__beam" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36"><rect width="36" height="36" fill="white" rx="72"></rect></mask><g mask="url(#mask__beam)"><rect width="36" height="36" fill="#f85931"></rect><rect x="0" y="0" width="36" height="36" transform="translate(9 9) rotate(59 18 18) scale(1.2)" fill="#009989" rx="6"></rect><g transform="translate(4.5 4.5) rotate(9 18 18)"><path d="M13,21 a1,0.75 0 0,0 10,0" fill="white"></path><rect x="10" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect><rect x="24" y="14" width="1.5" height="2" rx="1" stroke="none" fill="white"></rect></g></g></svg> 
                        
                        <Typography variant="h6" style={{margin: '10px'}}>By {blog.author}</Typography>
                    </div>
                   
                   
                   

                    <br/>

                    <div className={classes.imageBox} >
                        <img  className={classes.image} src={blog.clipboard} />
                    </div>

                    <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fjetzrecords.com%2Fblog%2f${id}%2fnice&amp;src=sdkpreparse`}>
                            <Button variant="contained" style={{float: 'right',backgroundColor: '#3b5998' ,color: '#fff', margin: '5px'}} >
                                <FacebookIcon/> Share
                            </Button>
                    </a>

                    
                    <Button onClick={copyCodeToClipboard} variant="contained" color={!link ? 'primary' : "secondary"} style={{float: 'right' , margin: '5px'}} >
                        <ShareIcon/> {!link ? 'Copy Link' : "Copied"}
                    </Button>

                </div>
               
    
                <div className={classes.content}>
                    <div dangerouslySetInnerHTML={{__html: `${blog.content}`}} />
                </div>
                
                
                
            </div>
        );
    }
    
}
  