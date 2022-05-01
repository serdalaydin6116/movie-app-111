
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import AppRouter from './router/AppRouter';


function App(){
  const notify = () => toast("Wow so easy!");

  return (
      <div>
        <h2>Self Study</h2>
        <AppRouter />
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }

export default App;
