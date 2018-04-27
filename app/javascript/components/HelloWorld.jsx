import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
       <NumberList data={this.props.greeting}/>
      </React.Fragment>
    );
  }
}
function NumberList(props) {
  const data = props.data;
  const listItems = data.map((d) =>
    <li key={d.name}>{d.name}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

HelloWorld.propTypes = {
  greeting: PropTypes.array
};
export default HelloWorld
