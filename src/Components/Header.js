import React from "react";
import img1 from "../imgs/ComponentTMP_0-image4.jpg";

const Header = () => {
  return (
    <>
      <div id='HEADER'>
        <div id='BACKGROUND_dj'>
          <svg class='BG_dk'>
            <rect
              id='BG_dk'
              rx='0'
              ry='0'
              x='0'
              y='0'
              width='450'
              height='829'
            ></rect>
          </svg>
          <svg class='BG_dl'>
            <rect
              id='BG_dl'
              rx='0'
              ry='0'
              x='0'
              y='0'
              width='685'
              height='729'
            ></rect>
          </svg>
          <svg class='BG_dm' viewBox='0 0 944.201 870.734'>
            <path
              id='BG_dm'
              d='M 0 0 L 944.20068359375 0 L 944.20068359375 870.7340087890625 L 0 870.7340087890625 L 0 0 Z'
            ></path>
          </svg>
        </div>
        <div id='IMAGE_dn'>
          <div id='Group_1_do'>
            <svg class='Path_8' viewBox='0 0 513.286 513.286'>
              <path
                id='Path_8'
                d='M 256.64306640625 0 C 398.3831176757813 0 513.2861328125 114.9030303955078 513.2861328125 256.64306640625 C 513.2861328125 398.3831176757813 398.3831176757813 513.2861328125 256.64306640625 513.2861328125 C 114.9030303955078 513.2861328125 0 398.3831176757813 0 256.64306640625 C 0 114.9030303955078 114.9030303955078 0 256.64306640625 0 Z'
              ></path>
            </svg>
            <svg class='Path_5_dq' viewBox='0 0 495.104 495.104'>
              <path
                id='Path_5_dq'
                d='M 247.5521697998047 0 C 384.2714538574219 0 495.1043395996094 110.8328857421875 495.1043395996094 247.5521697998047 C 495.1043395996094 384.2714538574219 384.2714538574219 495.1043395996094 247.5521697998047 495.1043395996094 C 110.8328857421875 495.1043395996094 0 384.2714538574219 0 247.5521697998047 C 0 110.8328857421875 110.8328857421875 0 247.5521697998047 0 Z'
              ></path>
            </svg>
          </div>
          <div id='IMAGE_AND_TEXT'>
            <div id='IMAGE_ds'>
              <svg class='Path_2' viewBox='0 0 352 352'>
                <path
                  id='Path_2'
                  d='M 176 0 C 273.2021179199219 0 352 78.79788970947266 352 176 C 352 273.2021179199219 273.2021179199219 352 176 352 C 78.79788970947266 352 0 273.2021179199219 0 176 C 0 78.79788970947266 78.79788970947266 0 176 0 Z'
                ></path>
              </svg>
              <img id='Mask_Group_1_dv' src={img1} alt='mask' />
              <svg class='Path_3' viewBox='0 0 405.286 405.286'>
                <path
                  id='Path_3'
                  d='M 202.64306640625 0 C 314.5597229003906 0 405.2861328125 90.72639465332031 405.2861328125 202.64306640625 C 405.2861328125 314.5597229003906 314.5597229003906 405.2861328125 202.64306640625 405.2861328125 C 90.72639465332031 405.2861328125 0 314.5597229003906 0 202.64306640625 C 0 90.72639465332031 90.72639465332031 0 202.64306640625 0 Z'
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div id='TEXT_dw'>
          <svg class='Rectangle_5'>
            <rect
              id='Rectangle_5'
              rx='0'
              ry='0'
              x='0'
              y='0'
              width='290'
              height='14'
            ></rect>
          </svg>
          <div id='MY_WORK'>
            <span>MY</span>
            <span style={{ color: "rgba(117, 78, 249, 1)" }}> WORK</span>
          </div>
          <div id='Web__visual_Designer'>
            <span>Web & visual Designer</span>
          </div>
          <svg class='Path_4' viewBox='-0.136 0 17.469 13.984'>
            <path
              id='Path_4'
              d='M -0.07370001822710037 0 L 17.33171653747559 0 C 17.33171653747559 0 16.81599044799805 3.375 16.81599044799805 6.875 C 16.81599044799805 10.375 17.33300971984863 13.984375 17.33300971984863 13.984375 L -0.1357421875 13.984375 L -0.07370001822710037 0 Z'
            ></path>
          </svg>
        </div>
        <div id='LOGO'>
          <div id='Portfolio_d'>
            <span>Portfolio</span>
          </div>
        </div>
        <div id='MENU_TEXT'>
          <div id='ABOUT_ME'>
            <span>ABOUT ME</span>
          </div>
          <div id='PORTFOLIO'>
            <span>PORTFOLIO</span>
          </div>
          <div id='BUTTON_d'>
            <div id='BUTTON_ea'>
              <svg class='BUTTON_eb'>
                <rect
                  id='BUTTON_eb'
                  rx='23.5'
                  ry='23.5'
                  x='0'
                  y='0'
                  width='202'
                  height='47'
                ></rect>
              </svg>
              <div id='DOWNLOAD_CV'>
                <span>DOWNLOAD CV</span>
              </div>
            </div>
          </div>
        </div>
        <div id='BE_CREATIVE'>
          <span>BE CREATIVE</span>
        </div>
      </div>
    </>
  );
};

export default Header;
