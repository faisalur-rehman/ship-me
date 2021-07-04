import React from "react";
import "./NewCompany.css";
import avatar from "../../assets/image/img_avatar.png";
import { Link } from "react-router-dom";

const NewCompany = () => {
  return (
    <section class="new_company_section">
      <div class="custom_container">
        <div class="new_company_data">
          <div class="new_company_head">
            <h2>New Company</h2>
            <Link to="/account">
              <i class="fas fa-times"></i>
            </Link>
          </div>
          <form>
            <div class="new_company_form">
              <div class="company_section_one">
                <figure>
                  <img src={avatar} alt="" />
                  <div class="change_new_company_pic">
                    <label>
                      change
                      <input type="file" />
                    </label>
                  </div>
                </figure>

                <div class="company_name_section">
                  <div class="company_name">
                    <label>Company name</label>
                    <input type="text" value="" placeholder="" />
                  </div>
                  <div class="company_name">
                    <label>Company Address</label>
                    <input type="text" value="" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="company_section_two">
                <div class="company_name company_location">
                  <div class="city">
                    <label>city</label>
                    <input type="text" value="" placeholder="" />
                  </div>
                  <div class="state">
                    <label>State</label>
                    <select>
                      <option>Missouri</option>
                    </select>
                  </div>
                  <div class="zipcode">
                    <label>Zip code</label>
                    <input type="number" value="" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="company_section_two">
                <div class="company_name">
                  <label>Company phone</label>
                  <div class="company_phone">
                    <select>
                      <option>+1</option>
                      <option>+92</option>
                    </select>
                    <input type="text" value="" placeholder="" />
                  </div>
                </div>
              </div>

              <div class="company_section_two">
                <div class="company_name">
                  <label>Company email</label>
                  <input type="email" value="" placeholder="" />
                </div>
              </div>
              <div class="company_section_two">
                <div class="company_name company_border_bottom">
                  <label>Company website</label>
                  <input type="text" value="" placeholder="" />
                </div>
              </div>
              <div class="company_section_two">
                <div class="company_name">
                  <label>Primary contact name</label>
                  <input type="text" value="" placeholder="" />
                </div>
              </div>
              <div class="company_section_two">
                <div class="company_name">
                  <label>Primary contact phone</label>
                  <div class="company_phone">
                    <select>
                      <option>+1</option>
                      <option>+92</option>
                    </select>
                    <input type="text" value="" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="company_section_two">
                <div class="company_name border_bottom">
                  <label>Primary contact job title</label>
                  <input type="text" value="" placeholder="" />
                </div>
              </div>
            </div>
            <div class="company_save_btn">
              <Link to="/account">cancle</Link>
              <button>create</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewCompany;
