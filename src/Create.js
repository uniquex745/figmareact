import {Container,Row,Col,Button } from "react-bootstrap";
import { HiArrowLongLeft,HiArrowRight } from "react-icons/hi2";
import 'bootstrap/dist/css/bootstrap.min.css';
import './create.css';



const Create = () => {
    return ( 

        
        
            <div>

            <Container fluid  className="addnew" >
                <Row>
                <Col>
                    <h3 id="ba"><span id="hi"><HiArrowLongLeft/></span> Back </h3>
                </Col>
                <Col>
                <h3 id="hnew">Add New Intenship</h3>
                </Col>

                <Col>
                <Button id='cns'>Continue next step<HiArrowRight/></Button>
                    
                </Col>
 
                </Row>
            
            </Container>
            </div>
    
        



        

     );
}
 
export default Create;