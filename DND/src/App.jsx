import { useState } from "react";
import "./App.css";
import { auth } from "./config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [count, setCount] = useState(0);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log(null);
    }
  });

  return (
    <div>
      <div>
        <button
          onClick={() => {
            async function call() {
              const provider = new GoogleAuthProvider();
              const result = await signInWithPopup(auth, provider);
              console.log(result);
            }
            call();
          }}
          style={{ color: "white" }}>
          Sign In
        </button>
        <button
          onClick={() => {
            async function call() {
              await signOut(auth);
              console.log("sign Out");
            }
            call();
          }}
          style={{ color: "white" }}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default App;

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
