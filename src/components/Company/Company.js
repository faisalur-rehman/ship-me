import React from "react";
import "./Company.css";
import logo from "../../assets/image/Logo.png";
import { Link } from "react-router-dom";
const Company = () => {
  return (
    <section class="company_section">
      <div class="company_container">
        <Link>
          <img src={logo} alt="" />
        </Link>
        <div class="company_form">
          <h3>Companies</h3>
          <form>
            <div class="company_fields">
              <div class="input_field">
                <select>
                  <option disabled selected>
                    choose your company
                  </option>
                </select>
              </div>

              <div class="submit_btn">
                <button type="submit">Enter</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Company;
