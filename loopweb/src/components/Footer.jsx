import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer>
        <div className='d-flex flex-wrap flex-sm-nowrap'>
            <div className="follow">
                <h2 className="footer-heading">FOLLOW US</h2>
                <ul>
                    <li>
                        <a href="/"><FaFacebookSquare/></a>
                    </li>
                    <li>
                        <a href="/"><FaTwitter/></a>
                    </li>
                    <li>
                        <a href="/"><FaInstagram/></a>
                    </li>
                    <li>
                        <a href="/"><FaYoutube/></a>
                    </li>
                    <li>
                        <a href="/"><FaTiktok/></a>
                    </li>
                </ul>
            </div>
            <div className="about">
                <h2 className="footer-heading">ABOUT US</h2>
                <ul>
                    <li>
                        <a href="/">About Looping</a>
                    </li>
                    <li>
                        <a href="/">Careers</a>
                    </li>
                    <li>
                        <a href="/">Media Releases</a>
                    </li>
                    <li>
                        <a href="/">FAQ</a>
                    </li>
                    <li>
                        <a href="/">Accessibility</a>
                    </li>
                    <li>
                        <a href="/">Gift Card Balance</a>
                    </li>
                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className='copyright text-center'>
            <span>Copyright © 2023 Looping Cinemas. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default Footer