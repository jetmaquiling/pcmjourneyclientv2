import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


const useStyles = makeStyles((theme) => ({
    box:{
        width: '100%',
        padding: '120px 0px 20px 0px' ,
        display:'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
    },
    link:{
        color: '#FF0000'
    },
    

}))


export default function Backlinks() {
    const myRef = React.useRef(null)
    const classes = useStyles();
    React.useEffect(() => {
        scrollToRef(myRef)
    }, [])
    return (
        <div className={classes.box} ref={myRef}>
            <Typography variant="h4">
                Resources
            </Typography>
            <br/>
            <br/>
            <Typography variant="caption">
                Text and Qoutes Are Found in  <a className={classes.link}  href="https://www.awakenthegreatnesswithin.com/35-inspirational-quotes-on-decisions/">Awaken The Greatness Within</a>
            </Typography>
            <br/>
            <Typography variant="caption">
                Text and Qoutes Are Found in  <a className={classes.link}  href="https://www.dashe.com/blog/motivation/inspiring-learning-quotes/">Dashe & Thompson</a>
            </Typography>

            <br/>
            <Typography variant="caption">
                Text and Qoutes Are Found in  <a className={classes.link}  href="https://www.teachthought.com/learning/52-best-quotes-about-learning/">TeachThought</a>
            </Typography>

            <br/>
            <Typography variant="caption">
                Text and Qoutes Are Found in  <a className={classes.link}  href="https://www.inc.com/jayson-demers/51-quotes-to-inspire-success-in-your-life-and-business.html">INC.COM</a>
            </Typography>

            <br/>

            <Typography variant="caption">
               Text and Qoutes are found in <a className={classes.link}  href="https://www.lollydaskal.com/leadership/100-motivational-quotes-will-inspire-succeed/">LOLLY DASKAL</a>
            </Typography>
            <br/>
            <Typography variant="caption">
               Text and Qoutes are found in <a className={classes.link}  href="https://hbr.org/2011/11/why-inspiration-matters#:~:text=role%20of%20inspiration.-,Inspiration%20awakens%20us%20to%20new%20possibilities%20by%20allowing%20us%20to,because%20of%20its%20elusive%20nature.">Harvard Business Review Home</a>
            </Typography>


            
                
            
            
            
        </div>
        
    );
}