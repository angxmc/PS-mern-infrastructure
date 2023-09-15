import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewOderPage from "./pages/NewOrderPage";
import AuthPage from "./pages/AuthPage";
import NavBar from "./components/NavBar";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import { getUser } from "./utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());
  console.log(user);
  return (
    <main className="App">
      {/* this checks if there's a user, if not, will be guided to AuthPage */}
      {user ? (
        <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path="/orders/new" element={<NewOderPage />} />
          <Route path="/orders" element={<OrderHistoryPage/>}/>
        </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser}/>
      )}
    </main>
  );
}

export default App;
