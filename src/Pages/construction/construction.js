import React,{useState, useContext} from 'react';

import WarningIcon from '@material-ui/icons/Warning';
import {Link} from 'react-router-dom';

export default function Construction () {

    return (
        <div style={{width : '100%', height: '100vh', display: 'flex',textAlign: 'center' ,flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <WarningIcon style={{fontSize:'90px'}}/>
            <h1>Sorry! <br/> This Feature is Under Construction</h1>

        </div>
    );
}