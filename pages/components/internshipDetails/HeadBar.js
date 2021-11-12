import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {HeadContainer, HeadLeft, HeadTitle, HeadRight, HeadIcon, HeaderIcons, DropdownWrap} from "./styles/Headbar.styled"
import CardGrid from "./CardGrid";
import ListView from "./ListView";
import Dropdown from "./Dropdown";

function HeadBar() {

  const [gridShowToggle, setGridShowToggle] = useState(false);
  const eventHandler = () => {
    setGridShowToggle(!gridShowToggle);
  }

  const [internships, setInternships] = useState([]);

  useEffect(()=> {
    axios.get("http://localhost:8800/internship?page=1&limit=18")
    .then(response => {
      console.log(response.data.data);
      setInternships(response.data.data);
    })
    .catch(error => {
      console.log(error);
    })
  },[])

    return (
        <>
        <HeadContainer>
            <HeadLeft>
                <HeadTitle>120 internships for UI/UX Design</HeadTitle>
            </HeadLeft>
            <HeadRight>
            <DropdownWrap>
            <Dropdown
        title="SORT BY"
        option1="2 months"
        option2="3 months"
        option3="6 months"
        option4="8 months"
      />
      </DropdownWrap>
      <HeaderIcons>
            {
                !gridShowToggle ? (<><HeadIcon src="/list-view-pink.svg" onClick={eventHandler} ></HeadIcon> <HeadIcon src="/card-view.svg" onClick={eventHandler} style={{marginLeft: "30px"}}></HeadIcon></>
                )
                :
                (
                <> <HeadIcon src="/list-view.svg" onClick={eventHandler} ></HeadIcon> <HeadIcon src="/card-view-pink.svg" onClick={eventHandler} style={{marginLeft: "30px"}}></HeadIcon> </>
                )
            }
            </HeaderIcons>
               
            </HeadRight>
        </HeadContainer>
        {
            gridShowToggle ? <CardGrid internships={internships}/> : <ListView internships={internships}/>
        }
        </>
    )
}

export default HeadBar
