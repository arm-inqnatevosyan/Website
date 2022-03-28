import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Main1 from './components/Main1';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='body'>
        <Header />
        <Main />
        <Main1 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
