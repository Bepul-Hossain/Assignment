import React from "react";
import "../App.css";
import api from "../api";
function ValidationMessage(props) {
  if (!props.valid) {
    return <div className="error-msg">{props.message}</div>;
  }
  return null;
}

class Insert extends React.Component {
  state = {
    username: "",
    usernameValid: false,

    email: "",
    emailValid: false,

    dropdown: "",
    dropdownValid: false,

    checkboxmsg: "",
    checkboxValid: false,

    formValid: false,
    errorMsg: {},
  };

  validateForm = () => {
    const {
      usernameValid,
      emailValid,
      dropdownValid,
      checkboxValid,
    } = this.state;
    this.setState({
      formValid: usernameValid && emailValid && dropdownValid && checkboxValid,
    });
  };
  UpdateCheckbox = (checkboxValid) => {
    this.setState({ checkboxValid }, this.ValidateCheckBox);
  };
  ValidateCheckBox = () => {
    var { checkboxmsg } = this.state;

    let checkboxValid = true;
    let errorMsg = { ...this.state.errorMsg };
    if (this.checkboxValid) {
      checkboxmsg = "checked";
    } else {
      checkboxmsg = "unchecked";
      errorMsg.checkbox = "please check the box";
    }

    this.setState({ checkboxValid, errorMsg }, this.validateForm);
  };
  updateDropdown = (dropdown) => {
    this.setState({ dropdown }, this.validateDropdown);
  };
  validateDropdown = () => {
    const { dropdown } = this.state;
    let dropdownValid = true;
    let errorMsg = { ...this.state.errorMsg };
    if (dropdown === "") {
      errorMsg.dropdown = "Select here";
    }
    this.setState({ dropdownValid, errorMsg }, this.validateForm);
  };

  updateUsername = (username) => {
    this.setState({ username }, this.validateUsername);
  };

  validateUsername = () => {
    const { username } = this.state;
    let usernameValid = true;
    let errorMsg = { ...this.state.errorMsg };

    if (username.length < 3) {
      usernameValid = false;
      errorMsg.username = "Must be at least 3 characters long";
    }

    this.setState({ usernameValid, errorMsg }, this.validateForm);
  };

  updateEmail = (email) => {
    this.setState({ email }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    let emailValid = true;
    let errorMsg = { ...this.state.errorMsg };

    // checks for format _@_._
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailValid = false;
      errorMsg.email = "Invalid email format";
    }

    this.setState({ emailValid, errorMsg }, this.validateForm);
  };

  handleIncludeMovie = async () => {
    const { username, email } = this.state;

    const payload = { username, email };

    await api.insertTable(payload).then((res) => {
      window.alert(`Movie inserted successfully`);
      this.setState({
        username: "",
        email: "",
      });
    });
  };
  render() {
    return (
      <div className="App">
        <header>Form Validation</header>
        <main role="main">
          <form action="#" id="js-form">
            <div className="form-group">
              <label htmlFor="dropdown">Dropdown your country</label>
              <ValidationMessage
                valid={this.state.dropdownValid}
                message={this.state.errorMsg.dropdown}
              />
              <select onChange={(e) => this.validateDropdown(e.target.value)}>
                <option value="">select...</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="London">London</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="checkbox">CheckBox</label>
              <ValidationMessage
                valid={this.state.checkboxValid}
                message={this.state.errorMsg.checkbox}
              />
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="form-field"
                value={this.state.checkbox}
                onChange={(e) => this.UpdateCheckbox(e.target.value)}
                defaultChecked={this.state.ValidateCheckBox}
              />
            </div>

            <div className="form-group">
              <label htmlFor="username">Username</label>
              <ValidationMessage
                valid={this.state.usernameValid}
                message={this.state.errorMsg.username}
              />
              <input
                type="text"
                id="username"
                name="username"
                className="form-field"
                value={this.state.username}
                onChange={(e) => this.updateUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <ValidationMessage
                valid={this.state.emailValid}
                message={this.state.errorMsg.email}
              />
              <input
                type="email"
                id="email"
                name="email"
                className="form-field"
                value={this.state.email}
                onChange={(e) => this.updateEmail(e.target.value)}
              />
            </div>
            
            <div className="form-controls">
              <button
                className="button"
                type="submit"
                disabled={!this.state.formValid}
                onClick={this.handleIncludeMovie}
              >
                Submit
              </button>
            </div>
          </form>
         
        </main>
      </div>
    );
  }
}

export default Insert;
