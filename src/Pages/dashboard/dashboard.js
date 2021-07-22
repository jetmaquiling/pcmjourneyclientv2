import { Grid } from '@material-ui/core';
import React, {useContext, useEffect} from 'react'
import {AuthContext} from '../../Provider/context'
import PCMJourneyNav from './pcmjourneynavpage/pcmjourneynavpage';
import Typography from '@material-ui/core/Typography';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function Dashboard () {
    const ctx = useContext(AuthContext);
    const myRef = React.useRef(null)

    React.useEffect(() => {
        scrollToRef(myRef)
    }, [])

    if(!ctx.getCookie('isLoggedIn')){
        window.location.replace("/login")
    }else{
        return (
            <div  ref={myRef} >
                <div  item md={12} style={{padding: '50px 0px 0px 0px' , width: '100%' ,  display:'flex' , justifyContent: 'center', textAlign: 'center'}}>

                    <Typography variant='h3' color='primary'  ><b>DASHBOARD </b></Typography>
                </div>

                
                
                 <PCMJourneyNav/>

            </div>
        );
    }
}