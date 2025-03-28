import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import "./stylesheets/navbar.css";
import logo from "./assets/logo.png"
const Navbar=()=>{
    return(
        <div className="navbars">
            <div className="headernav">
                <p><span><AccessTimeIcon/></span>Monday - Saturday, 8AM to 10PM</p>
                <p><span><PhoneInTalkIcon/></span>Call us now +1 5589 55488 55</p>
            </div>
            <div className='headernavtwo'>
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Departments</li>
                    <li>Doctors</li>
                </ul>
                <button>Make an appointment</button>
            </div>
        </div>
    )
}
export default Navbar;