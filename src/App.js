import './App.css';
import Header from './Components/Header/Header.js';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';
import TinderCards from './Components/TinderCards/TinderCards';

function App() {
  return (
    //BEM class naming convention
    <div className="App">
      {/* Header */}
      <Header />

      {/* Tinder cards */}
      <TinderCards />

      {/* Swipebutons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
