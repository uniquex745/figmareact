import DataTable from 'react-data-table-component';
import './index.css';
import { WiTime2 } from "react-icons/wi";
import {VscGraph,VscSourceControl} from 'react-icons/vsc';
import {MdPersonAddAlt} from 'react-icons/md';


import { BarChart,Bar } from 'recharts';



const Grap=[{

    qu:20,



},

{   

    qu:10,
},

{

    qu:15,
},
{

    qu:12,
},{

    qu:14,
},
{

    name:'Qulified',
    qu:30,
},
{

    qu:9,
},
{

    qu:7,
},
{

    qu:5,
},

];

const columns = [
    {
        name: 'Internship Title',
        selector: row => row.title,

        

    },
    {
        name: <html><span id='wit'><WiTime2/></span>&nbsp;Completion Period</html>,
        selector: row => row.completion,
    },

    {
        name: <html><span id='wit'><WiTime2/></span>&nbsp;Total Enrolled</html> ,
        selector:row => row.enrolled,


    },{

        name:<html><span id='wit'><WiTime2/></span>&nbsp;Qulified Candidates</html>,
        selector:row=><BarChart  width={100} height={30} data={Grap} ><Bar barSize={10}  dataKey="qu" fill='#8884d8' >
        

        </Bar>
        
        </BarChart> 
         
    },
    {
        selector:row=><html><span className='vsg'><VscGraph/>&nbsp;<MdPersonAddAlt/>&nbsp;<VscSourceControl/></span></html>

    }
];

const data = [
    {
        id: 1,
        title: <html><b>Product Design GVI</b><p><sub>its ok to be alone not to social<br/> but this not fear and not true</sub></p></html>,
        completion: <html><b>120 days</b><p><sub>(created on 10/12/2021)</sub></p></html>,
        enrolled: <html><div className='roll'>20000</div></html>,
        
    },
    {
        id: 2,
        title: <html><b>Product Design GVI</b><p><sub>its ok to be alone not to social<br/> but this not fear and not true</sub></p></html>,
        completion: <html><b>120 days</b><p><sub>(created on 10/12/2021)</sub></p></html>,
        enrolled: <html className='roll'><div>20000</div></html>
    },
    {
        id:3,
        title:<html><b>Product Design GVI</b><p><sub>its ok to be alone not to social<br/> but this not fear and not true</sub></p></html>,
        completion: <html><b>120 days</b><p><sub>(created on 10/12/2021)</sub></p></html>,
        enrolled:<html><div className='roll'>20000</div></html>
        

    },
    {
        id:4,
        title: <html><b>Product Design GVI</b><p><sub>its ok to be alone not to social<br/> but this not fear and not true</sub></p></html>,
        completion: <html><b>120 days</b><p><sub>(created on 10/12/2021)</sub></p></html>,
        enrolled: <html><div className='roll'>20000</div></html>
    }
]

function table() {
    return (
        <DataTable 
            columns={columns}
            data={data}
        />
    );
};

export default table;