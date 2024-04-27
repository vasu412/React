import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <h1>Topics Covered</h1>
    <p>
    The following is a list of all the topics we cover in the MDN learning area.
    <br />
    <br />
    <a href="">Getting started with the web</a><br /><br />
    <span class='span'></span>Provides a practical introduction to web development for complete beginners.
    <br />
    <br />
    <a href="">HTML — Structuring the web</a>
    <br />
    <br />
    <span className='span'></span>
    HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.
    <br />
    <br />
    <a href="">CSS — Styling the web</a>
    <br />
    <br />
    <span className="span"></span>
    CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.
    </p>
    </>
  )
}

export default App
