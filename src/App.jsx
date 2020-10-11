import React from 'react';
//import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BasicTextFields from './components/TextFeilds'

//we can create mutiple function/class conpoment in a single file
//jo bhi component ka nm hoga uska first letter will always be capital
//wrna wo  html m as a tage lega islye hamesha hamesha capital rkhna h
//ab yeh aise call hoga kahi bhi like self closing component
// <Header />


class App extends React.Component {
  render() {

    return (

      <div>
 <Header />
<h1 style={{ fontSize:"bold" }}>Main Component</h1>
        <h1>Hello </h1>
        <button type="button" className="btn btn-primary">Primary</button>
       <BasicTextFields />
      

        <Footer />
      </div>
    )
  }
}




/*kk888888888888889'\\\\\\\


function App(){
   return(
    <div>
    <h1>Hello world</h1>
    </div>
   )
}*/
//humne 3 component banaye h 
//m chahti ho k m component k lye alaag se koi file use karo or m daldo 
//mean ek folder m are component
export default App; ///pore file se ek hi class export hogi isse


