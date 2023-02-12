import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <h1>Click the burger menu to see the magic.</h1>
      <input type="checkbox" id="burger-toggle" />
      <label for="burger-toggle" class="burger-menu">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </label>
      <div class="menu">
        <div class="menu-inner">
          <ul class="menu-nav">
            <li class="menu-nav-item">
              <a class="menu-nav-link" href="#">
                <span>
                  <div>Home</div>
                </span>
              </a>
            </li>
            <li class="menu-nav-item">
              <a class="menu-nav-link" href="#">
                <span>
                  <div>About</div>
                </span>
              </a>
            </li>
            <li class="menu-nav-item">
              <a class="menu-nav-link" href="#">
                <span>
                  <div>Service</div>
                </span>
              </a>
            </li>
            <li class="menu-nav-item">
              <a class="menu-nav-link" href="#">
                <span>
                  <div>Team</div>
                </span>
              </a>
            </li>
          </ul>
          <div class="gallery">
            <div class="title">
              <p>Sora Gallery</p>
            </div>
            <div class="images">
              <a class="image-link" href="#">
                <div class="image" data-label="Star">
                  <img
                    src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg"
                    alt=""
                  />
                </div>
              </a>
              <a class="image-link" href="#">
                <div class="image" data-label="Sun">
                  <img
                    src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg"
                    alt=""
                  />
                </div>
              </a>
              <a class="image-link" href="#">
                <div class="image" data-label="Tree">
                  <img
                    src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg"
                    alt=""
                  />
                </div>
              </a>
              <a class="image-link" href="#">
                <div class="image" data-label="Sky">
                  <img
                    src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
