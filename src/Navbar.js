
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import {TfiMedall} from 'react-icons/tfi'
import {SlBookOpen,SlBag} from 'react-icons/sl'
import {DiAptana} from 'react-icons/di'


import './index.css';

import { Link } from 'react-router-dom';











const Navbar = () => {

 
    return ( 

        <nav className="navbar">

            <div className="links">

                
                <h1>RADICAL&nbsp;<span id='x'>X</span></h1>
                
                
                <Link to="/"><p><span id='jb'><AiOutlineAppstoreAdd/></span>&nbsp;&nbsp;&nbsp;DashBoard</p></Link>
            
               <Link to="/Create"><p><span id='medal'><SlBookOpen/></span>&nbsp;&nbsp;&nbsp;Internships</p></Link>
               <Link to=""><p><span id='book'><TfiMedall/></span>&nbsp;&nbsp;Apprenterships</p></Link>
               <Link to=""><p><span id='set'><SlBag/></span>&nbsp;&nbsp;Jobs</p></Link>
               <Link to=""><p><span id='dash'><DiAptana/></span>&nbsp;&nbsp;Settings</p></Link>
                    
                
                
            </div>
            <h6 id='adam'><input class="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>&nbsp;
                     &nbsp;   Adam Scott</h6>
        </nav>
        


     );
}
 

export default Navbar;