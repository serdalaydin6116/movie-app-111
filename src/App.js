
import './App.css';
import { ToastContainer, toast } from 'react-toastify';


function App(){
  const notify = () => toast("Wow so easy!");

  return (
      <div>
        <h2>Self Study</h2>
        <br /><br />
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }

export default App;
