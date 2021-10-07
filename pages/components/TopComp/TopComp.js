
import { TopCom ,Purple,Red,Belowred,Paypal1, Paypal2, Mc1, Mc2,Join} from '../styles/Topcomp.styled'
import pp1 from '../../../public/paypal.png'
import pp2 from '../../../public/paypal.png'
import sl1 from '../../../public/slack.png'
import sl2 from '../../../public/slack.png'
import monke1 from '../../../public/monke.png'
import monke2 from '../../../public/monke.png'
import mc1 from '../../../public/mc.png'
import mc2 from '../../../public/mc.png'
import dp1 from '../../../public/dropbox.png'
import dp2 from '../../../public/dropbox.png'
import bl1 from '../../../public/bluelogo.png'
import bl2 from '../../../public/bluelogo.png'
const TopComp = () => {
  return (
      <>
      <Purple>
    <TopCom>Top Companies Hiring<Red>Get internships in 
renowned companies</Red><Belowred>Choose HiringBird for your next internship opportunity</Belowred></TopCom>
    <Paypal1 src={pp1}/>
    <Paypal2 src={pp1}/>
    <Mc1></Mc1>
    <Mc2></Mc2>
    <Join>Join skilzen</Join>
    </Purple>

      </>
    
  )
}

export default TopComp
