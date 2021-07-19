import React, {useEffect,useState} from 'react'
import useSound from 'use-sound';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';



export function ForEmailUsername ({available,setAvailable,data}) {
    // const [play, { stop, isPlaying }] = useSound(
    //     (data === "email" ? email : password));
    // const [isClicked, setIsClicked] = useState(false);

    // useEffect(() => {
    //     if (available && isClicked){
    //         play();
    //     }else{
    //         stop();
    //         setIsClicked(false);
    //     }
    // }, [available])

    return (
        
        <IconButton edge="end" 
        //     onClick={() => {
        //         setIsClicked(!isClicked);
        //         setAvailable(!available);
        //     }
        // }
        >
            <HelpIcon style={{fontSize:'25px'}}/>
        </IconButton>
    );
}


export function ForPassword ({available,setAvailable}) {
    // const [play, { stop }] = useSound(
    //     password,
    //     {interrupt: false}
    //   );
    // const [isClicked, setIsClicked] = React.useState(false);

    // React.useEffect(() => {
    //     if (available && isClicked){
    //         play();
    //     }else{
    //         stop();
    //         setIsClicked(false);
    //     }
    // }, [available])

    return (
        <IconButton edge="end"
        //     onClick={() => {
                
        //         setIsClicked(!isClicked);
        //         setAvailable(!available);
               
        //     }
        // }
        >
            <HelpIcon style={{fontSize:'25px'}}/>
        </IconButton>
    )
}