import React from "react";
import "./Contact.css";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";

export default function Contact() {
  return (
    <div className="contact-page">
      <Helmet>
        <title>Seed2Sprout • Contact Us</title>
      </Helmet>
      <FadeIn>
        <a href="mailto:silvateam.ye@gmail.com">
          <button className="button-28">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
              >
                <linearGradient
                  id="OxgNZssYtL0kInHUfVnJVa"
                  x1="21.516"
                  x2="45.592"
                  y1="30.362"
                  y2="-5.673"
                  gradientTransform="matrix(1 0 0 -1 0 48)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#28afea" />
                  <stop offset="1" stop-color="#0b88da" />
                </linearGradient>
                <path
                  fill="url(#OxgNZssYtL0kInHUfVnJVa)"
                  d="M9,26l36-14.308V38c0,1.105-0.895,2-2,2H9V26z"
                />
                <linearGradient
                  id="OxgNZssYtL0kInHUfVnJVb"
                  x1="1.408"
                  x2="36.331"
                  y1="23.59"
                  y2="1.836"
                  gradientTransform="matrix(1 0 0 -1 0 48)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#28afea" />
                  <stop offset="1" stop-color="#0b88da" />
                </linearGradient>
                <path
                  fill="url(#OxgNZssYtL0kInHUfVnJVb)"
                  d="M3,11.692V38c0,1.105,0.895,2,2,2h38c0.491,0,0.935-0.184,1.283-0.478L3,11.692z"
                />
                <path
                  d="M3,11h42v1.692l-17.32,13.45c-2.165,1.681-5.195,1.681-7.36,0L3,12.692 V11z"
                  opacity=".05"
                />
                <path
                  d="M3,10.5h42v1.692L26.966,25.304c-1.762,1.304-4.17,1.304-5.932,0 L3,12.192V10.5z"
                  opacity=".07"
                />
                <path
                  fill="#50e6ff"
                  d="M5,8h38c1.105,0,2,0.895,2,2v1.692L26.252,24.466c-1.359,0.926-3.146,0.926-4.504,0L3,11.692V10 C3,8.895,3.895,8,5,8z"
                />
              </svg>
            </div>
            <div className="text">Send us an Email</div>
          </button>
        </a>
      </FadeIn>
    </div>
  );
}
