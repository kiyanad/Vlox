import React from 'react';
import '../CSS/Main.css';
import '../CSS/Nav.css';
import playerjs from "player.js"
import ReactDOM from 'react-dom';
import VisibilitySensor from 'react-visibility-sensor';
import Post from "./Post"
import bodymovin from "bodymovin"






class Main extends React.Component {

componentDidMount(){
  var animData = {
  wrapper: document.querySelector('#animationWindow'),
  animType: 'svg',
  loop: true,
  prerender: true,
  autoplay: true,
  path: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/35984/camera.json'
};
var anim = bodymovin.loadAnimation(animData);
anim.setSpeed(.7);
debugger


}

render(){
const  play = ['a','b','c','d','e','f','g',"h","i","j","k"].map(a => <Post />)
  return (
    <div className = "mainPage">
      <nav className ="navbar">
        <div className = "vlog">
        <div className = "logo">
        <p className = "stick"> |    </p>
          <p className ="title">    VloX</p><p className="min-title"> oxo </p>
          </div>
          <div id="animationWindow"/>
          <div className="animation-circle" />
          <div id="circle2" />

          <div className="setting"> <img className="think" src="http://www.clker.com/cliparts/w/s/e/l/i/L/cloud-no-back-ground-md.png"/> <p className="setting-name">KD</p> </div>
        </div>
      </nav>
      <div className = "sideBar">
      <div className = "choiceContainer">
      <h2 className ="choice">
      Top
      </h2>
      </div>
      <div className = "choiceContainer">
      <h2 className ="choice">
      Discover
      </h2>
      </div>
      <div className = "choiceContainer">
      <h2 className ="choice">
      Todays Prompts
      </h2>
      </div>
      <div className = "choiceContainer">
      <h2 className ="choice">

      </h2>
      </div>
      <div className = "choiceContainer">
      <h2 className ="choice">
      </h2>
      </div>
      </div>
      <div className="white"/>
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
