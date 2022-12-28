import Button from "../Component/Button";
import {GoBell,GoAlert} from 'react-icons/go';
import {FiActivity} from 'react-icons/fi';
import {MdArticle} from 'react-icons/md';
import {SiApachespark} from 'react-icons/si';
import {WiDaySnowThunderstorm,WiNightAltHail} from 'react-icons/wi';



const ButtonPage=()=>{
    const handleClick=()=>{
        console.log("Hey i am here onlclick");
    }

    return (
        <div>
            <div>
            
            <Button primary outline rounded className='mx-4 my-6'> <GoBell/> primary</Button>
            </div>
            <div>
            <Button success rounded outline onClick={handleClick} ><GoAlert/>Success</Button>
            </div>
            <div>
            <Button secondary outline onMouseEnter={handleClick}> <FiActivity/> Secondary</Button>
            </div>
            <div>
            <Button warning outline> <MdArticle/> Warning</Button>
            </div>
            <div>
            <Button danger outline> <SiApachespark/> Danger</Button>
            </div>
            <div>
            <Button outline> <WiNightAltHail/> Outline</Button>
            </div>
            <div>
            <Button rounded> <WiDaySnowThunderstorm/> Rounded</Button>
            </div>  
        </div>
    )
}

export default ButtonPage;