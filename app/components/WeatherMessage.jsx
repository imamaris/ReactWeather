var React = require('react');

var WeatherMessage = ({temp, location}) =>{
  // var { temp, location } = this.props;
  return (
    <h3>It's it {temp} in {location}.</h3>
  )
};

module.exports = WeatherMessage;
