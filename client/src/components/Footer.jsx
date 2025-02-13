import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faAlignJustify, faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
               <h2 className="first">
                  Nrityam : The Dance Club NITRR
               </h2>
               <div className="social item">
               <a href="#" target="_blank">
               <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="#" target="_blank" >
                    <FontAwesomeIcon icon={faFacebook}  />
                </a>

                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>

               </div> 
              
               <p className="copyright">
                 Nrityam NITRR @2022
               </p>
        </footer>
    );
};

export default Footer;