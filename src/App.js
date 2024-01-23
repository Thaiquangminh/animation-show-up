import './App.css';

function App() {
  return (
    <div className="App">
      <div className='box'>
        <nav>
          <img className='logo' src='assets/images/logo.png' alt='' />
          <ul>
            <li>
              <a href='#'>Features</a>
            </li>
            <li>
              <a href='#'>How it works</a>
            </li>
            <li>
              <a href='#'>Privacy</a>
            </li>
          </ul>

          <div>
            <a href='#' className='login-btn'>Log in</a>
            <a href='#' className='btn'>Download App</a>
          </div>
        </nav>

        <div className='content'>
          <h1>Make<br />New Friends</h1>
          <p>Socially is a new social media platform to make new friends online in the world. Now lets explore all its amazing features.</p>
          <button className='btn'>Join Now</button>
        </div>
        <img className='pic' src='assets/images/pic.png' />
      </div>
    </div>
  );
}

export default App;
