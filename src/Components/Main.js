import React from 'react';
import '../CSS/Main.css';
import playerjs from "player.js"
import ReactDOM from 'react-dom';
import VisibilitySensor from 'react-visibility-sensor';
import Post from "./Post"






class Main extends React.Component {


render(){
const  play = ['a','b','c','d','e','f','g',"h","i","j","k"].map(a => <Post />)
  return (
    <div className = "mainPage">
      <nav className ="navbar">
        <div className = "vlog">
        <p className = "stick"> |    </p>
          <p className ="title">    VloX</p>
        </div>
      </nav>
      <div className ="postsContainer">
        <div className = "posts">
        {play}
        </div>
      </div>
    </div>
  );
}
}

export default Main;

// <div className = "post">
//   <div className = "cloud">
//     <div className = "videoContainer">
// <iframe onEnterViewport= {(e) => {this.view(e,"c").bind(this)}} className="iframe" width="560" height="315" src="https://www.youtube.com/embed/6lrCnD7Zw9o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              </div>
//   </div>
//
//
//
// </div>
// <div className = "post">
//   <div className = "cloud">
//     <div className = "videoContainer">
// <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/6lrCnD7Zw9o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              </div>
//   </div>
//
//
//
// </div>
// <div className = "post">
//   <div className = "cloud">
//     <div className = "videoContainer">
// <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/6lrCnD7Zw9o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              </div>
//   </div>
//
//
//
// </div>
// <div className = "post">
//   <div className = "cloud">
//     <div className = "videoContainer">
//     <VisibilitySensor onChange={this.view.bind(this)}>
//
// <iframe           ref={this.handleRef} className="iframe" width="560" height="315" src="https://www.youtube.com/embed/6lrCnD7Zw9o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
// </VisibilitySensor>
//
// </div>
//
//   </div>
//
//
//
// </div>
// <div className = "post">
//   <div className = "cloud">
//     <div className = "videoContainer">
// <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/6lrCnD7Zw9o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              </div>
//   </div>
//
//
//
// </div>
// <div className = "post">
//   <div className = "cloud">
//     <div className = "videoContainer">
// <iframe className="iframe" width="560" height="315" src="https://www.youtube.com/embed/6lrCnD7Zw9o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              </div>
//   </div>
//
//
//
// </div>