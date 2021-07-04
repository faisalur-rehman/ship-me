import React from "react";
import "./NewUser.css";
import { Link } from "react-router-dom";
import avatar from "../../assets/image/img_avatar.png";

const NewUser = () => {
  return (
    <section class="create_new_user">
      <div class="custom_container">
        <div class="new_user_data">
          <div class="new_user_head">
            <h2>New User</h2>
            <Link>
              <i class="fas fa-times"></i>
            </Link>
          </div>
          <form>
            <div class="new_user_form">
              <div class="new_user_section_one">
                <figure>
                  <img src={avatar} alt="" />
                  <div class="change_new_user_pic">
                    <label>
                      change
                      <input type="file" />
                    </label>
                  </div>
                </figure>
                <div class="new_user_name_section">
                  <div class="new_user_name">
                    <label>First Name</label>
                    <input type="text" value="" placeholder="" />
                  </div>
                  <div class="new_user_name">
                    <label>Last Name</label>
                    <input type="text" value="" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="new_user_section_two">
                <div class="new_user_fields">
                  <label>Job title(Optional)</label>
                  <input type="text" value="" placeholder="ex. CEO" />
                </div>
              </div>
              <div class="new_user_section_two">
                <div class="new_user_fields">
                  <label>Email</label>
                  <input type="email" value="" placeholder="" />
                </div>
              </div>
              <div class="new_user_section_two">
                <div class="new_user_fields">
                  <label>Phone</label>
                  <div class="new_user_phone">
                    <select>
                      <option>+1</option>
                      <option>+92</option>
                    </select>
                    <input type="number" value="" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="new_user_section_two">
                <div class="new_user_fields">
                  <label>User Type</label>
                  <select>
                    <option>admin</option>
                  </select>
                </div>
              </div>

              <div class="new_user_section_two">
                <div class="new_user_password border_bottom">
                  <div class="new_user_fields">
                    <label>password</label>
                    <input type="password" value="" placeholder="" />
                  </div>
                  <div class="new_user_fields">
                    <label>confirm password</label>
                    <input type="password" value="" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="new_user_btn">
              <Link to="/account">cancle</Link>
              <button>create</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewUser;
