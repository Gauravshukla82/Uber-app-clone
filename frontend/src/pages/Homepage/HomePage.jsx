import React from "react";
import "./Homepage.css";
import { FiUsers, FiHome } from "react-icons/fi";
import { FaRegNewspaper } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div>
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1583,h_644/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png"
          alt="first"
        />
      </div>
      <br />

      <div className="ridesContainter">
        <h1>Ride with Uber</h1>

        <div className="ridesdiv">
          <div className="divcard">
            <div className="leftcard">
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png"
                alt="auto"
              />
            </div>

            <div className="rightcard">
              <h2>Uber Auto</h2>
              <p>
                Get affordable Uber Auto rides with no haggling. Request Uber
                Auto and ride comfortably around your city.
              </p>
            </div>
          </div>

          <div className="divcard">
            <div className="leftcard">
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png"
                alt="auto"
              />
            </div>

            <div className="rightcard">
              <h2>Uber Moto</h2>
              <p>
                Get affordable bike rides at your doorstep. Skip the crowd and
                zip through traffic with Uber Moto.
              </p>
            </div>
          </div>

          <div className="divcard">
            <div className="leftcard">
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png"
                alt="auto"
              />
            </div>

            <div className="rightcard">
              <h2>Uber Rentals</h2>
              <p>
                Book Rentals to save time with one car and driver for your
                multi-stop trips..
              </p>
            </div>
          </div>

          <div className="divcard">
            <div className="leftcard">
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png"
                alt="auto"
              />
            </div>

            <div className="rightcard">
              <h2>Uber Intercity</h2>
              <p>
                Book Intercity to head outstation anytime in convenient and
                affordable cars.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="safetyContainer">
        <h1>Focused on safety, wherever you go</h1>

        <div className="safetyDiv">
          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
              alt="safety1"
            />
            <h4>Our commitment to your safety</h4>
            <p>
              With every safety feature and every standard in our Community
              Guidelines, we're committed to helping to create a safe
              environment for our users.
            </p>
          </div>

          <div>
            <img
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_558,h_372/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
              alt="safety2"
            />
            <h4>Setting 10,000+ cities in motion</h4>
            <p>
              The app is available in thousands of cities worldwide, so you can
              request a ride even when you’re far from home.
            </p>
          </div>
        </div>
      </div>

      <div className="thirdContainer">
        <div className="thirdsectionDiv">
          <div>
            <FiUsers size={30}></FiUsers>
            <h4>About us</h4>
            <p>
              Find out how we started, what drives us, and how we’re reimagining
              how the world moves.
            </p>
          </div>

          <div>
            <FaRegNewspaper size={30}></FaRegNewspaper>
            <h4>Newsroom</h4>
            <p>
              See announcements about our latest releases, initiatives, and
              partnerships.
            </p>
          </div>

          <div>
            <FiHome size={30}></FiHome>
            <h4>Global citizenship</h4>
            <p>
              Read about our commitment to making a positive impact in the
              cities we serve.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
