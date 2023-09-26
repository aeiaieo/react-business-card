import Heading from './components/Heading.js'
import Footer from './components/Footer.js'
import Main from './components/Main.js'
import Headshot from './components/Headshot.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Headshot />
      <div className="Content-container">
        <Heading />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
