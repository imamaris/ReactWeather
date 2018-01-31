var React = require('react');
var Nav = require('Nav');

var Main = (props) =>{
  return (
    <div>
      
      <Nav />
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>


        {/* <h2>Main Component</h2> */}

      </div>
    </div>
    
  );
};

module.exports = Main;
