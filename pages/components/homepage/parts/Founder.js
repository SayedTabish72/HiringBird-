import React from 'react'
import { Foundernote, Team } from './styles/Foundernote.styled'


const Founder = () => {
    return (
        <>
        <Foundernote>
            <div>
                <div>
                <h1>Founder's Note</h1>
                </div>
                <div className="maintext">
                    <div>
                        <span>“</span> 
                    </div>
                    <div>
                        <p> We had an incredible experience working with Skilzen and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to 
                        </p>
                        <p className="fullname">
                            Full name
                        </p>
                        <p className="ceo">
                           CEO at Skillzen 
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <img src = '../../../../Founder.png'></img>
            </div>
        </Foundernote>
        <Team>
            <div className= "team">
            <h4>Our Team</h4>
                <div>
                    <img className="teamimg" src = '../../../../team1.png'></img>
                </div>
                <div>
                    <img className="teamimg" src = '../../../../team2.png'></img>
                </div>
                <div>
                    <img className="teamimg" src = '../../../../team3.png'></img>
                </div>
                <div>
                    <img className="teamimg" src = '../../../../team4.png'></img>
                </div>
            </div>
        </Team>
    </>
    )
}

export default Founder