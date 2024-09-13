import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Provider/Router';
import { Usecontext } from './Provider/Usecontext';
import { Footer } from './Routes/Footer';
import Cookies from 'js-cookie';
function App() {
  const token = Cookies.get('token')
  return (
    <div className="App">
      {/* <NavBar/> */}
        <Usecontext>
          <Router />
        </Usecontext>
    </div>
  );
}

export default App;
