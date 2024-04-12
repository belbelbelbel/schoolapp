import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './Provider/Router';
import { Usecontext } from './Provider/Usecontext';
function App() {
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
