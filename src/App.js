import './App.css';
import BucketListContainer from './container/BucketListContainer';
import Navbar from './components/Navbar';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Filter/>
      <BucketListContainer/>
    </div>
  );
}

export default App;