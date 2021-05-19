import React from 'react';

import {  Button } from "reactstrap";

import { socialLinks } from "../portfolio";

const SocialLinks2 = () => {
    return ( 
        <div className="btn-wrapper text-lg">
            <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href={socialLinks.twitter}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href={socialLinks.facebook}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="instagram"
                  href={socialLinks.instagram}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-instagram" />
                  </span>
                </Button>
                <Button
                  className="btn-1 ml-1"
                  color="white"
                  outline
                  href={socialLinks.github}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github mr-2" />
                  </span>
                  github
                </Button>
                <Button
                  className="btn-1 ml-1"
                  outline
                  color="primary"
                  href={socialLinks.linkedin}
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-linkedin mr-2" />
                  </span>
                  Linked In
                </Button>
        </div>
     );
}
 
export default SocialLinks2;