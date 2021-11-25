import './App.css';
import BucketListContainer from './container/BucketListContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BucketListContainer/>
    </div>
  );
}

export default App;