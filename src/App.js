import './App.css';
import Navigation from './components/navigation/Navigation';
import Routing from './components/partials/Routing';
import Footer from './components/navigation/footer/Footer';
import Header from './components/navigation/header/Header';

function App() {
  return (<div className="app-container">
    <Header />
<Navigation />
<Routing/>
<Footer/>
</div>
  );
}

export default App;
