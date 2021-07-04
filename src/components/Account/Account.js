import React from "react";
import "./Account.css";
import { Link } from "react-router-dom";
import avatar from "../../assets/image/img_avatar.png";
import $ from "jquery";

const Account = () => {
  function profile_section() {
    console.log("hello");

    $("#profile_section").fadeIn();
    $("#profile_section").css({ visibility: "visible", display: "block" });

    $("#company_section").fadeOut();
    $("#company_section").css({ visibility: "hidden", display: "none" });

    $("#user_account_section").fadeOut();
    $("#user_account_section").css({ visibility: "hidden", display: "none" });

    $("#account_managment_section").fadeOut();
    $("#account_managment_section").css({
      visibility: "hidden",
      display: "none",
    });
  }
  //Function to Hide Popup
  function company_section() {
    console.log("hello");

    $("#company_section").fadeIn();
    $("#company_section").css({ visibility: "visible", display: "block" });

    $("#profile_section").fadeOut();
    $("#profile_section").css({ visibility: "hidden", display: "none" });

    $("#user_account_section").fadeOut();
    $("#user_account_section").css({ visibility: "hidden", display: "none" });

    $("#account_managment_section").fadeOut();
    $("#account_managment_section").css({
      visibility: "hidden",
      display: "none",
    });
  }
  function user_account_section() {
    console.log("hello");

    $("#user_account_section").fadeIn();
    $("#user_account_section").css({
      visibility: "visible",
      display: "block",
    });

    $("#profile_section").fadeOut();
    $("#profile_section").css({ visibility: "hidden", display: "none" });

    $("#company_section").fadeOut();
    $("#company_section").css({ visibility: "hidden", display: "none" });

    $("#account_managment_section").fadeOut();
    $("#account_managment_section").css({
      visibility: "hidden",
      display: "none",
    });
  }
  function account_managment_section() {
    console.log("hello");

    $("#account_managment_section").fadeIn();
    $("#account_managment_section").css({
      visibility: "visible",
      display: "block",
    });

    $("#profile_section").fadeOut();
    $("#profile_section").css({ visibility: "hidden", display: "none" });

    $("#company_section").fadeOut();
    $("#company_section").css({ visibility: "hidden", display: "none" });

    $("#user_account_section").fadeOut();
    $("#user_account_section").css({ visibility: "hidden", display: "none" });
  }

  $(".profile_btn").click(function () {
    $(".profile_data").toggleClass("test");
  });

  $(".operation").click(function () {
    $(".do_operation").toggleClass("show_operation");
  });

  $(".action_btn").click(function () {
    $(".do_action").toggleClass("show_action");
  });

  return (
    <>
      <section class="navigation_section">
        <div class="container">
          <div class="navigation">
            <ul id="navigation_active">
              <li
                class="change_nav_active navigation_active"
                onClick={profile_section()}
              >
                <Link>Profile</Link>
              </li>
              <li class="change_nav_active" onClick={company_section}>
                <Link>Company</Link>
              </li>
              <li class="change_nav_active" onClick={user_account_section}>
                <Link>Account</Link>
              </li>
              <li class="change_nav_active" onClick={account_managment_section}>
                <Link>Companies</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="profile_section" id="profile_section">
        <div class="custom_container">
          <div class="profile_section_data">
            <h2>Profile</h2>
            <form>
              <div class="profile_form">
                <div class="profile_section_one">
                  <figure>
                    <img src={avatar} alt="" />
                    <div class="change_pic">
                      <label>
                        change
                        <input type="file" placeholder="change" />
                      </label>
                    </div>
                  </figure>

                  <div class="profie_name_section">
                    <div class="profile_name">
                      <label>First Name</label>
                      <input type="text" value="Peter" placeholder="" />
                    </div>
                    <div class="profile_name">
                      <label>Last Name</label>
                      <input type="text" value="Burn" placeholder="" />
                    </div>
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name border_bottom">
                    <label>Job title</label>
                    <input
                      type="text"
                      value="Logistings manager"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>Primary phone number</label>
                    <div class="profile_phone">
                      <select>
                        <option>+1</option>
                        <option>+92</option>
                      </select>
                      <input type="text" value="555 333 222" placeholder="" />
                    </div>
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>Secondary phone number</label>
                    <div class="profile_phone">
                      <select>
                        <option>+1</option>
                        <option>+92</option>
                      </select>
                      <input type="text" value="555 333 222" placeholder="" />
                    </div>
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>Primary email</label>
                    <input type="email" value="peter@mail.com" placeholder="" />
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name border_bottom">
                    <label>Secondary email</label>
                    <input type="text" value="burn@mail.com" placeholder="" />
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>Old password</label>
                    <input type="email" value="************" placeholder="" />
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name">
                    <label>New password</label>
                    <input type="text" value="************" placeholder="" />
                  </div>
                </div>
                <div class="profile_section_two">
                  <div class="profile_name border_bottom">
                    <label>Confirm password</label>
                    <input type="text" value="************" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="profile_save_btn">
                <button>Save</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section class="company_section" id="company_section">
        <div class="custom_container">
          <div class="company_section_data">
            <h2>Company Info</h2>
            <form>
              <div class="company_form">
                <div class="company_section_one">
                  <figure>
                    <img src={avatar} alt="" />
                    <div class="change_company_pic">
                      <label>
                        change
                        <input type="file" />
                      </label>
                    </div>
                  </figure>

                  <div class="company_name_section">
                    <div class="company_name">
                      <label>Company name</label>
                      <input
                        type="text"
                        value="World Wide Technology"
                        placeholder=""
                      />
                    </div>
                    <div class="company_name">
                      <label>Company Address</label>
                      <input
                        type="text"
                        value="1911 Adie Road"
                        placeholder=""
                      />
                    </div>
                  </div>
                </div>
                <div class="company_section_two">
                  <div class="company_name company_location">
                    <div class="city">
                      <label>city</label>
                      <input type="text" value="St. Louis" placeholder="" />
                    </div>
                    <div class="state">
                      <label>State</label>
                      <select>
                        <option>Missouri</option>
                      </select>
                    </div>
                    <div class="zipcode">
                      <label>Zip code</label>
                      <input type="number" value="63043" placeholder="" />
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
                      <input type="text" value="555 333 222" placeholder="" />
                    </div>
                  </div>
                </div>

                <div class="company_section_two">
                  <div class="company_name">
                    <label>Company email</label>
                    <input
                      type="email"
                      value="contact@wwt.com"
                      placeholder=""
                    />
                  </div>
                </div>
                <div class="company_section_two">
                  <div class="company_name company_border_bottom">
                    <label>Company website</label>
                    <input type="text" value="contact@wwt.com" placeholder="" />
                  </div>
                </div>
                <div class="company_section_two">
                  <div class="company_name">
                    <label>Primary contact name</label>
                    <input type="text" value="Lewis Fleming" placeholder="" />
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
                      <input type="text" value="555 333 222" placeholder="" />
                    </div>
                  </div>
                </div>
                <div class="company_section_two">
                  <div class="company_name border_bottom">
                    <label>Primary contact job title</label>
                    <input type="text" value="Manager" placeholder="" />
                  </div>
                </div>
              </div>
              <div class="company_save_btn">
                <button>Save</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section class="user_account_section" id="user_account_section">
        <div class="container">
          <div class="user_account">
            <div class="keep_empty"></div>
            <div class="user_account_detail">
              <h4>Users</h4>
              <div class="user_account_detail_nav">
                <div class="search_bar">
                  <form>
                    <input type="search" placeholder="search" />
                    <i class="fas fa-search"></i>
                  </form>
                </div>
                <div class="add_user_btn">
                  <Link to="/new-user">Add new user</Link>
                </div>
              </div>
              <div class="user_account_list">
                <div class="single_user_account">
                  <div class="single_detail">
                    <figure>
                      <img src={avatar} alt="" />
                    </figure>
                    <div class="specific_dtl">
                      <h5>peter burn</h5>
                      <span>aaron@wwt.com</span>
                      <small>Logistings manager</small>
                    </div>
                  </div>

                  <div class="operation">
                    <i class="fas fa-ellipsis-h"></i>
                    <div class="do_operation">
                      <Link>Edit user</Link>
                      <Link>Edit Delete</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="account_managment_section" id="account_managment_section">
        <div class="container">
          <div class="account_managment_nav">
            <form>
              <div class="search_bar">
                <input type="search" placeholder="Search" />
                <i class="fas fa-search"></i>
              </div>
            </form>
            <Link to="/new-company">Add new company</Link>
          </div>
          <div class="account_managment">
            <table>
              <tr class="border_bottom">
                <th>ID</th>
                <th>Company name</th>
                <th>Phone</th>
                <th>Webite</th>
                <th>Address</th>
                <th>Number of devices</th>
                <th>Primary contact</th>
                <th>Contact Phone</th>
                <th>Actions</th>
              </tr>

              <tr>
                <td>4544</td>
                <td>
                  <figure>
                    <img src={avatar} alt="" />
                    <span>World Wide Technology</span>
                  </figure>
                </td>
                <td>+1 988 932 324</td>
                <td>https://wwt.com</td>
                <td>1911 Adie Road, St. Louis, Missouri</td>
                <td>3</td>
                <td>Lewis Fleming</td>
                <td>+1 252 5343 2323</td>
                <td>
                  <div class="action">
                    <i class="fas fa-ellipsis-h action_btn"></i>
                    <div class="do_action">
                      <Link>Edit company</Link>
                      <Link>Edit Account</Link>
                      <Link>Delete</Link>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td>4544</td>
                <td>
                  <figure>
                    <img src={avatar} alt="" />
                    <span>World Wide Technology</span>
                  </figure>
                </td>
                <td>+1 988 932 324</td>
                <td>https://wwt.com</td>
                <td>1911 Adie Road, St. Louis, Missouri</td>
                <td>3</td>
                <td>Lewis Fleming</td>
                <td>+1 252 5343 2323</td>
                <td>
                  <div class="action">
                    <i class="fas fa-ellipsis-h action_btn"></i>
                    <div class="do_action">
                      <Link>Edit company</Link>
                      <Link>Edit Account</Link>
                      <Link>Delete</Link>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
