import Heading from './components/Heading.js'
import Footer from './components/Footer.js'
import Main from './components/Main.js'
import Headshot from './components/Headshot.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Headshot />
      <Heading />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
