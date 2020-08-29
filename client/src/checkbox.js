import React from "react";
var Checkbox = React.createClass({
    getInitialState: function() {
      return {checked: false}
    },
    handleCheck: function() {
      this.setState({checked: !this.state.checked});
    },
    render: function() {
      var msg;
      if (this.state.checked) {
        msg = "checked";
      } else {
        msg = "unchecked";
      }
      return (
        <div>
          <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
          <p>this box is {msg}.</p>
        </div>
      );
    }
  });

 export default Checkbox