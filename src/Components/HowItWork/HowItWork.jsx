import React, { useState } from "react";
import workapi from "./howitworkdata";

const HowItWork = () => {
  const [workData, ] = useState(workapi);
  return (
    <div>
      <div className="work_container container">
        <h1 className="main_heading text-center">How does it work</h1>
        <div className="row">
          {workData.map((item) => {
            const { id, logo, title, info } = item;
            return (
                <div key={id} className="col-12 col-lg-4 text-center work_container_subdiv">
                  <i className={`${logo}`}></i>
                  <h2 className="sub_heading">{title}</h2>
                  <p className="main_hero_para w-100">{info}</p>
                </div>
             
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
