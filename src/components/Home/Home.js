import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import profile from "../../assets/image/profile.png";
import home from "../../assets/image/home_logo.png";
import $ from "jquery";

const Home = () => {
  useEffect(() => {
    var header = document.getElementById("change_nav_active");
    var btns = header.getElementsByClassName("change_active");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
    $(".profile_btn").click(function () {
      $(".profile_data").toggleClass("test");
    });
  }, []);
  return (
    <header>
      <div class="container">
        <div class="nav_bar">
          <div class="nav_component">
            <div class="left_nav">
              <div class="logo">
                <Link>
                  <img src={home} alt="" />
                </Link>
              </div>
              <div class="nav_list">
                <ul id="change_nav_active">
                  <li class="change_active active">
                    <Link>Shipment</Link>
                  </li>
                  <li class="change_active ">
                    <Link>Orders</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="nav_component">
            <div class="right_nav">
              <div class="bell_icon">
                <i class="fas fa-bell"></i>
              </div>
              <div class="profile_btn">
                <i class="fas fa-chevron-down"></i>
                <img src={profile} alt="" />
              </div>
              <div class="profile_data">
                <div class="main">
                  <div class="data">
                    <div class="figure">
                      <figure>
                        <img src={profile} alt="" />
                        <figcaption>
                          <h4>Peter Burn</h4>
                          <small>World Wild Technologies</small>
                        </figcaption>
                      </figure>
                    </div>
                    <div class="links">
                      <Link>Profile</Link>
                    </div>
                    <div class="links">
                      <Link>Company</Link>
                    </div>
                    <div class="links">
                      <Link>Account</Link>
                    </div>
                    <div class="links companies_style">
                      <Link>Companies</Link>
                    </div>
                    <div class="links">
                      <Link to="/login">Logout</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
