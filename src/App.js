
import './App.css';
import Category from './components/Category';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="">
       <div className='bg-slate-800 min-h-screen'>
        <Navbar/>
        <div className="container max-w-screen-sm mx-auto p-4">
        <Category/>
        </div>
       </div>
    </div>
  );
}

export default App;
