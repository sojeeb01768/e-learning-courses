import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';




const Footer = () =>
    <footer className="page-footer font-small blue pt-4 border">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">code scholar</h5>
                    <p>Here you can learn the best coding skill by the world best Instructor</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Social Media</h5>
                    <ul className="list-unstyled">

                        <div>
                            <span className='m-2'><a href="https://www.facebook.com/"><FaFacebook></FaFacebook></a></span>
                            <span className='m-2'><a href="https://twitter.com/"><FaTwitter></FaTwitter></a></span>
                            <span className='m-2'><a href="https://www.instagram.com/"><FaInstagram></FaInstagram></a></span>
                            <span className='m-2'><a href="https://www.youtube.com/"><FaYoutube></FaYoutube></a></span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">
            <p>Copyright 2022 code scholar</p>
        </div>

    </footer>

export default Footer;