import React from "react";
import "./Register.css";
import icon from "../../assets/image/Logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="signup_section">
      <div className="signup_container">
        <Link>
          <img src={icon} alt="" />
        </Link>
        <div className="signup_form">
          <h3>Sign up</h3>
          <form>
            <div className="signup_fields">
              <div className="name_field">
                <div className="name">
                  <label>First Name</label>
                  <input type="text" placeholder="" />
                </div>
                <div className="name">
                  <label>Last Name</label>
                  <input type="text" placeholder="" />
                </div>
              </div>
              <div className="input_field">
                <label>Email address</label>
                <input type="email" placeholder="" />
              </div>
              <div className="input_field">
                <label>Password</label>
                <input type="password" placeholder="" />
              </div>
              <div className="input_field">
                <label>Confirm password</label>
                <input type="password" placeholder="" />
              </div>
              <div className="submit_btn">
                <button type="submit">Login</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
