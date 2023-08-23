import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import RoleList from "./pages/Role/RoleList";
import RoleAdd from "./pages/Role/RoleAdd";
import RoleEdit from "./pages/Role/RoleEdit";
import UserList from "./pages/User/UserList";
import UserAdd from "./pages/User/UserAdd";
import UserEdit from "./pages/User/UserEdit";

function App() {
  return (
    <Router>

        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<RoleList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/add-user" element={<UserAdd />} />
          <Route path="/users/edit-user" element={<UserEdit />} />
          <Route path="/add-role" element={<RoleAdd />} />
          <Route path="/edit-role" element={<RoleEdit />} />
        </Routes>

    </Router>
  );
}
export default App;
