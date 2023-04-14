import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import ErrorPage from './pages/errorPage'
import SignUp from './pages/signup';
import Login from './pages/login';
import Book from './pages/bookPage'
import AddBook from './pages/addBook';
import UpdateBook from './pages/updateBook';


function App() {
  return (

    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <BrowserRouter>
        <div className='logo'><h2>Book Management</h2></div>
        <div className='route'>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='signup' element={<SignUp />} />

            <Route path='login' element={<Login />} />

            <Route path='getBook' element={<Book />} />
            
            <Route path='addBook' element={<AddBook />} />
            
            <Route path='updateBook/:id' element={<UpdateBook />} />

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;