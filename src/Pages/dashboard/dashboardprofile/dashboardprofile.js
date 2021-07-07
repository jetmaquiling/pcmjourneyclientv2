import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ProfilePic from './wallaper.png';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles((theme) => ({
    paperBox:{
        padding: '80px 30px 0px 30px',
        [theme.breakpoints.down('sm')]: {
            margin: '80px 10px 0px 10px',
        },
    },
    paper:{
        height: 'auto',
        width: 'auto',
        borderRadius: '25px'
    },
    mainBox:{
        padding: '50px 30px 50px 30px',
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
            padding: '50px 20px 50px 20px',
          },
    },
    picture:{
        margin: 'auto',
        width:'120px',
        height:'120px',
    },
    h2:{
        fontSize: 45,
        [theme.breakpoints.down('sm')]: {
            fontSize: 20,
          },
    },
    h4:{
        fontSize: '30px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
          },
    },
    h6:{
        fontWeight: 100,
        fontStyle:'italic'
    },
    h4h6Box:{
        [theme.breakpoints.down('md')]: {
            margin: '20px 0px 0px 0px',
            textAlign: 'center'
          },
    },
    helpButton:{
        position: 'absolute',
        right: '35px',
        top: '135px',
        [theme.breakpoints.down('sm')]: {
            right: '20px',
            top: '115px',
        },
    },
    help:{
        fontSize: '30px',
        
    }

}));

export default function DashboardProfile() {
  const classes = useStyles();

  return (
          <Grid item className={classes.paperBox}>
              <Typography variant="h2" className={classes.h2}>
                            PCM Journey Dashboard
                </Typography>
            <Paper  elevation={3} className={classes.paper}>
                <Grid container className={classes.mainBox}>
                        <IconButton className={classes.helpButton}>
                            <HelpIcon className={classes.help}/>
                        </IconButton>
                   
                    <Grid item lg={2}>
                        <Avatar src={ProfilePic} className={classes.picture}/>
                    </Grid>

                    <Grid item  lg={9} className={classes.h4h6Box}>
                        <Typography variant="h4" className={classes.h4}>
                            Bakit sumali si John Doe?
                        </Typography>
                        <br/>
                        <Typography variant="h6" className={classes.h6}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
          </Grid>  
  );
}