import React, { useState } from "react";
import serviceData from './servicesdata'

const Services = () => {
    const [data, setData] = useState(serviceData)
  return (
    <>
      <section className="service_main_container">
        <div className="container service_container">
          <h1 className="main_heading text-center fw-bold">
            How To Send Money
          </h1>
          <div className="row">
            {
                data.map((item) => {
                const {id,logo,title,info} = item;
                    return(
                        <div className="col-11 col-lg-4 col-xxl-4 work_container_subdiv">
                        <i className={logo}></i>
                        <h2 className="sub_heading">
                            {title}
                        </h2>
                        <p className="main_hero_para">
                            {info}
                        </p>
                        </div>
                    )
                })
            }
            </div>
          </div>
      </section>
    </>
  );
};

export default Services;
