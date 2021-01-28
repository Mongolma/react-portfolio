import React from 'react'
import { ContactContainer, ContactWrapper,ContactInputMessage, ContactH1, ContactInput,  Column1, Column2, ImgWrap, Img, ContactRow} from './contactElements';
import contact from '../../images/contact.svg';

const Contact = ({lightBg, id, imageStart}) => {
    return (
        <>
          <ContactContainer lightBg={lightBg} id={id}>
              <ContactWrapper>
              <ContactH1>Contact</ContactH1>
              <ContactRow imageStart={imageStart}>
               <Column2>
                  <ContactInput name={'lName'} desc={'Full name'}></ContactInput>
                  <ContactInput name={'email'} desc={'Email'}></ContactInput>
                  <ContactInputMessage name={'message'} desc={'Message'}></ContactInputMessage>
                </Column2>
                <Column1>
                  <ImgWrap>
                    <Img src={contact} />
                  </ImgWrap>
                </Column1>
              </ContactRow>
              </ContactWrapper>
              </ContactContainer>  
        </>
    )
}

export default Contact
