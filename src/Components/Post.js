import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import YouTube from 'react-youtube';
import '../CSS/Reaction.css';
import '../CSS/Popup.css';
import '../CSS/Favorite.css';
import shock from "../Img/image.png"
import snap from "../Img/snap.png"




class Post extends React.Component {
  state = {
    change: false,
  }

  componentDidUpdate(){
// debugger
    const snap = document.querySelector(".snap")
    const clap = document.querySelector(".clap")
    const praise = document.querySelector(".praise")
    const faith = document.querySelector(".faith")
    const peace = document.querySelector(".peace")
    const rock = document.querySelector(".rock")
    const power = document.querySelector(".power")
    const circle = document.querySelector(".circle")




    clap.addEventListener("click", this.change);
    clap.addEventListener("mouseenter", this.describe);
    clap.addEventListener("mouseleave", this.finished);

    snap.addEventListener("click", this.change);
    snap.addEventListener("mouseenter", this.describe);
    snap.addEventListener("mouseleave", this.finished);
    praise.addEventListener("click", this.change);
    praise.addEventListener("mouseenter", this.describe);
    praise.addEventListener("mouseleave", this.finished);
    faith.addEventListener("click", this.change);
    faith.addEventListener("mouseenter", this.describe);
    faith.addEventListener("mouseleave", this.finished);
    peace.addEventListener("click", this.change);
    peace.addEventListener("mouseenter", this.describe);
    peace.addEventListener("mouseleave", this.finished);
    rock.addEventListener("click", this.change);
    rock.addEventListener("mouseenter", this.describe);
    rock.addEventListener("mouseleave", this.finished);
    power.addEventListener("click", this.change);
    power.addEventListener("mouseenter", this.describe);
    power.addEventListener("mouseleave", this.finished);


  }


 myFunction = (e) => {
   e.target.parentElement.classList.toggle("hide")
   const comment = document.querySelector(".comment");
   comment.classList.toggle("hidden")


// debugger
    var reaction = document.getElementById("shock");
    reaction.parentElement.innerHTML =
    "<div class = 'picks'><div class = 'circle'><img class = 'reaction snap' id='Kudos To You' src='https://static.thenounproject.com/png/23571-200.png'><div id='snap'></div></div><div class = 'circle'> <img class = 'reaction clap' id='Applaud' src='https://www.pngrepo.com/download/54416/clap-hands.png' onclick='this.change()'><div id='clap'></div></div><div class = 'circle'> <img class = 'reaction praise' id= 'You Are Amazing' src='https://i.ibb.co/F0TdKhd/image.png'><div id='praise'></div></div><div class = 'circle'> <img class = 'reaction faith' id='Keep Believing' src='https://static.thenounproject.com/png/486926-200.png'><div id='faith'></div></div><div class = 'circle'> <img class = 'reaction peace' id='Super Cool' src='https://cdn2.iconfinder.com/data/icons/hand-conversation-solid-style/91/Hand_04-512.png'><div id='peace'></div></div><div class = 'circle'> <img class = 'reaction rock' id='You Rock' src='https://cdn3.iconfinder.com/data/icons/universal-signs-symbols/128/hand-rock-512.png'><div id='rock'></div> </div><div class = 'circle'> <img class = 'reaction power' id='Keep Fighting' src='https://images.vexels.com/media/users/3/164151/isolated/preview/ce52c6e31be3e4a8bcdfe0cd75ccb203-hand-finger-fist-s-letter-s-silhouette-by-vexels.png'><div id='power'></div></div></div>"
    this.setState({
      change: true
    })

  }
  change = (e) => {
    var pop = document.querySelector(".popup");
    pop.classList.toggle("hide")
    pop.classList.toggle("choosen")
    debugger

    var shock = document.querySelector(".picks")
    var selected = new Image();
    selected.src = e.target.src
    selected.classList = e.target.classList
    selected.classList.toggle("clicked")
    shock.innerHTML = " "
    shock.appendChild(selected)
// debugger


    // debugger
    // debugger
  }


  playVid = () => {
    var vid = document.getElementById("iframe");
    // debugger

  }

  describe= (e) => {
    const description = document.getElementById(e.target.classList[1])
    const text = e.target.id
    description.classList.toggle("view")
    const print = `<p class = 'print'> ${text}</p>`
    description.innerHTML += print
    debugger

    // debugger
    // const pickdiv = document.querySelector(".picks")
    // const print = `<p class = 'print'> ${description}</p>`
    // // ERASES ALL REACTIONS //
    // // debugger
    // pickdiv.appendChild(e.target)
    // pickdiv.innerHTML += print



  }

  finished = (e) => {
    const description = document.getElementById(e.target.classList[1])
    description.innerHTML = ""
    description.classList.toggle("view")
  }


spiral = () => {
  const fav = document.querySelector(".favoriteContainer")
  fav.classList.toggle("vis")
  // debugger
}

comment = () => {
  setTimeout(()=>{
    const   bubble1 = document.querySelector(".small1").classList.toggle("viewed")
  },100)

  setTimeout(()=>{
    const  bubble2 = document.querySelector(".small2").classList.toggle("viewed")
  },500)

  setTimeout(()=>{
  const  box = document.querySelector(".comment-text-box").classList.toggle("viewed")
},1200)


  debugger
}
  render(){

    const opts = {
      height: '280vw',
      width: '570vw',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    }
      return (
        <div className = "post">
        <h1 className="user">@KiyanaDunlock says...</h1>
        <img className="spiral" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Double_spirale.svg/957px-Double_spirale.svg.png" onClick={this.spiral}/>
        <div className="favoriteContainer">
        <div className="favorite lil">
          <p className="fav type"><img className="fav-pic" src="http://cdn.onlinewebfonts.com/svg/img_6033.png" /> Favorite </p>
        </div>
        <div className="favorite">
        <img className="rep-pic" src="https://i.ibb.co/BB0DhCp/image-4.png" />
          <p className="rep type"> Report </p>
        </div>
        <div className="favorite">
        <img className="save-pic" src="https://i.ibb.co/hC3KcLW/image-5.png" />

          <p className="save type"> Save For Later </p>
        </div>
        <div className="favorite fav2">
        <img className="hide-pic" src="https://i.ibb.co/4S0hg21/image-6.png" />
          <p className="noMore type"> Hide This Topic </p>
        </div>
        </div>
        <div className="back" />
          <div >
            <div className = "videoContainer">
            <VisibilitySensor onChange={this.view}>
            <YouTube id="y"
              videoId="2g811Eo7K8U"
              opts={opts}
              onReady={this._onReady}
            />

            </VisibilitySensor>

        </div>

          </div>
          <div className="commentContainer">
          <div className="small1" />
          <div className="small2" />
          <div className="comment-text-box" />


          </div>
          <div className ="postBottom">
          <div className= "bottom-bar">
          <div class="popup" onClick={(e)=>{this.myFunction(e)}}>
          <img className = "reaction" id="shock" src={shock} />

  </div>
  <img className = "comment" src="https://img.icons8.com/metro/420/quote.png" onClick={this.comment}/>
  </div>
<div className="break" />
        <p className="desc">  <b>KiyanaDunlock</b> How my Monday is going! #Great #MondayFunDay #MoMoneyMoMondays</p>


</div>
        </div>
  );
}
}


export default Post;



// <span class="popuptext" id="myPopup">
// <img className = "reaction snap" src={snap} onClick={(e)=>{this.change(e)}}/>
// <img className = "reaction clap" src="https://www.pngrepo.com/download/54416/clap-hands.png" onClick={(e)=>{this.change(e)}}/>
// <img className = "reaction praise" onClick={(e)=>{this.change(e)}} src="https://images.vexels.com/media/users/3/142288/isolated/preview/abf1a5a1f7cb224c91a61ce79eb15cbc-hand-gesture-praise-illustration-by-vexels.png"/>
//
// </span>
