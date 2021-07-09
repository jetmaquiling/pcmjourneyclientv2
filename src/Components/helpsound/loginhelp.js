import React, {useEffect,useState} from 'react'
import useSound from 'use-sound';
import HelpIcon from '@material-ui/icons/Help';
import IconButton from '@material-ui/core/IconButton';
import email from '../../Resources/sound/yt1s.com - BLOOP SOUND EFFECT.mp3';
import password from '../../Resources/sound/yt1s.com - MV 가호  시작 이태원클라쓰 OST Part2 ITAEWON CLASS OST Part2.mp3'


export function ForEmailUsername ({available,setAvailable,data}) {
    const [play, { stop, isPlaying }] = useSound(
        (data === "email" ? email : password));
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        if (available && isClicked){
            play();
        }else{
            stop();
            setIsClicked(false);
        }
    }, [available])

    return (
        <IconButton edge="end" 
            onClick={() => {
                setIsClicked(!isClicked);
                setAvailable(!available);
            }
        }
        >
            <HelpIcon style={{fontSize:'25px'}}/>
        </IconButton>
    );
}


export function ForPassword ({available,setAvailable}) {
    const [play, { stop }] = useSound(
        password,
        {interrupt: false}
      );
    const [isClicked, setIsClicked] = React.useState(false);

    React.useEffect(() => {
        if (available && isClicked){
            play();
        }else{
            stop();
            setIsClicked(false);
        }
    }, [available])

    return (
        <IconButton edge="end"
            onClick={() => {
                
                setIsClicked(!isClicked)
                setAvailable(!available);
               
            }
        }
        >
            <HelpIcon style={{fontSize:'25px'}}/>
        </IconButton>
    );
}