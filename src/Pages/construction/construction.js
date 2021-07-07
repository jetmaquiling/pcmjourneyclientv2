import React,{useState, useContext} from 'react';

import WarningIcon from '@material-ui/icons/Warning';
import {Link} from 'react-router-dom';

export default function Construction () {

    return (
        <div style={{width : '100%', height: '100vh', display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <WarningIcon style={{fontSize:'90px'}}/>
            <h1>Sorry This Feature is Under Construction</h1>
            <Link to='/' ><h2>- Go Back -</h2></Link>

        </div>
    );
}