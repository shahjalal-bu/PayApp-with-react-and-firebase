import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });
  const handleForm = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  //for firebase

  const sumbitData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    if(firstName && lastName && phone && email && address && message){
      const res = fetch(
        "https://pay-app-shahjalal-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          Headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        alert("Your Respond Sent");
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
      } else {
        alert("Please fill the data");
      }
    }
    else {
      alert("Please fill the data");
    }
    
  };
  return (
    <>
      <section className="contactus_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto"></div>
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact_left col-12 col-lg-5">
                  <h1 className="main_heading fw-bold">
                    Connect With Us <br /> Sales Team.
                  </h1>
                  <p className="main_hero_para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem quam voluptatibus odio.
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="contact us"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="contact_right col-12 col-lg-7">
                  <form action="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact_input_field">
                        <input
                          type="text"
                          name="firstName"
                          id=""
                          className="form-control"
                          value={userData.firstName}
                          onChange={handleForm}
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact_input_field">
                        <input
                          type="text"
                          name="lastName"
                          className="form-control"
                          id=""
                          value={userData.lastName}
                          onChange={handleForm}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact_input_field">
                        <input
                          type="number"
                          name="phone"
                          id=""
                          className="form-control"
                          value={userData.phone}
                          onChange={handleForm}
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact_input_felid">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id=""
                          value={userData.email}
                          onChange={handleForm}
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="row contact_input_field">
                      <div className="col-12">
                        <input
                          type="email"
                          name="address"
                          className="form-control"
                          id=""
                          value={userData.address}
                          onChange={handleForm}
                          placeholder="Add Address"
                        />
                      </div>
                    </div>

                    <div className="row contact_input_field">
                      <div className="col-12">
                        <input
                          type="email"
                          name="message"
                          className="form-control"
                          id=""
                          value={userData.message}
                          onChange={handleForm}
                          placeholder="Enter Your Message"
                        />
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckChecked"
                        />
                        <label className="form-check-label main_hero_para">
                          I agree that the thapatechnicalpay may contact me at
                          the email address or phone number above
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn_style w-100"
                      onClick={sumbitData}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
