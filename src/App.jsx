import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import AppRouter from "./Router/AppRouter";
// import { ResumeProvider } from "./Hooks/UserDataState";

function App() {
  return (
    <div className="App">
   
      <AppRouter />
    
      

      <ToastContainer 
       className="mt-12"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
