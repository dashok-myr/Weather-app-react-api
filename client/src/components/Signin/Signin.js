import React from "react";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sighInEmail: "",
      signInPassword: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitSignIn = async e => {
    e.preventDefault();

    const response = await fetch("https://react-weather-app-api.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.sighInEmail,
        password: this.state.signInPassword
      })
    });

    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    console.log(body)

    if (body.didSignIn) {
      this.props.onRouteChange("home");
    } else {
      alert("Wrong email or password");
    }
  };

  render() {
    const { onRouteChange } = this.props;

    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <form className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0 ">Sign In</legend>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 white"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  onChange={this.handleChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="sighInEmail"
                  id="email"
                  required
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6 white" htmlFor="password">
                  Password
                </label>
                <input
                  onChange={this.handleChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="signInPassword"
                  id="password"
                  required
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white"
                type="submit"
                value="Sign in"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={e => onRouteChange("register")}
                className="f6 link dim black db pointer"
              >
                Register
              </p>
            </div>
          </form>
        </main>
      </article>
    );
  }
}

export default Signin;
