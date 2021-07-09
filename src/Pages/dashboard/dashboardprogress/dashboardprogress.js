import React from 'react';
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';

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
        padding: '50px 30px 50px 30px',
    },

    goalBox:{
        margin: '0px 0px 20px 0px',
    },
    picture:{
        margin: 'auto',
        width:'120px',
        height:'120px',
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
    h3:{
        fontWeight: 100,
        fontSize: '25px',
        textAlign: 'center'
    },
    h3Box:{
        marginBottom: '10px',
    },
    h6:{
        fontWeight: 100,
        fontStyle:'italic'
    },
    help:{
        fontSize: '30px',
    },
    
    circle:{
        width: '59px',
        height: '58px',
        background: 'transparent linear-gradient(292deg, #EC113E 0%, #F2E2E2 100%) 0% 0% no-repeat padding-box',
        borderRadius: '50%',
        margin: 'auto',

    },
    progressBox: {
        marginTop: '30px',
        width: '100%',
    },
    percentageBox:{
        marginTop: '20px',
        justifyContent:'center'
    },
    percentage:{
        fontWeight: 600,
        fontSize: '35px',
    },

}));

export default function DashboardProgress() {
  const classes = useStyles();

  return (
          <Grid item className={classes.paperBox}>
              <div style={{display:'flex', justifyContent:'space-between'}}>
                    <div style={{alignSelf: 'center'}}>
                        <Typography variant="h4" className={classes.h4}>
                                        My Progress
                        </Typography>
                    </div>
                    <div >
                        <IconButton className={classes.helpButton}>
                                <HelpIcon className={classes.help}/>
                        </IconButton>
                    </div>
                    
                    
                   
              </div>
              
            <Paper  elevation={3} className={classes.paper}>
            
                <Grid container className={classes.mainBox}>

                    <Grid item container  sm={4} className={classes.goalBox}  >
                        <Grid item xs={12}  className={classes.h3Box}>
                        <Typography variant="h3" className={classes.h3}>
                                        Finished Goals
                        </Typography>
                        </Grid>
                        <Grid item xs={12} >
                        <div className={classes.circle} >
                            <Typography variant="h4" color="secondary" style={{textAlign: 'center'}} >4</Typography>
                        </div>
                        </Grid>
                    </Grid>

                    <Grid item container  sm={4} className={classes.goalBox}>
                        <Grid item xs={12} className={classes.h3Box}>
                        <Typography variant="h3" className={classes.h3}>
                                        Total Goals
                        </Typography>
                        </Grid>
                        <Grid item xs={12}>
                        <div className={classes.circle} >
                            <Typography variant="h4" color="secondary" style={{textAlign: 'center'}} >4</Typography>
                        </div>
                        </Grid>
                    </Grid>

                    <Grid item container  sm={4} className={classes.goalBox}>
                        <Grid item xs={12} className={classes.h3Box}>
                            <Typography variant="h3" className={classes.h3}>
                                            Goals Left
                            </Typography>
                        </Grid>
                            <Grid item xs={12}>
                            <div className={classes.circle} >
                                <Typography variant="h4" color="secondary" style={{textAlign: 'center'}} >4</Typography>
                            </div>
                            </Grid>
                    </Grid>


                    <Grid item container xs={12}  >
                        <div className={classes.progressBox}>
                            <LinearProgress variant="determinate" value={50} />
                        </div>
                    </Grid>
                    <Grid item container xs={12} className={classes.percentageBox} >
                        <Typography variant="h3" className={classes.percentage} >
                                        50%
                        </Typography>
                    </Grid>
                </Grid>
               
            </Paper>
          </Grid>  
  );
}