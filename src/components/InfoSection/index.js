import React from 'react'
import { Button } from '../ButtonElement';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, BtnWrap, ImgWrap, Img} from './InfoElements';

const Info = ({lightBg, id, imageStart, topLine, lightText, headline, darkText, img, alt, description, buttonLabel, primary, dark, dark2}) => {
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imageStart={imageStart}>
                      <Column1>
                        <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                          <Heading lightText={lightText}>{headline}</Heading>
                          <SubTitle darkText={darkText}>{description}</SubTitle>
                          <BtnWrap>
                         {/* <Button to='../assets/resume.pdf' smooth={true} duration={500} spy={true} offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button> */}
                         <a class='resume' href='../assets/resume.pdf' style={{ padding:'8px',textDecoration: 'none', color: 'white'}} >Resume</a>
                          </BtnWrap>
                        </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                        <Img src={img} alt={alt}/>
                        </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
              </InfoContainer>  
        </>
    )
}

export default Info
