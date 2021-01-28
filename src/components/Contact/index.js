import React from 'react'
import { Button } from '../ButtonElement';
import { ContactContainer, ContactWrapper,ContactInputMessage, ContactH1, ContactForm, ContactInput, Column, Column1, Column2, ImgWrap, Img, ContactRow} from './contactElements';
import contact from '../../images/contact.svg';

const Contact = ({lightBg, id, imageStart}) => {
    return (
        <>
          <ContactContainer lightBg={lightBg} id={id}>
              <ContactWrapper>
              <ContactH1>Contact</ContactH1>
              <ContactRow imageStart={imageStart}>
               <Column2>
                 {/* <ContactForm> */}
                   {/* <Column>  */}
                   <ContactInput name={'lName'} desc={'Full name'}></ContactInput>
                   {/* </Column> */}
                 {/* <Column> */}
                 <ContactInput name={'email'} desc={'Email'}></ContactInput>
                 {/* </Column> */}
                 <ContactInputMessage name={'message'} desc={'Message'}></ContactInputMessage>
                 {/* </ContactForm> */}
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
