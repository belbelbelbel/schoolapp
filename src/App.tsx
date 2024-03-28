import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Provider/Router';
import { Usecontext } from './Provider/Usecontext';
function App() {
  const myStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "Screenshot 2023-10-27 at 02.05.45.jpeg"})`,
  };
  return (
    <div className="App" style={myStyle}>
      {/* <NavBar/> */}
        <Usecontext>
          <Router />
        </Usecontext>
    </div>
  );
}

export default App;
