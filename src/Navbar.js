
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import {TfiMedall} from 'react-icons/tfi'
import {SlBookOpen,SlBag} from 'react-icons/sl'
import {DiAptana} from 'react-icons/di'


const Navbar = () => {
    return ( 

        <nav className="navbar" >
        
        <div className="links" >

            
            <h1>RADICAL&nbsp;<span id='x'>X</span></h1>
            <a href="/" ><span  id='dash'><AiOutlineAppstoreAdd/></span><br/>&nbsp; Dashboard</a>
            <a href="/"><span id='medal'><TfiMedall/></span><br/>&nbsp; Apprentership</a>
            <a href="/"><span id='book'><SlBookOpen/></span><br/>&nbsp;&nbsp;Internships</a>
            <a href="/"><span id='jb'><SlBag/></span><br/>&nbsp;Jobs</a>
            <a href="/"><span id='set'><DiAptana/></span><br/>&nbsp; Settings</a>


        </div>
        
        </nav>


     );
}
 
export default Navbar;