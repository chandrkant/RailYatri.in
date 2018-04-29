import React from "react"
import PropTypes from "prop-types"
class RailMall extends React.Component {
  render () {
    return (
      <React.Fragment>
        Utils: {this.props.utils}
        Ecomm: {this.props.ecomm}
        Card: {this.props.card}
      </React.Fragment>
    );
  }
}

RailMall.propTypes = {
  utils: PropTypes.array,
  ecomm: PropTypes.array,
  card: PropTypes.array
};
export default RailMall
