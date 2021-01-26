import React from 'react'
import {FooterContainer,  FooterLinksContainer, FooterLinkItems, FooterLinkWrapper,  SocialIconLink} from './FooterElements';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
        
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            </FooterLinkItems>
                             <SocialIconLink href='//www.linkedin.com/in/mongolmaa-gurbazar-51b770147/' target='_blank' area-label='Linkedin'>
                             <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href='//www.github.com/Mongolma/' target='_blank' area-label='Github'>
                              <FaGithub />
                            </SocialIconLink>
                    </FooterLinkWrapper>
                </FooterLinksContainer>
           
        </FooterContainer>
    )
}

export default Footer
