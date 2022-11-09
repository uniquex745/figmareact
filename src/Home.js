
import './home.css';
import { FcAddDatabase } from "react-icons/fc";
import {CiCalendarDate} from 'react-icons/ci';
import Table from './Interntable';
import pdata from './grap';



import {BarChart,Bar,CartesianGrid,XAxis,Tooltip} from 'recharts';






const Home = () => {

    
    return (

        <div className='internship '>
             <h1>Internships<button id='button' type='button' className='btn btn-primary' ><span id='data'><FcAddDatabase/></span>Create new Internship</button>
             </h1><br />
        
            <div className='container col-12' id='insights'><h5>Internship Insights <button id='b2' >This Week</button><button id='b3'>This month</button> <button id='b4'><span id='ci'><CiCalendarDate/></span>&nbsp;Select dates</button>
             </h5> 
             <div id='graph'><BarChart width={570} height={110} data={pdata} >
                <CartesianGrid  />
                    <XAxis dataKey="name"  interval={'preserveStartEnd'} fontSize={12} />
                     
                    <Tooltip />
                      
                <Bar dataKey="pv" fill="#8884d8" />
                
                
                
                    </BarChart>
            </div>



             <p ><small>In the eighteenth century the german <br /> philosopher immanuel Kant developed <br /> a theroy of knowledge space  can be a <br /> both priori and synthetic.</small>

            </p>
             
           
            </div><br />

              <Table/> 
      
            


            </div>



            

            

            
          
      );
}
 
export default Home ;






