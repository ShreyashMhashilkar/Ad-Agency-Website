import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import DashBoard from './Components/DashBoard';
import CreateAd from './Components/CreateAd';
import TextAdForm from './Components/TextAdForm';
import MediaAdForm from './Components/MediaAdForm';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<DashBoard />}></Route>
          <Route path='/create-ad' element={<CreateAd />}></Route>
          <Route path='/text-ad' element={<TextAdForm />}></Route>
          <Route path='/media-ad' element={<MediaAdForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
