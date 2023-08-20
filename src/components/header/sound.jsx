import React, { useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components'

import music from "../../assets/abimusic.mp3"
import { useEffect } from 'react'


const Box = styled.div`
display:flex;
cursor:pointer;
position:fixed;
left:4rem;
top:3rem;
z-index:10;
&>*:nth-child(1){
    animation-delay: 0.2s;
}
&>*:nth-child(2){
    animation-delay: 0.3s;
}
&>*:nth-child(3){
    animation-delay: 0.4s;
}
&>*:nth-child(4){
    animation-delay: 0.5s;
}
&>*:nth-child(5){
    animation-delay: 0.8s;
}
&>*:nth-child(6){
    animation-delay: 1s;
}
&>*:nth-child(7){
    animation-delay: 1.2s;
}
&>*:nth-child(8){
    animation-delay: 1.5s;
}
&>*:nth-child(9){
    animation-delay: 1.8s;
}
`

const play = keyframes`
0%{
    transform:scaleY(0);
}
50%{
    transform:scaleY(1);
}
100%{
    transform:scaleY(0);
}
`
const Line = styled.span`

border: 1px solid ;
animation:${play} 1s ease infinite;
animation-play-state: ${props => props.click ? "running" : "paused"};
height: 4rem;
width: 2px;
margin:0 0.1rem

`

const SoundBar = () => {

    const ref = useRef(null);
    const [click, setClick] = useState(false);


    const handleClick = () => {
        setClick(!click);

        if (!click) {
            ref.current.play();
        } else {
            ref.current.pause();
        }

    }

    return (
        <Box onClick={() => handleClick()}>
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />
            <Line click={click} />


            <audio src={music} ref={ref} loop />

        </Box>
    )
}

export default SoundBar