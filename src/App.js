import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory 
} from "react-router-dom";
import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import theme from './Theme/theme';

import Dashboard from './Pages/dashboard/dashboard';
import LandingPage from './Pages/landingpage/landingpage';
import SignUp from './Pages/signup/signup';
import LogIn from './Pages/login/login';
import WatchVideo from "./Pages/dashboard/watch/watchvideo/watchvideo";

import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Contact from './Pages/contact/contact';
import ProspectList from "./Pages/dashboard/prospectlist/prospectlist";
import ClassLink from "./Pages/pcmjourney/pcmjourney";
import Watch from './Pages/dashboard/watch/watch';
import {AuthContext} from './Provider/context'
import Construction from "./Pages/construction/construction";


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function App() {
  const ctx = React.useContext(AuthContext);
  React.useEffect(() => {
    
  }, [ctx.live])

 
  if(ctx.live){
    return (
  
      <ThemeProvider theme={theme}>
        <Dialog
        open={ctx.modal.open}
        onClose={()=> {ctx.setModal({open: false})}} 
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{ctx.modal.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {ctx.modal.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=> {ctx.setModal({open: false})}} color="primary">
              Cancel
            </Button>
            <Button onClick={()=> { ctx.modal.function(); ctx.setModal({open: false})  }} color="primary" autoFocus>
              Proceed
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar open={ctx.toaster.open} autoHideDuration={7000} onClose={ctx.handleClose}>
                <Alert onClose={ctx.handleClose} severity={ctx.toaster.status}>
                    {ctx.toaster.message}
                </Alert>
        </Snackbar>

        <Backdrop style={{zIndex: 9998}} open={ctx.load} >
                <CircularProgress color="inherit" />
        </Backdrop>

        <Router>
            <Header/>
              <Switch>
                <Route path="/" exact>
                  <LandingPage />
                </Route>

                <Route path="/construction">
                  <Construction />
                </Route>

                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/login">
                  <LogIn />
                </Route >
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/dashboard" exact>
                <Dashboard />
                </Route>
                <Route path="/pcmjourney" >
                  <ClassLink/>
                </Route>
                 <Route path="/dashboard/prospectlist">
                    <ProspectList/>
                 </Route>

                <Route path="/dashboard/pcmjourney">
                    <ClassLink/>
                </Route>
                
                <Route  path={`/dashboard/watch`} exact>
                    <Watch/>
                </Route>
               
                
                <Route>
                  <LandingPage />
                </Route>
              </Switch>
            <Footer/>
        </Router>   
      </ThemeProvider>
    
  )
  }else{
    return (
      <div style={{width : '100%', height: '100vh', display: 'flex',textAlign: 'center' ,flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <h1>"He that can have patience can have what he will."</h1>
      <CircularProgress style={{color: '#EC113E' , fontSize: '30px'}} />

    </div>
      
    )
  }
  
}

export default App;
