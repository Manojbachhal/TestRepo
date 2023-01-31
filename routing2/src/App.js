import './App.css';
import Navbar from './Component/Navbar';
import AllRoutes from './Routes/AllRoutes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
  
<BrowserRouter>
     <Navbar/>
     <AllRoutes/>
     </BrowserRouter> 

    </div>
  );
}

export default App;
