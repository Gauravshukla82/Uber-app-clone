import axios from "axios";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: "123",
    title: "Uber Mini",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "456",
    title: "Uber Max",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "789",
    title: "Uber Luxury",
    multiplier: 1.7,
    image: "https://links.papareact.com/7pf",
  },
];

const Car = ({ distance,origin,destination }) => {
  
  let x = distance.replace(/,/g, "");
  var distanceNumber = parseFloat(distance.replace(/,/g, ""));

  const navigate = useNavigate()

  const handleClick = (el, e) => {
    e.preventDefault();
    let mul = el.multiplier;
    let loggedInUser = JSON.parse(localStorage.getItem("email")) || null;
    let userEmail = loggedInUser.email;
    let userName = JSON.parse(localStorage.getItem("username")) || null;
    const obj = {
       distanceNumber,
      origin,
      destination,
      mul,userEmail,userName
    }
   navigate("/payment")
    localStorage.setItem("userDetails", JSON.stringify(obj))
    // console.log(loggedInUser.email,userName);
    // console.log(el.multiplier * distanceNumber);
  };

  //  const actualDistance = +distance.split(" ")[0];
  console.log(distanceNumber);
  return (
    <div>
      <h5 style={{ marginTop: "30px" }}>Select the Ride</h5>
      {data?.map((el) => {
        return (
          <div style={{ display: "flex", marginTop: "20px" }} key={el.id}>
            <img src={el.image} style={{ width: "70px" }} alt="" />
            <div>
              <h6 style={{ marginTop: "20px" }}>{el.title}</h6>
            </div>
            <p style={{ margin: "auto" }}>
              ₹ {Math.ceil(el.multiplier * distanceNumber)}
            </p>
            <button
              onClick={(e) => handleClick(el, e)}
              style={{
                height: "50px",
                // margin: "auto",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
                fontSize: "14px",
                fontWeight: "600",
                padding: "0px 15px",
              }}
            >
              Ride Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Car;
