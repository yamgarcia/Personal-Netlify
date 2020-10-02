import React from "react";
import img1 from "../imgs/ComponentTMP_0-image2.jpg";

const Testimonials = () => {
  return (
    <>
      <div id='Testimonial'>
        <div id='bg_bc'>
          <svg class='main_bg'>
            <rect
              id='main_bg'
              rx='0'
              ry='0'
              x='0'
              y='0'
              width='1366'
              height='771'
            ></rect>
          </svg>
          <svg class='bg_be'>
            <rect
              id='bg_be'
              rx='0'
              ry='0'
              x='0'
              y='0'
              width='820'
              height='321.049'
            ></rect>
          </svg>
          <svg class='bg_bf'>
            <rect
              id='bg_bf'
              rx='0'
              ry='0'
              x='0'
              y='0'
              width='775'
              height='362.573'
            ></rect>
          </svg>
        </div>
        <div id='hero_text_bg'>
          <div id='Valuable_Testimonial'>
            <span>Valuable Testimonial</span>
          </div>
          <div id='See_People_Say_About_Me'>
            <span>See People Say About Me</span>
          </div>
        </div>
        <div id='text'>
          <div id='Writing_paragraphs_takes_pract'>
            <span>
              Writing paragraphs takes practice, but what should students write
              about? Good paragraph writing prompts allow students to write
              about what they know and like, so their focus can be on the
              writing process and using the four essential elements.
            </span>
          </div>
          <div id='Jhon_Wick_New_York'>
            <span>Jhon Wick, New York</span>
          </div>
        </div>
        <div id='image'>
          <svg class='Path_151' viewBox='0 0 138 138'>
            <path
              id='Path_151'
              d='M 69 0 C 107.1076507568359 0 138 30.89235305786133 138 69 C 138 107.1076507568359 107.1076507568359 138 69 138 C 30.89235305786133 138 0 107.1076507568359 0 69 C 0 30.89235305786133 30.89235305786133 0 69 0 Z'
            ></path>
          </svg>
          <svg class='Path_147' viewBox='0 0 114 114'>
            <path
              id='Path_147'
              d='M 57 0 C 88.48023223876953 0 114 25.5197696685791 114 57 C 114 88.48023223876953 88.48023223876953 114 57 114 C 25.5197696685791 114 0 88.48023223876953 0 57 C 0 25.5197696685791 25.5197696685791 0 57 0 Z'
            ></path>
          </svg>
          <img id='Mask_Group_1' src={img1} alt='Mask-g-1' />
        </div>
        <div id='slider_dut'>
          <svg class='slider_dot'>
            <ellipse
              id='slider_dot'
              rx='6.5'
              ry='6.5'
              cx='6.5'
              cy='6.5'
            ></ellipse>
          </svg>
          <svg class='slider_dot_bs'>
            <ellipse
              id='slider_dot_bs'
              rx='5.5'
              ry='5.5'
              cx='5.5'
              cy='5.5'
            ></ellipse>
          </svg>
          <svg class='slider_dut_bt' viewBox='0 0 11 11'>
            <path
              id='slider_dut_bt'
              d='M 5.5 0 C 8.537566184997559 0 11 2.462434053421021 11 5.5 C 11 8.537566184997559 8.537566184997559 11 5.5 11 C 2.462434053421021 11 0 8.537566184997559 0 5.5 C 0 2.462434053421021 2.462434053421021 0 5.5 0 Z'
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
