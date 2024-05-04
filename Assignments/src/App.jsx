import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Hootsuite_logo.png" alt="" />
          <span>Platform</span>
          <span>Plans</span>
          <span>Enterprise</span>
          <span>Resources</span>
          <span>Education</span>
        </div>
        <div className="sign">
          <span>Contact Us</span>
          <span>LogIn</span>
          <button style={{color:"white"}}>Sign Up</button>
        </div>
      </nav>

      <main>
        <div>
          <h1>See value from social sooner</h1>
          <p>out training and strategic services have helped thousands of organizations succeedon social</p>
          <button style={{width:"150px",height:"45px"}}>Request a Demo</button>
        </div>
      </main>

      <div className="cards">
        <div>
          <img src="./src/1.png" alt="" />
          <p>enterprise organizations succssfully launched</p>
        </div>
        <div>
          <img src="./src/2.png" alt="" />
          <p>enterprise users onboarded seamlessly</p>
        </div>
        <div>
          <img src="./src/3.png" alt="" />
          <p>professionals trained on productand strategy</p>
        </div>
      </div>
    </>
  );
}

export default App;
