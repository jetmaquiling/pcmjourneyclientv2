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

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px 0px 0px 0px',
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            padding: '30px 0px 0px 0px',
        },
    },

    rootItem:{
        padding: '30px 30px 30px 30px',
        [theme.breakpoints.down('xs')]: {
            padding: '10px 10px 60px 10px',
        },
    },
    noteBox:{
        margin: '0px 0px 20px 0px',
    },
    button:{
        width: '100%',
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

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function PCMJourneyNav() {
    const classes = useStyles();
    const myRef = React.useRef(null)

    React.useEffect(() => {
        scrollToRef(myRef)
    }, [])
    
  return (
    <Grid ref={myRef}  container className={classes.root}>
        

        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >PCM Journey Online Class:</Typography>
                <Typography variant="body2" >Your mindset, your belief system, is a limit on your success in business. When you read business biographies (and other biographies) you can infect yourself with empowered beliefs. You can pick up the beliefs that drove them to see things that were invisible to others. You can invariably pick up the traits that allow them to succeed, things like grit, determination, persistence, and resourcefulness.</Typography>
            </div>

            <Link to="/dashboard/pcmjourney">
                <Button variant="contained" className={classes.button} >
                    <div className={classes.buttonitembox}>
                        <div style={{display: 'flex',alignItems: 'center',}}>
                        <LinkIcon className={classes.iconButton} />
                        <Typography className={classes.textButton} variant="body1" >Get Online Class Link</Typography>
                        </div>
                        <ArrowForwardIosIcon className={classes.arrowButton} />
                    </div>
                </Button>
            </Link>
            
        </Grid>
        
        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >100 Prospect List:</Typography>
                <Typography variant="body2" >Having a list of prospects is important in lead generation and translates to profits in businesses in the long-term. Think about it- you might be the most skilled salesperson at your company, but if you’re reaching out to the wrong people, your sales skills will have no impact on their desire to purchase your product. Your success is dependent on the quality of your sales prospect lists. </Typography>
            </div>
            <Link to="/dashboard/prospectlist">
                <Button variant="contained" className={classes.button}  >
                    <div className={classes.buttonitembox}>
                        <div style={{display: 'flex',alignItems: 'center',}}>
                        <FormatListNumberedIcon className={classes.iconButton} />
                        <Typography className={classes.textButton} variant="body1" >100 Prospect List</Typography>
                        </div>
                        <ArrowForwardIosIcon className={classes.arrowButton} />
                    </div>
                </Button>
            </Link>
        </Grid>
        
        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >Watch PCM Videos:</Typography>
                <Typography variant="body2" >The main purpose of a PCM recorded video is to inspire Viewers . These videos are not meant to train employees or deliver information. Instead, they are carefully designed to inspire listeners to develop a sense of greater loyalty to the organization & renew their commitment to excellence.</Typography>
            </div>
            <Link to="/dashboard/watch">
                <Button variant="contained" className={classes.button}  >
                    <div className={classes.buttonitembox}>
                        <div style={{display: 'flex',alignItems: 'center',}}>
                        <AlbumIcon className={classes.iconButton} />
                        <Typography className={classes.textButton} variant="body1" >Watch PCM Videos</Typography>
                        </div>
                        <ArrowForwardIosIcon className={classes.arrowButton} />
                    </div>
                </Button>
            </Link>
        </Grid>

        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >Every Journey Has A Story:</Typography>
                <Typography variant="body2" > Good inspirational stories and quotes are a great way to uplift our soul fill it with hope and optimism. Stories are a powerful tool to touch our heart. A good inspirational story motivates us to keep fighting for our heart's desires and dream. An inspirational story can be happy, sad, motivating, or even depressing. The inspirational stories are key to building our character and make us what we are today.</Typography>
            </div>

            <Link to="/blog">
                <Button variant="contained" className={classes.button}  >
                    <div className={classes.buttonitembox}>
                        <div style={{display: 'flex',alignItems: 'center',}}>
                        <LocalLibraryIcon className={classes.iconButton} />
                        <Typography className={classes.textButton} variant="body1" >PCM Journey Blogs</Typography>
                        </div>
                        <ArrowForwardIosIcon className={classes.arrowButton} />
                    </div>
                </Button>
            </Link>
        </Grid>

        {/* <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >My Dreambook:</Typography>
                <Typography variant="body2" > Excuses are thieves that steal your dreams. Discouraging thoughts have the power to turn dreams into dust. The Dreambook is fitted with positive messages and reminders to free your mind from troubling roadblocks and bust bad influences for good. It’s like receiving pieces of advice from a trustworthy friend who can push you to ditch the things that hold you back and make you quit up on your goals.</Typography>
            </div>
            
                <Button variant="contained" className={classes.button}  >
                    <div className={classes.buttonitembox}>
                        <div style={{display: 'flex',alignItems: 'center',}}>
                        <LocalLibraryIcon className={classes.iconButton} />
                        <Typography className={classes.textButton} variant="body1" >My Dreambook</Typography>
                        </div>
                        <ArrowForwardIosIcon className={classes.arrowButton} />
                    </div>
                </Button>
           
        </Grid>

        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >PCM Journey Task:</Typography>
                <Typography variant="body2" > Why should you do the PCM task? So you don’t waste time working out where you were, to get the wonderful glow when you know you’ve really completed a task,and to feel more in control of the pace of your success .So, in summary, if I complete more tasks I will have more time to do things I really want. It sounds so good from now I’m going to focus on completing tasks.</Typography>
            </div>
            
            <Button variant="contained" className={classes.button}  >
                <div className={classes.buttonitembox}>
                    <div style={{display: 'flex',alignItems: 'center',}}>
                    <PlaylistAddCheckIcon className={classes.iconButton} />
                    <Typography className={classes.textButton} variant="body1" >Journey Task</Typography>
                    </div>
                    <ArrowForwardIosIcon className={classes.arrowButton} />
                </div>
            </Button>
            
        </Grid>

        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >Book Quiz:</Typography>
                <Typography variant="body2" > If there is one thing business books will do without fail it is to provide you with business acumen. They will teach you the common business concepts you need to be fluent in conversations with other business people. Reading widely will introduce you to concepts with which you are not yet familiar. </Typography>
            </div>
           
            <Button variant="contained" className={classes.button}  >
                <div className={classes.buttonitembox}>
                    <div style={{display: 'flex',alignItems: 'center',}}>
                    <NotListedLocationIcon className={classes.iconButton} />
                    <Typography className={classes.textButton} variant="body1" >Book Quiz</Typography>
                    </div>
                    <ArrowForwardIosIcon className={classes.arrowButton} />
                </div>
            </Button>
           
        </Grid>


        <Grid item md={6} className={classes.rootItem} d>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >PHBWorx Events:</Typography>
                <Typography variant="body2" > If you invest the time and money to attend a live event that offers value for your small business, you can almost guarantee that you will return home with new tools, valuable contacts and a renewed approach that will help you manage and grow your business better than before.</Typography>
            </div>
            
            <Button variant="contained" className={classes.button}  >
                <div className={classes.buttonitembox}>
                    <div style={{display: 'flex',alignItems: 'center',}}>
                    <EventIcon className={classes.iconButton} />
                    <Typography className={classes.textButton} variant="body1" >Attend PHBWorx Events</Typography>
                    </div>
                    <ArrowForwardIosIcon className={classes.arrowButton} />
                </div>
            </Button>
           
        </Grid>

        <Grid item md={6} className={classes.rootItem}>
            <div className={classes.noteBox}  >
                <Typography variant="body1" >Car Incentives Program:</Typography>
                <Typography variant="body2" > Inspiration awakens us to new possibilities by allowing us to transcend our ordinary experiences and limitations. Inspiration propels a person from apathy to possibility, and transforms the way we perceive our own capabilities. Inspiration may sometimes be overlooked because of its elusive nature.</Typography>
            </div>
           
            <Button variant="contained" className={classes.button}  >
                <div className={classes.buttonitembox}>
                    <div style={{display: 'flex',alignItems: 'center',}}>
                    <DriveEtaIcon className={classes.iconButton} />
                    <Typography className={classes.textButton} variant="body1" >Car Incentives Program</Typography>
                    </div>
                    <ArrowForwardIosIcon className={classes.arrowButton} />
                </div>
            </Button>
           
        </Grid>

 */}
        <Link to="/contact">
            <Grid item md={6} className={classes.rootItem}>
                <div className={classes.noteBox}  >
                    <Typography variant="body1" >Contact Us:</Typography>
                    <Typography variant="body2" > Are you a user with questions about PCM Journey? We’re ready to help.The more we help, the happier we feel. Volunteering increases self-confidence. You are doing good for us and the community, which provides a natural sense of accomplishment. Your role as a PCM Journey participant also give us a sense of pride and honor.</Typography>
                </div>
                
                <Button variant="contained" className={classes.button}  >
                    <div className={classes.buttonitembox}>
                        <div style={{display: 'flex',alignItems: 'center',}}>
                        <ContactMailIcon className={classes.iconButton} />
                        <Typography className={classes.textButton} variant="body1" >Contact Us</Typography>
                        </div>
                        <ArrowForwardIosIcon className={classes.arrowButton} />
                    </div>
                </Button>
        
            </Grid>
        </Link>







    </Grid>
  );
}