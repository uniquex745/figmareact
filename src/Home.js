
import './home.css'
import { FcAddDatabase } from "react-icons/fc";


import {BarChart,Bar,CartesianGrid,XAxis,Tooltip} from 'recharts';





const Home = () => {

    const pdata = [
        {
          name: 'Enrollments',
          
          pv: 10000,
        
        },
        {
          name: 'Completion',
      
          pv: 65000,
          
        },
        {
          name:'Qualified',
          
          pv: 30000,
        
        },
        {
          name: 'Reached Out',
          
          pv: 65000,
        
        },
        {
          name: 'Interview Set',
        
          pv: 80000,
        
        },
        {
          name: 'Hired',
          
          pv: 95000,
          
        },
      
      
      ];
    return (


        <div className='internship'>
             <h1>Internships<button id='button' type='button' className='btn btn-primary' ><span id='data'><FcAddDatabase/></span>Create new Internship</button>
             </h1><br />
        
              
                 
            <div className='container col-12' id='insights'><h5>Internship Insights <button id='b2' >This Week</button><button id='b3'>This month</button> <button id='b4'>Select dates</button>
             </h5> 
             <div id='graph'><BarChart width={475} height={150} data={pdata} >
                <CartesianGrid  />
                    <XAxis dataKey="name"  interval={'preserveStartEnd'} fontSize={12} />
                     
                    <Tooltip />
                      
                <Bar dataKey="pv" fill="#8884d8" />
                
                
                
                    </BarChart>
            </div>



             <p >In the eighteenth century the german <br /> philosopher immanuel Kant developed <br /> a theroy of knowledge space  can be a <br /> both priori and synthetic.

            </p>
 
           
            </div>


    
            
            </div>
        



      );
}
 
export default Home ;






