import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Components';
import { Blog, Home, Work } from './Pages';
import { Footer } from './Section';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/work' element={<Work/>} />
            <Route path='/blog' element={<Blog/>} />
          </Routes>
        <Footer />
      </Router> 
    </>
  );
}

export default App;
