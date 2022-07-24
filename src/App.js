import "./CSS/App.css"
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Header from "./Components/Header+Footer/Header"
import Footer from "./Components/Header+Footer/Footer"
import About from "./pages/About";
import Clubs from "./pages/Clubs"; 
import SignUp_new from "./pages/SignUp_new"; 

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <About/> */}
      <SignUp_new/>
      <Footer/>
    </div>
  );
}

export default App;
