import React from 'react'
import DirectionIcon from '@material-ui/icons/RoomRounded';
import PhoneIcon from '@material-ui/icons/PhoneRounded';
import MessageIcon from '@material-ui/icons/MessageOutlined';
import './about.css';


export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-us">
                <div className="login-page">
                    <div className="login-area2">
                        <div className="log2">
                            <h1>feed back</h1>
                            <input type="text" name="name" placeholder="Name"/>
                            <input  type="email" name="email" placeholder="email"/>
                            <input type="text" name="subject" placeholder="subject"/>
                            <textarea type="text" name="message" placeholder="Message" />
                            <button  onClick={()=>{
                            }}>Send</button>
                        </div>
                        <div className="contact-info">
                            <h1 >Contact Us</h1>
                            <div>
                                <DirectionIcon /> <p>Mizan Teferi SNNPR hibret street </p>
                            </div>
                            <div>
                                <PhoneIcon/><p>+251917897592</p>
                            </div>
                            <div>
                                <MessageIcon/><p>meseretkifle2@gmail.com</p>   
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
