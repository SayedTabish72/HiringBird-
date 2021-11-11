import styled from "styled-components";

export const DropdownSelect = styled.ul`
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #a9accb;
  transition: all 0.3 ease-in-out;
  margin-right: 30px;
`;

export const Img = styled.img`
  width: 17px;
`;

export const Option = styled.li`
  z-index: 1000;
  
     &:hover {
        color: #404366;
   } 

  list-style-type: none;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color:  #C9CBE2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  display: inline-block;
  > input {
    opacity: 0;
  }
  > input + label {
    position: relative; /* permet de positionner les pseudo-éléments */
    padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
    cursor: pointer;    /* affiche un curseur adapté */
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 17px; height: 17px; /* dim. de la case */
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 3px; /* angles arrondis */
      box-shadow: inset 0 1px 3px rgba(0,0,0,.3) /* légère ombre interne */
    }
    &:after {
      content: '✔';
      position: absolute;
      top: -1px; left: 2px;
      font-size: 16px;
      color: #09ad7e;
      transition: all .2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; /* coche invisible */
        transform: scale(0); /* mise à l'échelle à 0 */
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;

export const Options = styled.div`
  top: -17px;
  background-color: #fff;
  position: absolute;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 10px;
  width: 190px;
`;

export const Checkbox = styled.input`
  display: inline-block;
 appearance: none;
    -webkit-appearance: none;
  > input {
    opacity: 0;
  }
 position: relative; 
    padding-left: 25px; 
    cursor: pointer;  
    margin-top: -20px;  
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 17px; height: 17px;
      background: #F26A7E;
      border-radius: 3px;
      box-shadow: inset 0 1px 3px rgba(0,0,0,.3) 
    }
    &:after {
      content: '✔';
      position: absolute;
      top: -1px; left: 2px;
      font-size: 16px;
      color: #fff;
      transition: all .2s; 
    }

    > input:not(:checked) + label {
      &:after {
        opacity: 0; 
        transform: scale(0); 
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        box-shadow: none;
        border-color: #bbb;
        background-color: #ddd;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; 
      transform: scale(1); 
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
    ${'' /* appearance: none;
    -webkit-appearance: none;
    height:20px;
    width:20px;
    background-color: pink;
    border-radius: 5px;
    cursor:pointer;


    &:before {
      content: '✔';
      position: absolute;
      top: -1px; left: 2px;
      font-size: 16px;
      color: #09ad7e;
      transition: all .2s; /* on prévoit une animation */
    } */}
`
