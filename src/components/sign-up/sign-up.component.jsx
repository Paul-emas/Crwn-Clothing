import React from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state);
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2>I do not have an account</h2>
        <span>Sign up with email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            value={this.state.displayName}
            type="text"
            label="Display Name"
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="email"
            value={this.state.email}
            type="text"
            label="Email"
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            value={this.state.password}
            type="password"
            label="Password"
            onChange={this.handleChange}
            required
          />
          <FormInput
            name="confirmPassword"
            value={this.state.confirmPassword}
            type="password"
            label="Confirm Password"
            onChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN UP</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
