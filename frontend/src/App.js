import './App.css';

import EntryPage from './components/LandingPage';
import EntryNavBar from './components/NewNavbar'
import { Footer } from './components/footer';

function App() {
  
  return (
    <div className="App">
     <EntryNavBar /> 
    <EntryPage />
    <Footer />
    
    </div>
    
  );
}

export default App;
