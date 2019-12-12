import React from 'react';
import styled from 'styled-components'
import Image2 from './img/avatar2.png'
import Image3 from './img/password.png'
import ImageAvatar from './img/avatar1.png'
import { createGlobalStyle } from 'styled-components';


export default function App() {
  return (
    <div>
      <Containner>
      <ImgAvatar src={ImageAvatar} height='250' width='250' alt="imagem de avatar"/>
        <Form >
          <Div>
          <Divimg>
            <img src={Image2} height='31,605' width='24,965' alt="imagem de avatar"/>
          </Divimg>  
          <InputForm type="email" placeholder="Username" height='19,786' width='117,65425' id="name" />
          </Div>
          <Div>
            <Divimg>
            <img src={Image3} height='37,713' width='31,073' alt="imagem de password"/>
            </Divimg>   
            <InputForm type="password" placeholder="Password" height='19,786' width='117,65425' id="name" />
          </Div>
          <ButtonLogin type="submit"   >Login</ButtonLogin>
        </Form>
      </Containner>
    </div>
  );
}



createGlobalStyle `
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap')`;


const Containner=styled.section`
    
    display:flex;
    flex-direction:column;  
    align-items:center;
    justify-content:center;
   
    
    background-color:#5211e7;
    
    width:100vw;
    height:100vh;
`;

const Form =styled.form`
display:flex;
flex-direction:column;
align-items:center;
padding:3.125rem;
background:#F2F2F2;


`;

const Div =styled.div`
  display:flex;
  padding-top:2.5rem;
`;
const Divimg =styled.div`
display:flex;
align-items:center;
justify-content:center;
min-width:5rem;
padding:0.3125rem;
background: #cecece;
`;
const InputForm = styled.input`
background-color:#E0E0E0;
color:#828282;
padding-left:0.625rem;
font-family: 'Lato', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 2.25rem;
line-height: 2.625rem;

min-height: 4.9469rem;
min-width: 29.2481rem;
border:0rem;
`;

const ImgAvatar = styled.img`
padding-bottom: 1.25rem;
`;

const ButtonLogin = styled.div`

  display:flex;
  align-items:center;
  justify-content:center;
  font-size:30px;
  margin-top:2.1875rem;
  width: 33.2256rem;
  height: 4.46rem;
  background-color: #7642ed;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  
`;





