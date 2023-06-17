const data = [
    {
      id: "123",
      title: "Uber Mini",
      multiplier: 1,
      image: "https://links.papareact.com/3pn"
    },
    {
      id: "456",
      title: "Uber Max",
      multiplier: 1.2,
      image: "https://links.papareact.com/5w8"
    },
    {
      id: "789",
      title: "Uber Luxury",
      multiplier: 1.7,
      image: "https://links.papareact.com/7pf"
    }
  ];
  
const Car = () => {
  const handleClick = (e) => {
    e.preventDefault();
    }
    return (
      <div>
        <h5 style={{marginTop:"30px"}}>Select the Ride</h5>
        {data?.map((el) => {
          return (
            <div style={{ display: "flex", marginTop: "20px" }} key={el.id}>
              <img src={el.image} style={{ width: "70px" }} alt="" />
              <div>
                <h6 style={{marginBottom:"2px"}}>{el.title}</h6>
                <p style={{marginBottom:"2px"}}>Time Travel:</p>
                <p style={{marginBottom:"2px"}}>Distance:</p>
              </div>
              <p style={{ margin: "auto" }}>₹ {el.multiplier * 100}</p>
              <button
                onClick={handleClick}
                style={{
                  height: "50px",
                  margin: "auto",
                  borderRadius: "10px",
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: "bolder"
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
  