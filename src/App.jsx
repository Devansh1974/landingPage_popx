import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Account from "./components/Account";
import Navbar from "./components/Navbar";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="bg-white w-full max-w-md min-h-screen mx-auto flex flex-col shadow-lg">
      <div className="flex-1">{children}</div>
      <Navbar currentPath={location.pathname} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Welcome />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/account"
          element={
            <Layout>
              <Account />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
