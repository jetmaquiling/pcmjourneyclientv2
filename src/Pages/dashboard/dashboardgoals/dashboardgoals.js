import React from 'react';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    
    paperBox:{
        margin: '70px 25px 0px 25px',
        [theme.breakpoints.down('sm')]: {
            margin: '40px 10px 0px 10px',
        },
    },
    paper:{
        height: 'auto',
        width: 'auto',
        borderRadius: '25px'
    },
    mainBox:{
        padding: '30px 30px 30px 30px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 10px 10px 10px',
        },
    },
    
    h2:{
        fontSize: 45,
    },
    h4:{
        fontSize: '30px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
          },
    },
    h5:{
        fontWeight: 100,
        fontStyle:'italic'
    },
    h5Box:{
        width: '90%'
    },
    h6:{
        fontWeight: 100,
        fontStyle:'italic'
    },
    h6Box:{
        padding: '5px 0px 20px 0px',
    },
    help:{
        fontSize: '30px',
    },
    paperGoalBox:{
        padding: '5px 0px 10px 0px',
    },
    paperGoal:{
        borderRadius: '25px',
        background: '#F3F3F3',
        width: '100%'
    },
    h5h6Box:{
        justifyContent:'center',
        alignContent: 'center',
        padding: '0px 15px 15px 15px',
    },

}));

export default function DashboardGoals() {
  const classes = useStyles();

  return (
          <Grid item className={classes.paperBox} >
                <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div style={{alignSelf: 'center'}}>
                            <Typography variant="h4" className={classes.h4}>
                                            My Goals 
                            </Typography>
                        </div>
                        <div>
                            <IconButton className={classes.helpButton}>
                                    <HelpIcon className={classes.help}/>
                            </IconButton>
                            <Button variant="contained" color="primary" className={classes.appButton}>
                                Add Goals <AddIcon/>
                            </Button>
                        </div>
                        
                        
                    
                </div>
              
                <Paper  elevation={3} className={classes.paper}>
                    <Grid container className={classes.mainBox}>
                            {/* <Typography variant="h5" className={classes.h5}>
                                        No Goals
                            </Typography> */}
                        <Grid item container lg={12} className={classes.paperGoalBox} >
                            <Paper  elevation={3} className={classes.paperGoal}>

                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                        <div>
                                            <IconButton >
                                                <CheckCircleOutlineIcon color='primary' style={{fontSize:'40px'}}/>
                                            </IconButton>
                                        </div>
                                        <div>
                                            <IconButton >
                                                <HelpIcon style={{fontSize:'25px'}}/>
                                            </IconButton>
                                            <IconButton >
                                                <CloseIcon color='primary' style={{fontSize:'30px'}}/>
                                            </IconButton>
                                        </div>
                                </div>

                                <Grid container className={classes.h5h6Box} >
                                    <Grid item lg={11} className={classes.h5Box}>
                                        <Typography variant="h5" className={classes.h5}>
                                                    My Goals #1
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={11} className={classes.h6Box}>
                                        <Typography variant="h6" className={classes.h6}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>


                       
                        

                    


                    </Grid>
                
                </Paper>
          </Grid>  
  );
}