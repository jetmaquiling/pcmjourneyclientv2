import React,{useContext, useEffect} from 'react'
import useStyles from './style';
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
import {ForEmailUsername, ForPassword} from '../../Components/helpsound/loginhelp';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {AuthContext} from '../../Provider/context';



export default function Login () {
    const classes = useStyles();
    const [available, setAvailable] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [form, setForm] = React.useState({email: '', password: ''});
    const ctx = useContext(AuthContext);

    const handleClickShowPassword = () => {
        //console.log(ctx.token);
        setShowPassword(!showPassword);
        
      };
    
    

    
    if(ctx.getCookie('isLoggedIn')){
        window.location.replace("/dashboard")
    }else{
        return (
            <div className={classes.root}>

                

                <div className={classes.backBox} >
                    <Link to='/'>
                        <ArrowBackIcon className={classes.back} />
                    </Link>
                </div>

                <div className={classes.h2Box} >
                    <Typography variant="h2" className={classes.h2}>Log in</Typography>
                </div>

                <div className={classes.formBox} >

                    <div className={classes.formItem}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                            <InputLabel htmlFor="filled-adornment-password" >Username or Email</InputLabel>
                                <OutlinedInput
                                    onChange={(e)=>setForm({...form, email: e.target.value})}
                                    value={form.email}
                                    id="filled-adornment-email"
                                    type='email'
                                    fullWidth
                                    endAdornment={
                                    <InputAdornment position="end">
                                        
                                        <ForEmailUsername 
                                        available={available} setAvailable={setAvailable} data={"email"}/>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>
                    </div>   

                    <div className={classes.formItem}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="filled" fullWidth>
                            <InputLabel htmlFor="filled-adornment-password" >Password </InputLabel>
                                <OutlinedInput
                                    onChange={(e)=>setForm({...form, password: e.target.value})}
                                    value={form.password}
                                    id="filled-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    fullWidth
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                        <ForEmailUsername 
                                        available={available} setAvailable={setAvailable} data={"password"}/>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>
                    </div>

                    <div className={classes.formItemButton}>
                        
                                <Button variant="contained" fullWidth color="primary" className={classes.appButton} 
                                onClick={ctx.logIn(form.email,form.password)} >
                                        <Typography variant="h5" >Continue</Typography>
                                        <ArrowForwardIcon style={{fontSize: '30px'}}/>
                                </Button>
                    
                        <div style={{display:'flex', justifyContent:'space-between',marginTop: '10px'}}>
                            <div>
                                <Link to='/dashboard'>
                                    <Typography variant="subtitle2" >forgot password? </Typography>
                                </Link>
                            </div>
                            <div>
                                <Link to='/dashboard'>
                                    <Typography variant="subtitle2" >Don't have an account yet? </Typography>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                    
                        
                
                </div>



            </div>
        );
    }
}