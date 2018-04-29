import React from "react"
import PropTypes from "prop-types"
class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
       
        <Util/>
        <Ecomm/>
      </React.Fragment>
    );
  }
}
class Util extends React.Component {
  render() {
    // return <h1>Hello, {this.props.name}</h1>;
     return (<div className="mar-botom-15">
      <div className="row bgclr-white menu-box">
        <div className="col-xs-3 menu-options text-center">
          <a href="/mobile/m/time_table_search">
            <span className="sprite-mobile icon-time-table" title="Time Table RailYatri Icon"></span>
            <p>Time<br/> Table</p>
          </a>
        </div>
        <div className="col-xs-3 menu-options text-center">
          <a href="/m/pnr-status">
            <span className="sprite-mobile icon-pnr-status" title="PNR Status RailYatri Icon"></span>
            <p>PNR<br/> Status</p>
          </a>
        </div>
        <div className="col-xs-3 menu-options text-center">
          <a href="/m/live-train-status">
            <span className="sprite-mobile icon-train-status" title="Train Status RailYatri Icon"></span>
            <p>Train<br/> Status</p>
          </a>
        </div>
        <div className="col-xs-3 menu-options text-center">
          <a href="/m/arrival-departure">
            <span className="sprite-mobile icon-arr-dep" title="Live Arrival and Departure RailYatri Icon"></span>
            <p>Live<br/> Arrv/Dep</p>
          </a>
        </div>
        <div className="col-xs-3 menu-options no-divider text-center">
          <a href="/m/rail-wisdom">
            <span className="sprite-mobile icon-wisdom" title="Rail Wisdom RailYatri Icon"></span>
            <p>Rail<br/> Wisdom</p>
          </a>
        </div>
        <div className="col-xs-3 menu-options no-divider text-center">
          <a href="/m/seat-availability">
            <span className="sprite-mobile icon-seat-available" title="Seat Availability RailYatri Icon"></span>
            <p>Seat<br/> Availability</p>
          </a>
        </div>
        <div className="col-xs-3 menu-options no-divider text-center">
          <a href="/m/trains-between-stations">
            <span className="sprite-mobile icon-train-between" title=""></span>
            <p>Trains b/w<br/> Stations</p>
          </a>
        </div>
        <div className="col-xs-3 menu-options no-divider text-center">
         <a href="/m/user-wallets">
          <span className="sprite-mobile icon-wallet" title="My Wallet RailYatri Icon"></span>
          <p>My<br/> Wallet</p>
        </a>
      </div>
      <div className="col-xs-3 menu-options text-center expand-btn hide">
        <a href="javascript:void(0);" data-toggle="collapse" data-target="#demo" className="collapsed">
          <img src="/assets/mobile_view/icons/icon-more.png" alt="Menu Expand RailYatri Icon"/>
        
        </a>
      </div>
    </div>
    <div id="demo" className="row bgclr-white menu-box collapse hide">
      <div className="col-xs-3 menu-options text-center">
        <a href="javascript:void(0);">
          <span className="sprite-mobile icon-locals-metros" title="Locals and Metros RailYatri Icon"></span>
          <p>Locals<br/> and Metros</p>
        </a>
      </div>
      <div className="col-xs-3 menu-options text-center">
        <a href="javascript:void(0);">
          <span className="sprite-mobile icon-fare-cal" title="Fare Calculator RailYatri Icon"></span>
          <p>Fare<br/> Calculator</p>
        </a>
      </div>
      <div className="col-xs-3 menu-options text-center">
        <a href="/user_wallets/index">
          <span className="sprite-mobile icon-wallet" title="My Wallet RailYatri Icon"></span>
          <p>My<br/> Wallet</p>
        </a>
      </div>
      <div className="col-xs-3 menu-options text-center">
        <a href="javascript:void(0);">
          <span className="sprite-mobile icon-offer" title="Offers In App RailYatri Icon"></span>
          <p>Offers<br/> In App</p>
        </a>
      </div>
    </div>
  </div>);
  }
}
class  Ecomm extends React.Component{
  render(){
    return (<div className="bgclr-white row marg-btm-15">
    <div className="col-xs-12">
      <div className="row rail-mall">
        <div className="col-xs-12 no-pad ">
          <img src="/assets/mobile_view/icons/railmall_bg.gif" style={{height: '32px',width: '100%',display: 'none'}}/>
        </div>
        <div className="col-xs-12 dip-marg-27">
          <div className="col-xs-10 no-pad">
            <h2>RAIL MALL<span style={{color:'#363636'}}>- Book. Order. Save</span></h2>
          </div>
        </div>
      </div>
      <div className="market-place">
        <div id="mrkt-plc-scrl" className="market-scroll clearfix">
          
          <div className="rail-mall-icon text-center">
            <a href="/m/buy-food-in-train">
              <img src="/assets/mobile_view/icons/food.png"/>
              <p>Food on Train</p>
            </a>
          </div>
          <div className="rail-mall-icon text-center">
            <a href="/bus-booking ">
              <img src="/assets/mobile_view/icons/icon-bus-ticket.png"/>
              <p>Bus Tickets</p>
            </a>
          </div>
          <div className="rail-mall-icon text-center">
            <a href="/train-ticket">
              <img src="/assets/mobile_view/icons/icon-ticket-booking.png"/>
              <p>Train Tickets</p>
            </a>
          </div>
          <div className="rail-mall-icon text-center sprite-mobile-cabstext-center expand-btn-ecm">
            <a href="javascript:void(0);" data-toggle="collapse" data-target="#demo-togle-htl" className="rail-mall-toggle">
              <img src="/assets/mobile_view/icons/arrow_down.png" alt="Menu Expand RailYatri Icon"/>
              <p id="less-more">Less</p>
            </a>
          </div>
          <div className="clearfix"></div>
          <div id="demo-togle-htl" className="bgclr-white menu-box collapse in">
            <div className="rail-mall-icon text-center">
              <a href="/m/hotel">
                <img src="/assets/mobile_view/icons/icon-short-stays.png" alt="short-stays"/>
                <p>Hotels</p>
              </a>
            </div>
            <div className="rail-mall-icon text-center sprite-mobile-cabs">
              <a href="/cab-search" >
                  <img src="/assets/mobile_view/icons/icon-outstation-cabs-new.png" alt="cabs-new"/>
                  <p>Outstation cabs</p>
              </a>
            </div>
            <div className="rail-mall-icon text-center">
              <a href="/m/packages" >
                  <img src="/assets/packages/package0.2.png" alt="cabs-new"/>
                  <p>Packages</p>
              </a>
            </div>
            <div className="rail-mall-icon text-center ">
              <a href="/m/travel-stores">
                <img src="/assets/mobile_view/icons/travel-store.png" alt="Travel Store"/>
                <p>Travel Store</p>
              </a>
            </div>
              <div className="rail-mall-icon text-center hide" style={{paddingTop:'4px'}}>
              <a href="/offers">
                <img src="/assets/mobile_view/icons/d_mdpi.png"/>
              </a>
            </div>
           </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 rail-mall-bottom ryoffers no-pad">
            <div className="col-xs-12">
              <a href="/offers" >
                <p className="text-left" style={{marginTop: '3px',textAlign: 'center'}}>
                  <img src="/assets/mobile_view/icons/icon-offer-home.png" alt="Wallet RailYatri Icon"/>
                  <label>RailYatri Exclusive Offers</label>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }
}
Home.propTypes = {
  utils: PropTypes.array,
  ecomm: PropTypes.array,
  card: PropTypes.array
};
export default Home
