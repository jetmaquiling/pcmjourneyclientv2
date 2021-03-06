import * as React from 'react';
import axios from 'axios';
import config from '../Config/config.json'
import { useHistory } from "react-router-dom";
import { LaptopWindows } from '@material-ui/icons';
import moment from 'moment';





////////////////////////////////////////////////////////

export const AuthContext = React.createContext({
    logIn: (email,password)=> {},
    logOut: () => {},
    signUp: (form)=> {},
    success: {},
    setSuccess: ()=> {},
    checked: null,
    setChecked: ()=> {},
    load: null,
    setLoad: ()=> {},
    terms: null,
    setTerms: ()=> {},
    toaster: {},
    setToaster:  ()=> {},
    modal: {},
    setModal:  ()=> {},
    handleToaster: (message, status) => {},
    handleClose: (event, reason) => {},
    loggedIn: null,
    getCookie: (cname) => {},
    setCookie: (cname,value,time) => {},
    user: {},
    setUser: () => {},
    getEvents: () => {},
    events: {},
    PCMday: "",
    live: null,
});


////////////////////////////////////////////////////////

function AuthContextProvider(props) {
    //MAIN COOKIE STORE
    const [user, setUser] = React.useState({id: null});
    const [PCMday ,setPCMDay] = React.useState("");
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [terms, setTerms] = React.useState(false);
    const [load, setLoad] = React.useState(false);
    const [toaster, setToaster] = React.useState({open:false, message: '', status: ''});
    const [success, setSuccess] = React.useState({status:false,email: '', password: '',});
    const [checked, setChecked] = React.useState(false);
    const [modal, setModal] = React.useState({open: false, title: '', message: '', function: ()=> {}});
    const [events, setEvents] = React.useState({});
    const [videos, setVideos] =  React.useState([]);
    const [live, setLive] = React.useState(false);
    //LOG IN PERSIST


    React.useEffect(() => {

      async function persist(jwt) { 
        //console.log("Persisting Log")
          try{
            const {data} = await axios.get(`${config.SERVER_URL}/users/${getCookie('id')}`, {
              headers: { Authorization: `Bearer ${jwt}` }
              });
            setCookie('isLoggedIn','true',30);    
            setUser(data)
            try{
              setUser({...data, ProfilePicture : data.ProfilePicture.url})
            }catch(error){
              // console.log('No Profile Picture')
            }
            
            getPCMDay(data.startJourney)
            setLoggedIn(true);
            setLive(true);
          }catch(error){
            console.log('Context ERROR')
            console.log(error)
            // setCookie('isLoggedIn','false',0);
            // setCookie('token','',0);  
            // window.location.replace("/")
            // setLoggedIn(true);
          }
         
      }
      

      if(getCookie('isLoggedIn') === "true" ){
        //console.log(getCookie('token'));
        persist(getCookie('token'));
        
       
        
      }
      getEvents();
      
    },[]);
   

    
    //TOASTER FUNCTION
    const handleToaster = (message, status = "error") => {
      setToaster({open: true, message: message ,status:status});
    };

    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return setToaster({open:false, message: '', status: ''});
      }
  
      setToaster({open:false, message: '', status: ''});
    };
  
    // Confirmation MODAL********************************************************
    

    // Get PCM DAY ALGO ***************************************************
      function getPCMDay(start) {
        const date = moment(start);
        const now = moment();
        const num = now.diff(date,"days");
        setPCMDay(num)
        // console.log(num)
        
        // if(num > 90 || num < 0){
        //   setPCMDay(0)
        // }else{
        //   setPCMDay(num)
        // }
    }


    // Events Get Function **************************************************
    async function getEvents() {
          axios.get(`${config.SERVER_URL}/events`).then(res => {
            setEvents(res.data)
            console.log('success LogIn', res.data);
            setLive(true);
          }).catch(error=> {
            console.log(error)
          })
      }

    //COOKIES FUNCTION ***********************************************

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

     // ***********************************************




  //LOG IN SYSTEM ***********************************************************************************

    const logIn = (email,password) => async () => { 
        setLoad(true)
        try{
            const {data} = await axios.post(`${config.SERVER_URL}/auth/local`, {
                identifier: email,
                password: password,
            });


            const json = await data;
            setCookie('token',json.jwt,30);
            setCookie('id',json.user.id,30);
            setCookie('isLoggedIn','true',30);
            // console.log('success LogIn', json);
            setUser(json.user)
            setLoggedIn(true)
            window.location.replace("/dashboard")
            
            // console.log('success LogIn', json.user);
            

        }catch(error){
            setLoad(false)
            handleToaster("Your Credentials Are Incorrect!" ,'error')
            // console.log(error.message)
        }
    
    }


    //LOG OUT SYSTEM~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

      const logOut = () => { 
        //console.log("Requsting SignOut")
        setCookie('token','',0);
        setCookie('id','',0);
        setCookie('isLoggedIn','false',0);
        window.location.replace("/")
    
    }
     


    //SIGN UP SYSTEM ***********************************************************************************

    const signUp = async (form)  =>  { 
      //console.log(`${config.SERVER_URL}/auth/local/register`)

      // let jwt = ""


      if(form.FirstName.length <= 2 || form.LastName.length <= 2){
          return handleToaster("Your Name is Invalid","warning");
      }
      if(form.Contact.length <= 9){
          return handleToaster("Your Contact Number is Invalid","warning");
      }
      if(!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(form.Email))){
          return handleToaster("Your Email is Invalid","warning");
      }
      if(form.Username.length <= 5 || form.Ranking.length <= 2){
          return handleToaster("Your PHB Account is Invalid","warning");
      }
      if (form.Password.length <= 4  || form.Password !== form.PasswordConfirm){
          return handleToaster("Your Password in not the same","warning");
      }
      if(form.Purpose.length <= 5){
        return handleToaster("Tell us WHY you're joining?","warning");
      }
      if(form.PCMupline.length <= 2 || form.Sponsor.length <= 2){
        return handleToaster("Please Tell Us Your Sponsor and Upline","warning");
    }
      if (!checked){
          return handleToaster("Please Agree to the Terms And Agreements","error");
      }
     
      setLoad(true)
      axios.post(`${config.SERVER_URL}/auth/local/register`, {
          firstName: form.FirstName,
          lastName: form.LastName,
          birthDate: form.BirthDate,
          contact: form.Contact,
          email: form.Email,
          spouse: form.Spouse,
          address: `${form.address}, ${form.city}, ${form.zip}, ${form.country}`,
          username: form.Username,
          Why: form.Purpose,
          startJourney: form.Start,
          endJourney: form.End,
          password: form.Password,

      }).then(response => {
          //REGISTRATION SUCCESS RESPONSE
          // jwt = response.data.jwt
          

          axios
              .post(`${config.SERVER_URL}/userconfirmations`, {
              firstReferencePurchase : form.proof,
              referencePurchaseDate: form.dateproof,
              presentRanking: form.Ranking,
              PCMUpline: form.PCMupline,
              Sponsor: form.Sponsor,
              ranking: form.Ranking,
              username: form.Username,
              active3Uplines: `${form.upline1}, ${form.upline2}, ${form.upline3}`,
              experiencedNetBuilder: (form.Trained === 'true' ? true : false ),
              networkBuilderEvents: form.Programs ,
              users_permissions_user: response.data.user
          }, {
              headers: { Authorization: `Bearer ${response.data.jwt}` }

          }).then(res => {
              //AUTHENTICATION SUCCESS RESPONSE
              
              //UPLOADING IMAGE IN SERVER
              if(form.PCMSignature){
                const formData1 = new FormData()
                formData1.append('files', form.PCMSignature);
                formData1.append('ref','Userconfirmation')
                formData1.append('refId', res.data.id);
                formData1.append('field', 'PCMSignature');
                //console.log(formData1,form.PCMSignature.name);
                axios.post(`${config.SERVER_URL}/upload/`, formData1, {
                    headers: { Authorization: `Bearer ${response.data.jwt}` }
                })
              }
              if(form.PersonalSignature){
                //UPLOADING IMAGE IN SERVER
                const formData2 = new FormData()
                formData2.append('files', form.PersonalSignature);
                formData2.append('ref','Userconfirmation')
                formData2.append('refId', res.data.id);
                formData2.append('field', 'PersonalSignature');
                //console.log(formData2,form.PersonalSignature.name)
                axios.post(`${config.SERVER_URL}/upload/`,formData2, {
                    headers: { Authorization: `Bearer ${response.data.jwt}` }
                })
              }
                const formData3 = new FormData()
                formData3.append('files', form.ProfilePicture);
                formData3.append('ref', 'user');
                formData3.append('source', 'users-permissions');
                formData3.append('refId', response.data.user.id);
                formData3.append('field', 'ProfilePicture');
                //console.log(formData3,form.ProfilePicture.name)
                axios.post(`${config.SERVER_URL}/upload/`,formData3, {
                    headers: { Authorization: `Bearer ${response.data.jwt}` }
                }).then(res => {
                    setSuccess({status: true,email: form.Email,password: form.Password});
                  
                })
             

            //UPLOADING Profile IMAGE IN SERVER
              
              

              

          }).catch(error => {
          // Handle error.
          setSuccess({status: true,email: form.Email,password: form.Password});
          
          });

          // Handle success.
          // console.log('Well done!',response);
          // console.log('User profile', response.data.user);
          // console.log('User token', response.data.jwt);
          
      })
      .catch(error => {
          //REGISTRATION FAILURE RESPONSE
          console.log(error);
          setLoad(false);
          setModal({open: true, title: 'Sorry, that account is already taken, You may send your concern to us by clicking proceed.', function: ()=>{window.location.replace("/contact")}})
          
      });

  }

  








  return <AuthContext.Provider 
    value={{
        user: user,
        loggedIn: loggedIn,
        logIn: logIn,
        logOut: logOut,
        signUp: signUp,
        success: success,
        setSuccess: setSuccess,
        checked: checked,
        setChecked: setChecked,
        load: load,
        terms: terms,
        setTerms: setTerms,
        setLoad: setLoad,
        toaster: toaster,
        setToaster: setToaster,
        handleToaster: handleToaster,
        handleClose: handleClose,
        modal: modal,
        setModal:  setModal,
        getCookie: getCookie,
        setCookie: setCookie,
        getEvents: getEvents,
        events: events,
        setUser: setUser,
        videos: videos,
        PCMday: PCMday,
        live: live,
    }}
    
  >
      {props.children}
  </AuthContext.Provider>

}

export default AuthContextProvider;