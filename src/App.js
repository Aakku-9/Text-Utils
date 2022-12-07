
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';


function App() {
  return (
    <>
<Navbar/>
<div className = "container my-3" >
<TextForms heading="Enter the text you want:"/>
</div>
</>

  );
}

export default App;
