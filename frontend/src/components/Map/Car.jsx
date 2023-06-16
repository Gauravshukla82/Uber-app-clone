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
      title: "Uber Luxary",
      multiplier: 1.7,
      image: "https://links.papareact.com/7pf"
    }
  ];
  
  const Car = () => {
    return (
      <div>
        <h1>Select the Ride</h1>
        {data?.map((el) => {
          return (
            <div style={{ display: "flex", margin: "auto" }} key={el.id}>
              <img src={el.image} style={{ width: "150px" }} alt="" />
              <div>
                <h3>{el.title}</h3>
                <p>Time Travel:</p>
                <p>Distance:</p>
              </div>
              <h3 style={{ margin: "auto" }}>₹ {el.multiplier * 100}</h3>
              <button
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
  