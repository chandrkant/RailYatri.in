import React from "react"
import PropTypes from "prop-types"
class Nav extends React.Component {
  render () {
    return (
      <React.Fragment>
       <NavBar/>
      </React.Fragment>
    );
  }
}
class NavBar extends React.Component{
  render(){
    return (<nav className="top-nav-block navbar navbar-default go-back">
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-2 go-prev drawer-close-icon">
        <div className="social-media-icons clearfix">
          <button type="button" className="drawer-toggle drawer-hamburger" onClick={openNav}>
            <span className="sr-only">toggle navigation</span>
            <span className="drawer-hamburger-icon"></span>
          </button>
        </div>
      </div>
      <div className="col-xs-9 nav-title">
          <a href="/m">
            <img src="/assets/mobile_view/icons/logo-ry.png" alt="railyatri logo"/>
          </a>
         <h1 style={{color: '#fff',fontSize:'18px'}}></h1>
          <i id="ins-app-icon" onClick={redirect_app} className="fa fa-mobile fa-2x pull-right" aria-hidden="true" style={{marginTop: '9px',   marginRight: '5px'}}></i>
      </div>
         <div className="col-xs-1 opt-nav">
        <div className="dropdown">
          <ul className="dropbtn icons btn-right showLeft" onClick={showDropdown}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div id="myDropdown" className="dropdown-content" style={{top:'0px'}}>
            <a href="/cancellation-order">Cancellations</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>)
  }
}
function openNav() {
      document.getElementById("overlay").style.display = "block";
      document.getElementById("new-sidebar").style.left = "0";
      $(".more-btn").toggleClass("opened closed");      
    }
    function closeNav() {
      document.getElementById("new-sidebar").style.left = "-820px";
      document.getElementById("overlay").style.display = "none";
      $(".more-btn").toggleClass("opened closed");
    }
    function goBack(){
      if (document.referrer.indexOf(window.location.host) !== -1) {
          history.back();
           return false;
         } else {
          window.location.href = 'railyatri.in';
    }
  }
  function redirect_app(){
    window.location.href = "" 
  }
function showDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
Nav.propTypes = {
  utils: PropTypes.array,
  ecomm: PropTypes.array,
  card: PropTypes.array
};
export default Nav
