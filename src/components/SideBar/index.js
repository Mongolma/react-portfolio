import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
         <SidebarContainer isOpen={isOpen} onClick={toggle} >
             <Icon onClick={toggle}>
                 <CloseIcon />
             </Icon>
             <SidebarWrapper>
                 <SidebarMenu>
                     <SidebarLink to='about' onClick={toggle}>
                        About
                     </SidebarLink>
                     <SidebarLink to='projects' onClick={toggle}>
                      Projects
                     </SidebarLink>
                     {/* <SidebarLink to='resume' onClick={toggle}>
                        Resume
                     </SidebarLink> */}
                     <a className='resume' id='resume' href='../assets/resume.pdf' style={{ textDecoration: 'none', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            >Resume</a>
                 </SidebarMenu>
             </SidebarWrapper>
             </SidebarContainer>   
        </>
    );
};

export default Sidebar
