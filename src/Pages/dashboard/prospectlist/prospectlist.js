import React, {useEffect, useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import {AuthContext} from '../../../Provider/context';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AddIcon from '@material-ui/icons/Add';

import config from '../../../Config/config.json';
import axios from 'axios';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import moment from 'moment';


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '80px 0px',
      width: '100%',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },

    inputBox:{
        width: '50%',
        margin: '0px 10px 30px 10px',
        [theme.breakpoints.down('sm')]: {
            width: '95%',
        },    
    },
    box:{
        width: '100%',
    },
    inputLabel:{
        width: '100%',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentBox:{
        width: '100%',
    },
    formBox:{
        margin: '20px 0px'
    },
    itemBox:{
        padding: '10px 20px',
        [theme.breakpoints.down('sm')]: {
            padding: '10px 10px',
        },    
    },
    detailsButton:{
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-between'
    },
    contentButton:{
        marginTop: '20px',
        textAlign: 'center'
    },
    
 }));


export default function ProspectList() {
    const classes = useStyles();
    const ctx = useContext(AuthContext);
    const [success, setSuccess] = React.useState(true)
    const [form, setForm] = React.useState({name: '', address:"", contact:"", facebookname:''})

    useEffect(() => {
        console.log("GETING NEW PRSOPECT")
        async function persist(jwt) { 
            //console.log("Persisting Log")
              const {data} = await axios.get(`${config.SERVER_URL}/users/${ctx.getCookie('id')}`, {
                headers: { Authorization: `Bearer ${jwt}` }
                });
              const json = await data;
              // setCookie('token',json.jwt,7);
              // console.log('success LogIn', data);
              ctx.setUser(data)
              ctx.setUser({...data, ProfilePicture : data.ProfilePicture.url})
              //console.log(json)
              // console.log('success LogIn', json.user);
      
          }
          persist(ctx.getCookie('token'));
    }, [success])

    async function addProspect () {
        if(form.name.length <= 5 || form.address.length <= 5 || form.contact.length <= 6 || form.facebookname.length <= 5 ){
            return ctx.handleToaster("Please Complete All The Forms","warning");
        }
        axios
        .post(`${config.SERVER_URL}/prospects`, {
        name: form.name,
        address: form.address,
        contact: form.contact,
        facebookname: form.facebookname,
        PCMday: ctx.PCMday,
        createdAt: new Date(),
        users_permissions_user: ctx.user
    }, {
        headers: { Authorization: `Bearer ${ctx.getCookie("token")}` }
    }).then(res=>{
        setForm({name: '', address:"", contact:"", facebookname:''});
        setSuccess(!success)
        ctx.setModal({open:false})
        ctx.handleToaster("Your Prospect Is added on the list","success");
    }).catch(error => {
        console.log(error);
        ctx.handleToaster("Sorry. There Is A Problem.","error");
    })
    }


    async function deleteProspect (id) {
        axios
        .delete(`${config.SERVER_URL}/prospects/${id}`, {
        headers: { Authorization: `Bearer ${ctx.getCookie("token")}` }
    }).then(res=>{
        setSuccess(!success)
        ctx.handleToaster("Your Prospect Is Deleted on the list","success");
    }).catch(error => {
        console.log(error);
        ctx.handleToaster("Sorry. There Is A Problem.","error");
    })
    }



    return (
        <div className={classes.root}>
            <div  className={classes.inputBox}>
            <Accordion color='primary'  >
                <AccordionSummary
                expandIcon={<AddIcon  color="primary" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <div className={classes.inputLabel}>
                    <PersonAddIcon color="primary" style={{ margin: '0px 10px'}}/>
                    <Typography  color="primary" className={classes.heading}>Add Prospect</Typography>
                </div>
                
                </AccordionSummary>
                <AccordionDetails>
                    <div className={classes.contentBox}>

                        <div className={classes.formBox} >
                            <div className={classes.formItem}>
                                <FormControl variant="filled" fullWidth>
                                    <InputLabel htmlFor="filled-adornment-password" >Complete Name</InputLabel>
                                        <OutlinedInput
                                            onChange={(e)=>setForm({...form, name: e.target.value})}
                                            value={form.name}
                                            id="filled-adornment-email"
                                            fullWidth
                                            inputProps={{
                                                autoComplete: 'none',
                                            }}
                                        />
                                </FormControl>
                            </div>   
                        </div> 

                        <div className={classes.formBox} >
                            <div className={classes.formItem}>
                                <FormControl variant="filled" fullWidth>
                                    <InputLabel htmlFor="filled-adornment-password" >Address</InputLabel>
                                        <OutlinedInput
                                            value={form.address}
                                            onChange={(e)=>setForm({...form, address: e.target.value})}
                                            multiline
                                            id="filled-adornment-email"
                                            fullWidth
                                            inputProps={{
                                                autoComplete: 'none',
                                            }}
                                        />
                                </FormControl>
                            </div>   
                        </div> 

                        <div className={classes.formBox} >
                            <div className={classes.formItem}>
                                <FormControl variant="filled" fullWidth>
                                    <InputLabel htmlFor="filled-adornment-password" >Contact</InputLabel>
                                        <OutlinedInput
                                            value={form.contact}
                                            onChange={(e)=>setForm({...form, contact: e.target.value})}
                                            id="filled-adornment-email"
                                            type='tel'
                                            fullWidth
                                            inputProps={{
                                                autoComplete: 'none',
                                            }}
                                        />
                                </FormControl>
                            </div>   
                        </div> 

                        <div className={classes.formBox} >
                            <div className={classes.formItem}>
                                <FormControl variant="filled" fullWidth>
                                    <InputLabel htmlFor="filled-adornment-password" >Facebook Account Name</InputLabel>
                                        <OutlinedInput
                                            value={form.facebookname}
                                            onChange={(e)=>setForm({...form, facebookname: e.target.value})}
                                            id="filled-adornment-email"
                                            fullWidth
                                            inputProps={{
                                                autoComplete: 'none',
                                            }}
                                        />
                                </FormControl>
                            </div>   
                        </div> 

                        <div  className={classes.contentButton}>
                                <Button variant="contained" color="primary" onClick={addProspect} >
                                        ADD Prospect 
                                </Button>
                        </div>


                    </div>
                </AccordionDetails>
            </Accordion>
            </div>
             <Grid container className={classes.box}>
                    {ctx.user.prospects && ctx.user.prospects.map((person, index) => {
                        return(
                            <Grid key={index} item md={6}  xs={12} className={classes.itemBox}>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon  color="primary" />}
                                        aria-label="Expand"
                                        aria-controls="additional-actions1-content"
                                        id="additional-actions1-header"
                                        >
                                        <FormControlLabel
                                            aria-label="Acknowledge"
                                            onClick={(event) => event.stopPropagation()}
                                            onFocus={(event) => event.stopPropagation()}
                                            control={<Checkbox color="primary" checked={false} />}
                                            label={person.name}
                                        />
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div style={{width: '100%'}}>
                                            <Typography color='primary' variant='h6'>
                                                Facebook Account Name: 
                                            </Typography>
                                            <Typography variant='body1'>
                                                {person.facebookname}
                                            </Typography>
                                            <br/>
                                            <Typography color='primary' variant='h6'>
                                                Address: 
                                            </Typography>
                                            
                                            <Typography  variant='body1'>
                                                {person.address}
                                            </Typography>
                                            <br/>
                                            <Typography color='primary' variant='h6'>
                                                Contact: 
                                            </Typography>
                                            <Typography variant='body1'>
                                                {person.contact}
                                            </Typography>
                                            <br/>
                                            <Typography color='primary' variant='h6'>
                                                Created At: 
                                            </Typography>
                                            <Typography variant='body1'>
                                               PCM Journey Day {person.PCMday}
                                            </Typography>
                                            
                        
                                            <div className={classes.detailsButton}>
                                                <Button variant="outlined" color="primary" onClick={()=>{ctx.setModal({open:true, title: "Are You sure You want to permanently delete this user?",message: '', function: () => deleteProspect(person.id) }) } }>
                                                    Delete
                                                </Button>
                                                <Button variant="contained" color="primary" >
                                                    Recruited
                                                </Button>
                                            </div>
                                            
                                        </div>
                                        
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>


                        )
                        

                    })}
            
            </Grid>
            
        </div>
    );

}