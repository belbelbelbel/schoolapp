import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Provider/Router';
import { Usecontext } from './Provider/Usecontext';
import { Footer } from './pages/components/Footer';
import Cookies from 'js-cookie';
import useWindowSize from './Hooks/useWindowSize';
import { useInternetStatus } from './Hooks/useInternetStatus';
import toast, { Toaster } from 'react-hot-toast';
import noInternet from 'no-internet'
function App() {
  const { width } = useWindowSize();

  if (width > 700) {
    return (
      <div className="App bg-black flex justify-center items-center text-white h-screen w-screen text-[1.5rem]">
        <h1 style={{ textAlign: 'center' }}>
          Please use your mobile phone for better experience.
        </h1>
      </div>
    );
  }


  return (
    <div className="App">
      <Toaster />
      {/* <NavBar/> */}
      <Usecontext>
        <Router />
      </Usecontext>
    </div>
  );
}

export default App;



