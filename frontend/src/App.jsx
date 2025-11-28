import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/LoginPage";
/*import LoginPage from "./views/LoginPage";*/

import Navbar from "./views/Navbar";
import Todo from "./views/Todo"; 

/*import Dashboard from "./views/Dashboard"; // example private page
import PrivateRoute from "./utils/PrivateRoute";*/

function App() {
  return (
    <AuthProvider>
    <Navbar/>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/todo" element={<Todo />} />
        
        
      </Routes>
    </AuthProvider>
  );
}

export default App;
