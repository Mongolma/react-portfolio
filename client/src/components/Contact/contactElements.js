import styled from 'styled-components';
import React from 'react';

export const ContactContainer = styled.div`
color: #fff;
margin-top: 36px;
background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

@media screen and (max-width: 768px) {
    padding: 100px 0;
    margin-top: 500px;
}
`;

export const ContactWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;

@media screen and (max-width: 768px) {
    padding: 100px 0;
    padding-right: 36px;
    height: 360px;
}
`;

export const ContactH1 = styled.h1`
text-align: center;
justify-content: center;
color: #fff;
display: flex;
margin-top: 36px;
padding-top: 36px;
padding-bottom: 12px; 
margin-bottom: 12px; 

@media screen and (max-width: 768px) {
    margin-top: -180px;
    padding-top: -212px;
    }
`;

const Label = styled.p`
font-size: 14px;
color: #fff;
`; 

const Input = styled.input`
width: 200px;
`;

const InputDiv = styled.div`
width: 100%;
`;

export const ContactInput = (props) => {
return (<InputDiv>
    <Label>{props.desc}</Label>
    
    <Input name={props.name}></Input>

</InputDiv>)
};
export const ContactInputMessage = (props) => {
return (<InputDiv>
    <Label>{props.desc}</Label>
    
    <InputMessage name={props.name}></InputMessage>

</InputDiv>)
};

export const Column = styled.div`
width: 50%;
`;
export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;

@media screen and (max-width: 768px) {
    display: none;
}
`
export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
margin-left: 90px;
margin-top: 0px;

@media screen and (max-width: 768px) {
justify-content: center;
margin-left: 24px;
    }
`
export const ImgWrap = styled.div`
max-width: 555px;
height: 100%;
`;

export const Img = styled.img`
width: 100%;
margin: 0 0 10px 0;
padding-right: 0;
`
export const ContactRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({ imageStart }) => (imageStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
grid-template-areas: ${({ imageStart }) => (imageStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
}
`;

export const InputMessage = styled.input`
width: 400px;
height: 180px;
@media screen and (max-width: 768px) {
  width: 200px;
    }
`;