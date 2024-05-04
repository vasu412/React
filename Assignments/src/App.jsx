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
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqedDRO18eponcqpXaz0z6lnP334BPxY1RcjGiL8zCmeWUN7mx" alt="" />
          <p>enterprise organizations succssfully launched</p>
        </div>
        <div>
          <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQt7oKJ0QC7feqsN8ZeKFSaDYD1Ctyvfod2g2Mngho-YFFCqwh" alt="" />
          <p>enterprise users onboarded seamlessly</p>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxXfDu1WfzSxNNR20acsMFyCU5wYUUBgqhtKQYotdNQmolQUP" alt="" />
          <p>professionals trained on productand strategy</p>
        </div>
      </div>
    </>
  );
}

export default App;
