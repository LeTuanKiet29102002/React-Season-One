import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "./Nav/Nav";
import HomePage from "./Home/HomaPage";
import { Routes, Route } from "react-router-dom";



// 2 component: class component, function component(function, arrow)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <HomePage /> */}
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/todo" element={<ListTodo/>} />
          <Route path="/about" element={<MyComponent />} />
        </Routes>
      </header>


      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>

  );
}

export default App;
