import React from 'react';
import { greetings } from "../portfolio";
import emoji from "react-easy-emoji";



import {
    Card,
    Col,
    Row,
    Container,
} from "reactstrap";

import SocialLinks2 from "../components/SocialLinks2";

const GithubProfileCard = ({prof}) => {
    return ( 
            <Card className="section-lg bg-gradient-dark shadow-lg border-0">
                <Container className="">
                <div className="p-2">
                  <Row className="">
                  <Col className="order-lg-2" lg="4">
                      <img src={prof.avatar_url} style={{width: "200px"}} alt="" className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"/>
                      <h2 className="text-white" id="nav-title"> {greetings.name} {emoji("😀")}</h2>
                    </Col>
                    <Col lg="8" className="order-lg-1">
                      <h2 className="text-white">
                        CONTACT ME !
                      </h2>
                      <p className="lead text-white mt-3">
                        
                      </p>
                      <p className="text-white mt-3">
                          D2/30 Jeewan park , New Delhi , India 110059
                      </p>
                      <p className="text-white mt-3">
                      <i className="fa fa-envelope-o mr-2" aria-hidden="true"></i>
                         {"gaurav55558@gmail.com"}
                      </p>
                      <p className="text-white mt-3">
                      <i className="fa fa-phone mr-2" aria-hidden="true"></i>
                      7982152677

                      </p>
                      <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                        <i className="ni ni-pin-3 text-info mr-2" />
                        {prof.location}, India
                        </div>
                        <SocialLinks2 />
                    </Col>                    
                  </Row>
                </div>
                </Container>
              </Card>
     );
}
 
export default GithubProfileCard;