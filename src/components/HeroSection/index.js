import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, ArrowForward, ArrowRight, HeroBtnWrapper, } from './HeroElements';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElement'

const HeroSection  = ({toggle}) => {
const [hover, setHover] = useState();
const onHover = () => {
    setHover(!hover)
}
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/pm4' />
            </HeroBg>
            <HeroContent>
                <HeroH1> Mongolmaa Gurbazar </HeroH1>
                <HeroP>
                   I'm a full stack web developer     
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='projects' onClick={toggle} onMouseEnter={onHover} primary='true'
                    dark='true'>
                        Projects {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
