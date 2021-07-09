import React,{useState, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import image from '../../Resources/Images/image.jpg';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import clsx from 'clsx';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import {AuthContext} from '../../Provider/context';
import HelpIcon from '@material-ui/icons/Help';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Card from '@material-ui/core/Card';
import ReplayIcon from '@material-ui/icons/Replay';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import config from '../../Config/config.json';

import { useLocation } from 'react-router-dom';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }


const useStyles = makeStyles((theme) => ({
    main:{
        margin: '60px 0px 0px 0px',
        height: '200vh',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            margin: '60px 0px 0px 0px',
          },
    },

    box1:{
        width: '60%',
        backgroundImage: `url(${image})` ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center",
        backgroundSize: 'cover',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        },    

    },

    box2:{
        width: '40%',
        textAlign: 'center',
        margin: '40px 20px 40px 20px',
        [theme.breakpoints.down('sm')]: {
            width: '500px',
        },    
    },
    titleBox:{
        margin: '10px auto 50px auto ',
        width: '100%',
    },
    formItem:{
        margin: '20px auto 20px auto',
    },
    formBox:{
        padding: '0px 40px 0px 40px',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            padding: '0px 0px 0px 00px',
        },    
    },
    formItemButton:{
        margin: '80px auto 20px auto', 
    },

  }));
  

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function Footer () {
    const classes = useStyles();
    const ctx = useContext(AuthContext);
    const [visible, setVisible] = useState(null);
    const [form, setForm] = useState({Email: '', Name: '', Contact: '', Assistance: '', Subject: '', Message: '', Attachment: '', AttachmentPreview: ''});
    const location = useLocation()

    const myRef = React.useRef(null)

    React.useEffect(() => {
        if(location.pathname === '/contact'){
            scrollToRef(myRef)
        }
    }, [])

    const sendForm = async ()  =>  { 
        console.log(`${config.SERVER_URL}/requests`)
  
        if(!form.Name){
            return ctx.handleToaster("Your Name is Invalid","warning");
        }
        if(!form.Contact){
            return ctx.handleToaster("Your Contact Number is Invalid","warning");
        }
        if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.Email))){
            return ctx.handleToaster("Your Email is Invalid","warning");
        }
        if (form.Assistance === ""){
            return ctx.handleToaster("Please select the assistance you need.","warning");
        }
        if(form.Subject === ""){
            return ctx.handleToaster("Sorry. You don't have any subject.");
        }
        
  
        ctx.setLoad(true)
        await axios
            .post(`${config.SERVER_URL}/requests`, {
                name: form.Name,
                contact: form.Contact,
                email: form.Email,
                assistance: form.Assistance,
                subject: form.Subject,
                message: form.Message,
            }).then(res => {
                console.log(`Success image Uploading now!`,res)
                //AUTHENTICATION SUCCESS RESPONSE
                //UPLOADING IMAGE IN SERVER
                const formData = new FormData()
                formData.append('files', form.Attachment);
                formData.append('ref','request')
                formData.append('refId', res.data.id);
                formData.append('field', 'attachment');
                axios.post(`${config.SERVER_URL}/upload`, formData).then(request => {
                    console.log(request.ok)
                    ctx.setSuccess(true);
                }).catch(error => {
                    console.log(error)
                    ctx.setLoad(false);
                })
                
  
            }).catch(error => {
            // Handle error.
            ctx.setLoad(false);
            ctx.handleToaster("Sorry. We are having a Problem With Your Message!","warning");

            });
  
            // Handle success.
            // console.log('Well done!',response);
            // console.log('User profile', response.data.user);
            // console.log('User token', response.data.jwt);
            
        
  
    }






    return (

        <div className={classes.main}  ref={myRef}>
            <Snackbar open={ctx.toaster.open} autoHideDuration={9000} onClose={ctx.handleClose}>
            <Alert onClose={ctx.handleClose} severity={ctx.toaster.status}>
                {ctx.toaster.message}
            </Alert>
            </Snackbar>
            <Dialog
                style={{zIndex: 9999}}
                open={ctx.success}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{}</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    PHBWORX INTERNATIONAL is processing your application.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={()=>window.location.replace("/")} color="primary" autoFocus>
                    Continue
                </Button>
                </DialogActions>
            </Dialog>
            <Backdrop style={{zIndex: 9998}} className={classes.backdrop} open={ctx.load} >
                <CircularProgress color="inherit" />
            </Backdrop>

            
            <div className={classes.box1} />
                
           

            <div className={classes.box2}>

                <div  className={classes.titleBox}>
                    <Typography style={{fontSize: '40px'}} variant='h2'>
                        Contact Us
                    </Typography>
                </div>
                
            <div className={classes.formBox}>

            
                    <div className={classes.formItem}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                            <InputLabel >Complete Name</InputLabel>
                                <OutlinedInput
                                    onBlur={(e)=>setForm({...form, Name: e.target.value})}
                                    inputProps={{
                                        autoComplete: 'none',
                                    }}
                                    fullWidth
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <HelpIcon style={{fontSize:'25px'}} onClick={console.log(form)}/>
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>
                    </div>

                    <div className={classes.formItem}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                            <InputLabel  >Contact Number</InputLabel>
                                <OutlinedInput
                                    onBlur={(e)=>setForm({...form, Contact: e.target.value})}
                                    inputProps={{
                                        autoComplete: 'none',
                                    }}
                                    type="tel"
                                    fullWidth
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <HelpIcon style={{fontSize:'25px'}}/>
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>
                    </div>   


                    <div className={classes.formItem}>
                        <FormControl  className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                            <InputLabel >Email Address</InputLabel>
                                <OutlinedInput
                                    onBlur={(e)=>setForm({...form, Email: e.target.value})}
                                    inputProps={{
                                        autoComplete: 'none',
                                    }}
                                    type='email'
                                    // fullWidth
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <HelpIcon style={{fontSize:'25px'}}/>
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>
                    </div>


                    
                    <div className={classes.formItem}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" style={{width:'86%'}}>
                            <InputLabel  id="demo-simple-select-outlined-label" >Assistance</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={form.Assistance}
                                    label="Assistance"
                                    onChange={(e)=> setForm({...form, Assistance: e.target.value})}
                                    >
                                    <MenuItem value={"PCM Journey Technical"}>PCM Journey Technical</MenuItem>
                                    <MenuItem value={"eBuddy Technical"}>eBuddy Technical</MenuItem>
                                    <MenuItem value={"PHBWORX Phibi"}>PHBWORX Phibi</MenuItem>
                                    <MenuItem value={'Phbworx Technical'}>Phbworx Technical</MenuItem>
                                </Select>
                        </FormControl>
                        <IconButton edge="end">
                            <HelpIcon style={{fontSize:'25px'}}/>
                        </IconButton>
                    </div>

                    <div className={classes.formItem}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                            <InputLabel >Subject</InputLabel>
                                <OutlinedInput
                                    onBlur={(e)=>setForm({...form, Subject: e.target.value})}
                                    type='text'
                                    multiline
                                    inputProps={{
                                        autoComplete: 'none',
                                    }}
                                    fullWidth
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton edge="end">
                                            <HelpIcon style={{fontSize:'25px'}} onClick={console.log(form)}/>
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>
                    </div>

                    <div className={classes.formItem}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                            <InputLabel >Message</InputLabel>
                                <OutlinedInput    
                                    onBlur={(e)=>setForm({...form, Message: e.target.value})}             
                                    multiline
                                    rows={4}
                                    rowsMax={20}                              
                                    fullWidth
                                />
                        </FormControl>
                    </div>

                    <div className={classes.formItem} style={{textAlign:'center'}}>
                        <Card>
                            <Typography variant="h6" style={{textAlign: 'center'}} >Send A Picture
                                <IconButton >
                                    {
                                    form.Attachment ? 
                                    <ReplayIcon style={{fontSize:'25px'}} onClick={()=>{setForm({...form, AttachmentPreview: null, Attachment: null})}}/> : 
                                    <HelpIcon style={{fontSize:'25px'}} />
                                    
                                    }
                            
                                </IconButton>
                                </Typography>

                                {!form.Attachment && 
                                    <input
                                    type="file"
                                    multiple={ false }
                                    onChange={(e) => {
                                        const objectUrl = URL.createObjectURL(e.target.files[0]);
                                        setForm({...form, AttachmentPreview: objectUrl, Attachment: e.target.files[0] });
                                        URL.revokeObjectURL(e.target.files[0])
                                    
                                        }}
                                    />}
                            
                        </Card>
                    </div>
                    <div className={classes.formItem} style={{display: (form.AttachmentPreview? 'block' : 'none')}}>
                        <Card>  
                            <img style={{height: '50%', width: '100%'}} src={form.AttachmentPreview} />
                        </Card>
                    </div>


                    <div className={classes.formItemButton}>
                            <Button variant="contained" fullWidth color="primary" className={classes.appButton} onClick={(e)=>{
                            sendForm()
                            console.log(form);
                            }} >
                                    <Typography variant="h5" >Send</Typography>
                                    <ArrowForwardIcon style={{fontSize: '30px'}}/>
                            </Button>
                    </div>


                </div>
            </div>
            


        </div>
    );
}