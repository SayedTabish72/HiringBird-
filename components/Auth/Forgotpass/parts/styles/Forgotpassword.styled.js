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
@media (max-width: 1060px){
  margin-left:-170px;
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
@media (max-width: 1160px){
  margin-left:150vh;
  
  z-index:2;
}

`;
export const Mailimg = styled.div`
display:none;
@media (600px){
  left:40vh;
  z-index:-1;
}
`;

export const Siginupmain = styled.div`
position: center;
  
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
 top: 592px; 
 
 border: 1px solid #F26A7E;
 box-sizing: border-box;
 border-radius: 6px;
 background: #FFFFFF;
 
 @media (max-width:600px){
   display:none;
 }
 
 `;
 export const Signinbtn1 = styled.button`
 display:none;
 @media (max-width:600px){
 align-items: flex-start;
 padding: 17px 35px;
 display:inline;
 position: absolute;
 width: 122px;
 height: 53px;
 left: 320px;
 top: 220vh; 
 
 font-size:13.5px;
 -webkit-transform:scale(2);
 border: 1px solid #F26A7E;
 box-sizing: border-box;
 border-radius: 6px;
 background: #FFFFFF;
 
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
left: 20vh;
top: 34px;
-webkit-transform:scale(2.1);
}
`;
export const Input = styled.input`
/* someone@gmail.com */

position: absolute;
width: 432px;
height: 37px;
left: 590px;
top: 310px;

font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */
border-top:none;
border-left:none;
border-right:none;
color: #CDDBEA;
border-style-bottom:#CDDBEA;
@media (max-width:600px){
  position:relative;
  left:35vh;
  transform:scale(3);
  
  top: 130vh;
}
  `;
  export const Donthaveacc =styled.h1`

  display:none;
  @media (max-width:600px){
    /* Dont have an account ? Sign up */
  -webkit-transform:scale(2);
  position: absolute;
  width: 239px;
  height: 19px;
  left: 45vh;
  top: 238vh;
  display:inline;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  
  color: #939EA9;
  
  
  }
  `;
export const Fpimg = styled.div`

/* Forgot_pass_Pg1 1 */

position: absolute;
width: 445px;
height: 391.12px;
left: 40px;
top: 275px;

background: url(Forgot_pass_Pg1.png);

@media (max-width:600px){
  display:none;
}
@media (max-width:1160px){
  top:172px;
}
`;
export const Skilzenlogo = styled.div`
/* Vector */

position: absolute;
left: 2.19%;
right: 79.65%;
top: 3.67%;
bottom: 80.64%;



@media (max-width:600px){
  display:none;
}
`;
export const Letushelp = styled.div`

/* Let us help */

position: absolute;
width: 454px;
height: 47px;
left: 591px;
top: 57px;

font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 46px;
line-height: 56px;

color: #EC1F28;
@media (max-width:600px){
  /* Let us Help! */

position: absolute;
width: 120px;
height: 82px;
left: 30px;
top: 102px;
-webkit-transform:scale(3);
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 34px;
line-height: 41px;

color: #EC1F28;
left:180px;
top:230px;

}

`;
export const Forgotpassmail = styled.img`
display:none;
@media (max-width:600px){
  display:inline;
  background:red;
  margin-left:30vh;
  
  -webkit-transform:scale(11.4);
  
  
}

`;
export const Forgotpasstxt=styled.h1`
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

export const Forgotpass =styled.div`
/* Forgot Password */

position: absolute;
width: 261px;
height: 39px;
left: 592px;
top: 140px;

font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 32px;
line-height: 39px;
/* identical to box height */

color: #404366;
@media (max-width:600px){
  /* Reset Password */

position: absolute;
width: 635px;
height: 34px;
left: 135px;
top: 480px;
padding-bottom:0px;
display:inline;
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 58px;
line-height: 34px;
/* identical to box height */
-webkit-transform:scale(1.2);
color: #404366;


}


`;
export const Letterres = styled.div`

display:none;

@media (max-width:600px){
  left:610px;
  position:relative;
-webkit-transform:scale(3);
width:2000px;
height:150px;
display:flex;
top:40vh;
}

`;
export const Mention =styled.div`

/* New User ? Sign Up */

position: absolute;
height: 15px;
left: 593px;
right: 102px;
top: 199px;
width:70vh;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
/* identical to box height */
text-align: justify;

color: #EC1F28;

@media (max-width:600px){
  display:none;
}

`;

export const Lighttext = styled.div`
display:none;
@media (max-width:600px){
  /* Enter your Registered email or phone number to recieve a code */
display:inline;
position: absolute;
width: 345px;
height: 68vh;
left: 36vh;
top: 125vh;
-webkit-transform:scale(2.1);
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 19px;
line-height: 19px;

color: #A9ACCB;


}




`;
export const Regmail = styled.div`

/* Registered Email */

position: absolute;
width: 140px;
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
  /* New Password * */
  display:inline;
  position: absolute;
  width: 160px;
  height: 17px;
  left: 22.5vh;
  top: 120vh;
  -webkit-transform:scale(2.4);
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  
  color: #3F465C;
  
  }

`;
export const Regemobno =styled.h1`
display:none;
@media (max-width:600px){
  /* Registered Mobile Number * */
display:inline;
position: absolute;
width: 488px;
height: 17px;
left: 32vh;
top: 170vh;
-webkit-transform:scale(1.8);
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 17px;

line-height: 17px;
/* identical to box height */

color: #3F465C;


}
`;
export const Fillin1 =styled.input`
display:none;
@media (max-width:600px){
  display:none;
  font-size:33px;
  
  width:120vh;
  height:40px;
  background:none;
  margin-top:160vh;
  border-bottom-color:#C9CBE2;
  border-bottom-width:3px;
  border-top:none;
  border-right:none;
  border-left:none;
  border-style-right:none;
  color: #C9CBE2;

  -webkit-transform:scale(1.8);
  margin-left:26vh;
}


`;
export const Fillin2 =styled.input`
display:none;
@media (max-width:600px){
  font-size:5px;
  display:inline;
  width:120vh;
  height:40px;
  background:none;
  margin-top:210vh;
  border-bottom-color:#C9CBE2;
  border-bottom-width:3px;
  border-top:none;
  border-right:none;
  border-left:none;
  border-style-right:none;
  color: #C9CBE2;
  font-size:34px;
  -webkit-transform:scale(1.8);
  margin-left:-67vh;
  position:relative;
}


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
export const Line1 =styled.hr`

/* Line 33 */

position: absolute;
width: 430.65px;
height: 0px;
left: 592px;
top: 331px;

border: 0.76489px ;

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
  -webkit-transform:scale(3);
  top:155vh;
  left:50vh;
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
export const Input2 = styled.input`
/* someone@gmail.com */

position: absolute;
width: 432px;
height: 37px;
left: 593px;
top: 470px;
border-top:none;
border-left:none;
border-right:none;
color: #CDDBEA;
border-style-bottom:#CDDBEA;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
/* identical to box height */

color: #CDDBEA;

@media (max-width:600px){
  position:relative;
  left:1vh;
  transform:scale(2.9);
  width: 599vh;
  top: 180vh;
}
  `;
export const Line2 = styled.hr`
/* Line 33 */

position: absolute;
width: 430.65px;
height: 0px;
left: 594px;
top: 492px;

border: 0.76489px ;
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
top: calc(54% - 18px/2 + 142px);
width:80vh;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
/* identical to box height */
text-align: justify;

color: #FDBFC8;
@media (max-width:600px){
  top:200vh;
  left:40vh;
  width:400px;
  -webkit-transform:scale(2.2);
}
@media only screen (max-width:1440px){
  top:165px;
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
top: 52px;

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
@media (max-width:900px){
  -webkit-transform:scale(3);
  background:red;
}

`;