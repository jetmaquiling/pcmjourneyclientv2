import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import image from './image.jpg';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    box:{
        width: '100%',
        height: '140vh',
        display: 'flex',
        margin: '0px 0px 150px 0px',
        alignContent: 'center',
        [theme.breakpoints.down('xs')]: {
            height: '200vh',
          },
    },

    item: {
        display: 'flex',
        flexDirection:'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        backgroundImage: `url(${image})` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        backgroundSize: 'cover',
        clipPath: 'polygon(0 11%, 100% 0, 100% 89%, 0% 100%)',
        [theme.breakpoints.down('xs')]: {
            clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0% 100%)',
          },
    },
    titleBox:{
        height: '120px',
        width: '570px',
        backgroundColor: '#fff',
        margin: '100px 0px 40px 0px',
        clipPath: 'polygon(3% 0, 100% 0, 97% 100%, 0% 100%)',
        [theme.breakpoints.down('xs')]: {
            margin: '120px 0px 40px 0px',
            height: '55px',
            width: '250px',
          },
    },
    title:{
        margin: '20px',
        [theme.breakpoints.down('xs')]: {
            margin: '10px',
            fontSize: '30px'
          },
        
    },
    contentBox:{
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '0px 0px 30px 0px'
    },
    contentItem:{
        display: "flex",
        flexDirection:'column',
        justifyContent: 'space-between',
        margin: '10px',
        padding:'20px',
        backgroundColor: '#fff',
        clipPath: 'polygon(0 4%, 100% 0, 100% 96%, 0% 100%)',
        width: '20%',


    },
    contentIcon:{
        fontSize: '50px'
    },
    

}))


export default function Testimony () {
    const classes = useStyles();
   
    return (
        <div className={classes.box} >
            <div className={classes.item}>
                <div className={classes.titleBox}>
                    <Typography  variant="h2" className={classes.title}>
                        Join The Others
                    </Typography>
                </div>

                <Grid container className={classes.contentBox} >
                    <Grid md={2} sm={5} xs={12}  item className={classes.contentItem}>
                        <FormatQuoteIcon className={classes.contentIcon} color="primary"/>
                        <Typography variant="h6" > Im here today coz gusto ko mabago ang tingin ng mga dating networker na sawang 2x nasa traditional networking... na malaman din nila na meruon na tayung pang forever!!! walang hype or false promise.</Typography>
                        <br/>
                        <Typography  variant="h5" color="primary" style={{fontStyle: 'italic'}}>
                            Janell Enad
                        </Typography>
                    </Grid>

                    <Grid md={2}  sm={5} xs={12}   item className={classes.contentItem}> 
                        <FormatQuoteIcon className={classes.contentIcon} color="primary"/>
                        <Typography variant="h6" > ... dahilan  na nandto ako ay dahil gusto kong mapalaki ang grupo ko, maalagaan sila ng maayos thru PCM (Journey).</Typography>
                        <br/>
                        <Typography  variant="h5" color="primary" style={{fontStyle: 'italic'}}>
                            Geraldine Campos
                        </Typography>
                    </Grid>

                    <Grid md={2}  sm={5} xs={12}   item className={classes.contentItem} >
                        <FormatQuoteIcon className={classes.contentIcon} color="primary"/>
                        <Typography variant="h6" >Just to learn,and to be more equip on how will I do PHB worx more effectively.</Typography>
                        <br/>
                        <Typography  variant="h5" color="primary" style={{fontStyle: 'italic'}}>
                            Cesar Buscas
                        </Typography>
                    </Grid>

                    <Grid md={2}  sm={5} xs={12}  item className={classes.contentItem}>
                        <FormatQuoteIcon className={classes.contentIcon} color="primary"/>
                        <Typography variant="h6" > Willing and wanted to be one of PCM and and learn how to create Values Everyday to Make Things GREAT!</Typography>
                        <br/>
                        <Typography  variant="h5" color="primary" style={{fontStyle: 'italic'}}>
                            Rosendo Santos
                        </Typography>
                    </Grid>


                </Grid>
                <div className={classes.buttonBox} >
                    <Link to='/blog'>
                        <Button variant="contained" color="secondary" className={classes.appButton} >
                             <Typography color="primary" variant="body1">See More</Typography>
                        </Button>
                    </Link>
                </div>
            </div>
           
            
        </div>
        
    );
}