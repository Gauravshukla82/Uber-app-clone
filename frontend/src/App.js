import Footer from "./components/Footer/Footer";
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
      <Footer/>

    </div>
  );
}

export default App;
