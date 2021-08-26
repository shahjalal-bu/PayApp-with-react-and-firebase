import React, { useState } from "react";
import aboutData from "./aboutdata";

const AboutUs = () => {
  const [about] = useState(aboutData);
  return (
    <>
      <AboutUsItem
        data={about}
        imgAlign={"text-center"}
       miniTitle={"-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY"}
        imgName={"hero3"}
        mainHeading={'How to use the App?'}
      />

      <div className="bottom_part">
        <AboutUsItem data={about} addClass={"flex-row-reverse"} miniTitle={"-- SUPPORT IN ANY LANGUAGES"}
      imgName={"callcenter"}
      mainHeading={<>World class support is <br />  available 24/7</>}
        />
      </div>
    </>
  );
};

export default AboutUs;

export const AboutUsItem = ({ data, addClass, imgAlign, miniTitle, imgName,mainHeading }) => {
  return (
    <>
      <div>
        <div className="common-section our_services">
          <div className="container mb-5 mt-5">
            <div className={`row ${addClass}`}>
              <div
                className={`col-12 col-lg-5  ${imgAlign} our_service_left`}
              >
                <img src={`./images/${imgName}.jpg`} alt={`${imgName}`} />
              </div>
              <div className="col-12 col-lg-7 our_service_list">
                <h3 className="mini_title"> {miniTitle}</h3>
                <h1 className="main_heading">{mainHeading}</h1>
                {data.map((item) => {
                  const { id, title, info } = item;
                  return (
                    <>
                      <div className="row our_services_info">
                        <div className="col-1 our_services_number">{id}</div>
                        <div className="col-10 our_services_data">
                          <h2>{title}</h2>
                          <p className="main_hero_para">{info}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
                <br />
                <button className="btn_style btn_style_border btn">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
