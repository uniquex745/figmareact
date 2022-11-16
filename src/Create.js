import {Container,Row,Col,Button,Form } from "react-bootstrap";
import { HiArrowLongLeft,HiArrowRight } from "react-icons/hi2";
import{TbAlignJustified} from "react-icons/tb";
import{AiFillCaretRight,AiOutlinePlusSquare} from 'react-icons/ai';
import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Card from 'react-bootstrap/Card';
//import {FcOk} from 'react-icons/fc'



//import {CiSearch} from 'react-icons/ci';

import 'bootstrap/dist/css/bootstrap.min.css';
import './create.css';




const Create = () => {

    const [open, setOpen] = useState(false);

    


    const [open2, setOpen2] = useState(false);

    const close = () =>setOpen2(false);
    const close2=()=>setOpen(false);
    


    return ( 

        
        
            <><><div>

            <Container fluid className="addnew">
                <Row>
                    <Col>
                        <a href="/"> <h3 id="ba"><span id="hi"><HiArrowLongLeft /></span> Back </h3></a>
                    </Col>
                    <Col>
                        <h3 id="hnew">Add New Intenship</h3>
                    </Col>

                    <Col>
                        <Button id='cns'>Continue next step<HiArrowRight /></Button>

                    </Col>

                </Row>

            </Container>

        </div><div>

                <Container fluid className="descr">
                    <Row>
                        <Col>
                          <Button variant="onlight-light"  id="intd" active='true'>Internship Description</Button>

                        </Col>
                        <Col>
                          <Button variant="onlight-light" id='ign'  disabled='true' >Internship Guide</Button>
                        </Col>

                        <Col>
                            <Button variant="online-light" aria-pressed='true' id='surv' disabled='true'>Surveys</Button>

                        </Col>
                        <Col>
                        
                            <Button variant="onlight-light" id='sett' disabled='true' >Settings</Button>
                        </Col>

                    </Row>


                </Container>

            </div></>

            <Container fluid className="buttgr" >
            
            
    
            
            <Row>
            <Col className="icon5" sm='1'><TbAlignJustified/>
            
            <TbAlignJustified/>
            <TbAlignJustified/>
            <TbAlignJustified/>
            <TbAlignJustified/>
            <TbAlignJustified/>
            <TbAlignJustified/>
            <TbAlignJustified/>
        
            </Col>

            <Col sm='6' className="new">
            <div className="d-grid gap-2">
        
            <Button size="md" className="blb" onClick={() => setOpen(!open) 
            }  >
        
    
            Category  <AiFillCaretRight className="aifil"/>
            </Button>
       
                
                <Button  size="md" className="blb"  onClick={() => setOpen2(!open2)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
                 Description<AiFillCaretRight className="aifil"/>
             </Button>
             <Button  size="md" className="blb">
                 Location Description<AiFillCaretRight className="aifil"/> 
             </Button>
             <Button  size="md" className="blb">
                 Benefits Description<AiFillCaretRight className="aifil"/>
             </Button>
             <Button  size="md" className="blb">
                 Intro Videos Description<AiFillCaretRight className="aifil"/>
             </Button>
             <Button  size="md" className="blb">
                 Mentor Details Description<AiFillCaretRight className="aifil"/>
             </Button>
             <Button  size="md" className="blb">
                 Recommended Roles Description<AiFillCaretRight className="aifil"/>
             </Button>
             <Button  size="md" className="blb">
                 Web Link & Resources Description<AiFillCaretRight className="aifil"/>
             </Button>
             <button size="md" className="dotted" >
             <AiOutlinePlusSquare/> Add More  
             </button>


                
           
            
    

            </div>

    
            
            </Col>

                <Col sm='5'>

                
                
                <Container >

                <div style={{ minHeight: '200px' }}>
                
        <Collapse in={open} dimension="width" onEnter={close} timeout={1}>
          <div id="example-collapse-text" >
            <Card body style={{ width: '580px' }}>
            <Form>
            
        <Form.Group className="mb-3">
          <Form.Label htmlFor="searchbar"><h5>Category </h5></Form.Label>
          
          <Form.Control id="searchbar" placeholder="SearchCategory" required type="text"   >
          

            
          </Form.Control>
          
        
        
        </Form.Group>
        </Form>
            </Card>
            
          </div>
    
        </Collapse>
                
            
                

        <Collapse in={open2} dimension="width" onEnter={close2} timeout={1}  >
          <div id="example-collapse-text">
            <Card body style={{ width: '580px' }}>
            <Form>
      
        <Form.Group className="mb-3">
          <Form.Label htmlFor="description"><h5 >Description</h5></Form.Label>
          <Form.Control id="description" placeholder="Description" />
        </Form.Group>
        </Form>
            </Card>
          </div>
        </Collapse>
      </div>
   
        
      
                
  
                </Container>
                
                
                </Col>
           
            
            </Row>

     
       
            
            </Container>


            </>
            
    
        



        

     );
}
 
export default Create;