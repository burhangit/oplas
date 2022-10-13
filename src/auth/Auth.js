import "./auth.css";
import React, { useState } from "react";
import { FaGooglePlusSquare, FaTwitterSquare } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {AiOutlineTwitter} from 'react-icons/ai'
import axios from "axios";

const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(props.isLogin);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAuthVisibility = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };
  

  const onLoginHandle=()=>{
    axios.post('https://oplas.cyberx-infosystem.us/api/login')
    .then((res)=>{
      console.log(res)
    }).catch((err)=>console.log(err))
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header id="modal_header" closeButton>
        <Modal.Title id="modal_title">
          Sing In
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div classsName="modallogin">
          <form action="">
            <div className="modal_form_fields">
              <div className="modal_form_field1">
                <label htmlFor="user_name_or_email">User Name Or Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className="modal_form_field2">
                <label htmlFor="password" >Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
              </div>
            
            </div>
            <div className="modal_sign_in_btn_and_forget_pw">
              <button onClick={onLoginHandle} > Sign In</button>
              <a href="#">forgot password</a>
              {/* <button onClick={handleAuthVisibility}>
                {!isLogin ? "Sign in" : "Sign up"}
              </button> */}
            </div>
            
            <div className="modal_sign_in_btn_and_forget_pw3">
              <div className="modal_sign_in_btn_and_forget_pw2" >
              <p  className="here-p">Sign Up here</p>
              <p  className="here-p2">Sign Up here</p>
              </div>
              
              <div className="modal_sign_in_btn_and_forget_pw2" >
              <button className="social-btn" onClick={handleAuthVisibility}>
                G+
              </button>
              <button  className="social-btn-twitter" onClick={handleAuthVisibility}>
                <AiOutlineTwitter/>
              </button>
              </div>
         
            </div>
            
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Auth;
