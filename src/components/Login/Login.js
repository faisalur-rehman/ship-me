import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/image/Logo.png";
import "./Login.css";

const Login = () => {
  return (
    <section class="login_section">
      <div class="login_container">
        <Link>
          <img src={icon} alt="" />
        </Link>
        <div class="login_form">
          <h3>Log In</h3>
          <form>
            <div class="login_fields">
              <div class="input_field">
                <label>Email address</label>
                <input type="email" placeholder="" />
              </div>
              <div class="input_field">
                <label>Password</label>
                <input type="password" placeholder="" />
              </div>
              <div class="submit_btn">
                <button type="submit">Login</button>
              </div>
              <div class="remember_me">
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
