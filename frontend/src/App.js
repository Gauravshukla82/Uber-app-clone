import Navigation from "./components/Navigation";
import MainRoutesPage from "./pages/MainRoutesPage";
import RidesbookingPage from "./pages/RidesbookingPage/RidesbookingPage";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';  
function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <MainRoutesPage/>
      {/* <h1>Welcome page</h1> */}
      {/* <RidesbookingPage/> */}
    </div>
  );
}

export default App;
