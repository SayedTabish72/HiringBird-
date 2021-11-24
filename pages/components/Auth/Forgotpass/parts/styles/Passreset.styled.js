import styled from "styled-components";

export const Leftvector = styled.div`

position: absolute;
  width: 449.76px;
  height: 439px;
margin-left:-89px;
padding-left:160px;


transform: rotate(70deg);
  /* left: 1.5%; */
  top: 36.8%;

  /* background: #F9BFC2; */
  /* transform: rotate(-4.06deg); */
@media(max-width: 600px){
    display:none;
}



`;
export const Rightvector = styled.div`

positon: absolute;
width: 251.93px;
height: 245.9px;
margin-left: 1340.35px;
top: 23%;
margin-top: 1%;
transform: rotate(1.54deg);

/* background: #F28F9E; */
/* transform: rotate(-0.01deg); */

@media(max-width: 600px){
    display:none;
}


`;

export const Siginupmain = styled.div`
position: absolute;
  
  display: flex;

  position: absolute;
  left: 50%;
  top: 52%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  
  width: 70%;
  height: 90%;
  
  /* top: 5%; */
  
  background: #FFFFFF;
  border-radius: 20px;
  /* border: 1px solid black;  */




`;
export const Imageblock = styled.img`


width:45%;
height:100%;

border-radius: 20px 0px 0 20px;

background: rgba(255, 217, 223, 0.19);

@media(max-width: 600px){
    display:none;
}
`;

export const Signupblock = styled.div`

width:55%;
/* height:100%; */
/* border: 1px solid black; */
background: #FFFFFF;
border-radius: 0 20px 20px 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
@media(max-width: 600px){
    display:none;
}



`;

export const Signupimage = styled.div`


display: flex;
height: 90%;
align-items: end;
justify-content: center;


`;
export const Toptext = styled.div`

margin: 10px;
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 51px;
color: #EC1F28;
@media(max-width: 600px){
    display:none;
}
`;

export const Studentregister = styled.div`

border: 2px solid #F26A7E;
  border-radius: 10px;
  height: 33%;
  width: 70%;
  margin: 10px;
  display: flex;
  padding-top:10%;
  /* justify-content: center; */
  align-items:center;
  flex-direction: column;
    &:hover .stureg{
        background: #F26A7E;
  color: #FFFFFF;
    }
    @media(max-width: 600px){
        display:none;
    }
`;

export const Recruiterregister = styled.div`

border: 2px solid #F26A7E;
  border-radius: 10px;
  height: 33%;
  width: 70%;
  margin: 10px;
  display: flex;
  padding-top: 10%;
  /* justify-content: center; */
  align-items:center;
  flex-direction: column;
  &:hover .recreg{
    background: #F26A7E;
    color: #FFFFFF;
  }
  @media(max-width: 600px){
    display:none;
}

`;
export const Bottomtext = styled.h2`
    margin: 10px;
    font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */

text-align: justify;

color: #404366;
`;
export const Secondtext = styled.h2`

font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 39px;
/* identical to box height */


color: #404366;

`;

export const Thirdtext = styled.div`
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
/* identical to box height */

text-align: justify;

color: #EC1F28;




`;
export const Siginblock = styled.div`

width:55%;
/* height:100%; */
/* border: 1px solid black; */
background: #FFFFFF;
border-radius: 0 20px 20px 0;
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
padding: 4%;



`;
export const Toptextsignin = styled.div`

font-family: Inter;
font-style: normal;
font-weight: 800;
font-size: 36px;
line-height: 51px;
color: #EC1F28;


`;
export const email = styled.div`
display: flex;
  flex-direction: column  ;
  justify-content: center;
  width: 100%;
  padding:  4% 0% 0 0 ;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;



`;
export const Regemail =styled.div`
display: flex;
flex-direction: column  ;
justify-content: center;
width: 100%;
padding:  8% 0% 0 0 ;
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
`;

 export const Signinbtn = styled.button`
 align-items: flex-start;
 padding: 17px 35px;
 
 position: absolute;
 width: 122px;
 height: 53px;
 left: 740px;
 top: 612px; 
 
 border: 1px solid #F26A7E;
 box-sizing: border-box;
 border-radius: 6px;
 background: #FFFFFF;
 
 :hover{
   background:#F28F9E;
   color:white;
 }
 @media (max-width:600px){
 left:100%;
 top:230vh;
 -webkit-transform:scale(1.6);


}
 `;
export const Lighttext = styled.div`
display:none;
@media (max-width:600px){
  /* Enter your Registered email or phone number to recieve a code */
display:inline;
position: absolute;
width: 245px;
height: 68vh;
left: 26vh;
top: 125vh;
-webkit-transform:scale(2.1);
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

color: #A9ACCB;


}




`;
export const Inputsecu = styled.input`

display:none;
@media (max-width:600px){

  display:inline;
  position: absolute;
  border-top:none;
  border-left:none;
  border-right:none;
  border-bottom-width:9px;
  border-bottom-color:#7AD192;
width: 130px;
height: 87px;
left: 20px;
top: 760px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 114px;
line-height: 17px;
/* identical to box height */
/

}


`;
export const Inputsecu1 = styled.input`
display:none;
@media (max-width:600px){

  display:inline;
  position: absolute;
  border-top:none;
  border-left:none;
  border-right:none;
  border-bottom-width:9px;
  border-bottom-color:#7AD192;
width: 130px;
height: 87px;
left: 185px;
top: 760px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 114px;
line-height: 17px;
/* identical to box height */
/

}



`;
export const Inputsecu2 = styled.input`

display:none;
@media (max-width:600px){

  display:inline;
  position: absolute;
  border-top:none;
  border-left:none;
  border-right:none;
  border-bottom-width:9px;
  border-bottom-color:#7AD192;
width: 130px;
height: 87px;
left: 360px;
top: 760px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 114px;
line-height: 17px;
/* identical to box height */
/

}

`;
export const Inputsecu3 = styled.input`

display:none;
@media (max-width:600px){

  display:inline;
  position: absolute;
  border-top:none;
  border-left:none;
  border-right:none;
  border-bottom-width:9px;
  border-bottom-color:#7AD192;
width: 130px;
height: 87px;
left: 83vh;
top: 760px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 114px;
line-height: 17px;
/* identical to box height */
/

}



`;

export const Secu = styled.div`
display:none;
@media (max-width:600px){
/* Security Code * */
display:inline;
position: absolute;
width: 105px;
height: 447px;
left: 92px;
top: 145vh;
-webkit-transform:scale(2.1);
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #3F465C;
}


`;

 export const Thumbs=styled.div`
 display:none;
 @media (max-width:600px){
position: absolute;
width: 79.06px;
height: 110.61px;
left: 554px;
top: 269px;
display:inline;
-webkit-transform:scale(3.1);

 }
 `;
export const Input = styled.input`
/* someone@gmail.com */

position: absolute;
width: 142px;
height: 17px;
left: 590px;
top: 310px;
border-style:none;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #CDDBEA;
@media (max-width:600px){
  display:none;
}

  `;

export const Fpimg = styled.div`

/* Forgot_pass_Pg1 1 */
@media (max-width:600px){
display:none;
}

position: absolute;
width: 445px;
height: 391.12px;
left: 40px;
top: 323px;

background: url(Forgot_pass_Pg1.png);


`;
export const Arrow = styled.div`

display:none;
/* Vector */
@media (max-width:600px){
  position: absolute;
  left: 35.9%;
  right: 25%;
  top: 83.6%;
  bottom: 15%;
display:inline;
-webkit-transform:scale(2.1);

}


`;
export const Resetpass=styled.h1`
display:none;
@media (max-width:600px){
  /* Reset Password */

position: absolute;
width: 305px;
height: 34px;
left: 105px;
top: 475px;
display:inline;
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 38px;
line-height: 34px;
/* identical to box height */
-webkit-transform:scale(1.2);
color: #404366;


}


`;
export const Newpass = styled.h1`

display:none;
@media (max-width:600px){
/* New Password * */
display:inline;
position: absolute;
width: 110px;
height: 17px;
left: 12.5vh;
top: 150vh;
-webkit-transform:scale(2);
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #3F465C;

}

`;
export const Confirmpass = styled.h2`

display:none;
@media (max-width:600px){
  /* Confirm Password * */

position: absolute;
width: 132px;
height: 17px;
left: 92px;
top: 175vh;
display:inline;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */
-webkit-transform:scale(2.1);
color: #3F465C;


}
`;
export const Abra1 =styled.input`

display:none;
@media (max-width:600px){

  display:inline;
  position: absolute;
  border-top:none;
  border-left:none;
  border-right:none;
  border-bottom-width:4px;
  border-bottom-color:#404366;
width: 640px;
height: 87px;
left: 20px;
top: 180vh;
opacity:100%;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 15px;
/* identical to box height */


color: #404366;
/* identical to box height */

`;
export const Abra = styled.input`
display:none;
@media (max-width:600px){

  display:inline;
  position: absolute;
  border-top:none;
  border-left:none;
  border-right:none;
  border-bottom-width:4px;
  border-bottom-color:#404366;
width: 640px;
height: 87px;
left: 20px;
top: 155vh;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 15px;
/* identical to box height */


color: #404366;
/* identical to box height */

}
`;
export const Skilzenlogo = styled.div`
/* Vector */

position: absolute;
left: 2.19%;
right: 79.65%;
top: 3.67%;
bottom: 80.64%;



`;
export const Almostdone = styled.div`

/* Let us help */

position: absolute;
width: 344px;
height: 47px;
left: 591px;
top: 64px;

font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 46px;
line-height: 56px;

color: #EC1F28;
@media (max-width: 600px){
  display:none;
}

`;
export const HiringBird =styled.div`
opacity:0%;
/* HiringBird-01 1 */
@media (max-width:600px){
  opacity:100%;
position: absolute;
width: 94px;
height: 31.11px;
left: 26vh;
top: 34px;
-webkit-transform:scale(2.1);
}
`;
export const Letushelp = styled.div`
color:white;


/* Let us help */
@media (max-width:600px){
  /* Let us Help! */

  position: absolute;
  width: 140px;
  height: 82px;
  left: 30vh;
  top: 182px;
  
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 41px;
  
  color: #EC1F28;
  
  
-webkit-transform:scale(2.5);
}
`;
export const Forgotpass =styled.div`
/* Forgot Password */

position: absolute;
width: 261px;
height: 39px;
left: 592px;
top: 160px;

font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;
/* identical to box height */

color: #404366;
@media (max-width:600px){
  display:none;
}


`;
export const Mention =styled.div`

/* New User ? Sign Up */

position: absolute;
height: 15px;
left: 593px;
right: 102px;
top: 199px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 15px;
/* identical to box height */
text-align: justify;

color: #404366;
;
@media (max-width:600px){
  display:none;
}


`;
export const Regmail = styled.div`

/* Registered Email */

position: absolute;
width: 130px;
height: 17px;
left: 593px;
top: 272px;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #404366;
@media (max-width:600px){
  display:none;
}

`;
export const Line1 =styled.hr`

/* Line 33 */

position: absolute;
width: 430.65px;
height: 0px;
left: 592px;
top: 331px;

border: 0.76489px solid #CDDBEA;
@media (max-width:600px){
  display:none;
}

`;
export const Or = styled.div`
/* OR */

position: absolute;
width: 19px;
height: 16px;
left: 801px;
top: 380px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: #F26A7E;
@media (max-width:600px){
  display:none;
}
`;
export const Passwordin = styled.div`
/* Contact Number */

position: absolute;
width: 111px;
height: 17px;
left: 593px;
top: 360px;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 17px;
/* identical to box height */

color: #404366;
@media (max-width:600px){
  display:none;
}
`;
export const Reenter = styled.div`
position: absolute;
width: 130px;
height: 17px;
left: 593px;
top: 440px;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #404366;
@media (max-width:600px){
  display:none;
}

`;
export const Contactnum = styled.div`
/* Contact Number */

position: absolute;
width: 111px;
height: 17px;
left: 593px;
top: 430px;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #404366;
@media (max-width:600px){
  display:none;
}
`;
export const Passin = styled.input`


position: absolute;
width: 142px;
height: 17px;
left: 593px;
top: 390px;
border-style:none;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: red;
@media (max-width:600px){
  display:none;
}

`;
export const Input2 = styled.input`
/* someone@gmail.com */

position: absolute;
width: 142px;
height: 17px;
left: 593px;
top: 470px;
border-style:none;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #CDDBEA;
@media (max-width:600px){
  display:none;
}

  `;
export const Line3 = styled.hr`
position: absolute;
width: 430.65px;
height: 0px;
left: 594px;
top: 415px;

border: 0.76489px solid #CDDBEA;
@media (max-width:600px){
  display:none;
}
`;
export const Line2 = styled.hr`
/* Line 33 */

position: absolute;
width: 430.65px;
height: 0px;
left: 594px;
top: 492px;

border: 0.76489px solid #CDDBEA;

@media (max-width:600px){
  display:none;
}


`;
export const Checkmail = styled.div`
/* New User ? Sign Up */

position: absolute;
height: 18px;
left: 594px;
right: 300px;
top: calc(50% - 18px/2 + 146px);

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* identical to box height */
text-align: justify;

color: #FDBFC8;
@media (max-width:600px){
  display:none;
}
`;
export const Enterbut = styled.button`

/* button/big/hover */

/* Auto Layout */
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 17px 35px;

width: 108px;
height: 53px;
left: 919px;
top: 55px;

background: #FFFFFF;
border-radius: 6px;
border-color: #F9BFC2;

/* label */


width: 38px;
height: 19px;
left:34px;
top: 5px;

font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 3px;

color: #404366;


/* Inside Auto Layout */

@media (max-width:600px){
  display:none;
}

`;
export const Hiringres = styled.div`


@media   screen (max-width:600px){
    /* HiringBird-01 1 */

position: absolute;
width: 94px;
height: 31.11px;
left: 31px;
top: 34px;
transform: scale(11.2);


}


`;
export const Checkbox1 = styled.input`

/* Rectangle */

position: absolute;
left: 49.64%;
right: 46.32%;
top: 75%;
bottom: 39.33%;

border: 1.5px solid #C9CBE2;
box-sizing: border-box;
border-radius: 3.09091px;

@media (max-width:600px){
  /* Rectangle */

position: absolute;
left: 8.8%;
right: 87.2%;
top: 221.95%;
bottom: 28.2%;
-webkit-transform:scale(2.1);
border: 1px solid #A9ACCB;
border-radius: 3.09091px;

}

`;
export const Checkbox2 = styled.input`


position: absolute;
left: 49.64%;
right: 46.32%;
top: 79%;
bottom: 39.33%;

border: 1.5px solid #C9CBE2;
box-sizing: border-box;
border-radius: 3.09091px;

@media (max-width:600px){
  /* Rectangle */

position: absolute;
left: 8.8%;
right: 87.2%;
top: 233.95%;
bottom: 28.2%;
-webkit-transform:scale(2.1);
border: 1px solid #A9ACCB;
border-radius: 3.09091px;

}
`;
export const Sp = styled.h2`

/* Show Password */

position: absolute;
width: 94px;
height: 15px;
left: 627px;
top: 541px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12.5px;
line-height: 15px;
/* identical to box height */

color: #404366;

@media (max-width:600px){
  /* Show Password */

position: absolute;
width: 91px;
height: 15px;
left: 120.64px;
top: 200vh;
-webkit-transform:scale(2.3);
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
/* identical to box height */

color: #404366;


}


`;
export const Keep = styled.div`


position: absolute;
width: 114px;
height: 15px;
left: 627px;
top: 570px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12.5px;
line-height: 15px;
/* identical to box height */

color: #404366;
@media (max-width:600px){
  /* Show Password */

position: absolute;
width: 110px;
height: 15px;
left: 130.64px;
top: 210vh;
-webkit-transform:scale(2.3);
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
/* identical to box height */

color: #404366;


}

`;
export const Donthaveacc =styled.h1`

display:none;
@media (max-width:600px){
  /* Dont have an account ? Sign up */
-webkit-transform:scale(1.9);
position: absolute;
width: 239px;
height: 19px;
left: 34vh;
top: 245vh;
display:inline;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;

color: #939EA9;


}
`;

