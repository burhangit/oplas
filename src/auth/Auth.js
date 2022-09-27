import "./auth.css";
import React, { useState } from "react";
import { FaGooglePlusSquare, FaTwitterSquare } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Auth = (props) => {
  const [isLogin, setIsLogin] = useState(props.isLogin);

  const handleAuthVisibility = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header id="modal_header" closeButton>
        <Modal.Title id="modal_title">
          {isLogin ? "Sign in" : "Sign up"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div classsName="modallogin">
          <form action="">
            <div className="modal_form_fields">
              <div className="modal_form_field1">
                <label htmlFor="user_name_or_email">User Name Or Email</label>
                <input type="email" />
              </div>
              <div className="modal_form_field2">
                <label htmlFor="password">Password</label>
                <input type="password" />
              </div>
              {!isLogin && (
                <div className="modal_form_field2">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input type="password" placeholder="ConfirmPassword" />
                </div>
              )}
            </div>
            <div className="modal_sign_in_btn_and_forget_pw">
              <button> {isLogin ? "Sign in" : "Sign up"}</button>
              <a href="#">forgot password</a>
              <button onClick={handleAuthVisibility}>
                {!isLogin ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Auth;
