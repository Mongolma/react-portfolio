import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, SubTitle, ImgWrap, Img} from './InfoElements';

const Info = ({lightBg, id, imageStart, topLine, lightText, headline, darkText, img, alt, description}) => {
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
                         <a className='resume' href='../assets/resume.pdf' style={{ padding:'8px',textDecoration: 'none', color: 'white'}} >Resume</a>
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
