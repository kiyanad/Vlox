import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import YouTube from 'react-youtube';
import shock from "../Img/shock.png"
import snap from "../Img/snap.png"




class Post extends React.Component {

 myFunction = (e) => {
   debugger
   if(e.target.classList.contains("snap") !== true){
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  }
  myFunction2 = (e) => {
    debugger
     var popup2 = document.getElementById("myPopup2");
     popup2.classList.toggle("show");
   }

  playVid = () => {
    var vid = document.getElementById("iframe");
    // debugger

  }

  render(){

    const opts = {
      height: '265',
      width: '420',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }

      return (
        <div className = "post">
        <h1 className="user">@KiyanaDunlock says...</h1>
          <div >
            <div className = "videoContainer">
            <VisibilitySensor onChange={this.view}>
            <YouTube id="y"
              videoId="2g811Eo7K8U"
              opts={opts}
              onReady={this._onReady}
            />

            </VisibilitySensor>
            <div className = "videoOverlay" />

        </div>

          </div>
          <div class="popup" onClick={(e)=>{this.myFunction(e)}}>
          <img className = "reaction" src={shock} />
  <span class="popuptext" id="myPopup">
  <img className = "reaction snap" src={snap} onClick={(e)=>{this.myFunction2(e)}}/>
  <img className = "reaction clap" src="https://www.pngrepo.com/download/54416/clap-hands.png" onClick={(e)=>{this.myFunction2(e)}}/>
  <img className = "reaction praise" src="https://images.vexels.com/media/users/3/142288/isolated/preview/abf1a5a1f7cb224c91a61ce79eb15cbc-hand-gesture-praise-illustration-by-vexels.png" onClick={(e)=>{this.myFunction2(e)}}/>

  </span>
  </div>

  <div class="popup2" >
  <span class="popuptext" id="myPopup2">
  <img className = "reaction" src={shock} />


  </span>

</div>
        <p className="desc">  <b>KiyanaDunlock</b> How my Monday is going! #Great #MondayFunDay #MoMoneyMoMondays</p>



        </div>
  );
}
}


export default Post;
