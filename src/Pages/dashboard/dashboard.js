import { Grid } from '@material-ui/core';
import React, {useContext, useEffect} from 'react'
import {AuthContext} from '../../Provider/context'
import PCMJourneyNav from './pcmjourneynavpage/pcmjourneynavpage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory 
  } from "react-router-dom";

export default function Dashboard () {
    const ctx = useContext(AuthContext);
    
    if(!ctx.getCookie('isLoggedIn')){
        window.location.replace("/login")
    }else{
        return (
            <div >
                 <PCMJourneyNav/>

            </div>
        );
    }
}