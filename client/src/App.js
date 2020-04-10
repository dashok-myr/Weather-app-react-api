import React from "react";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import CityForm from "./components/CityForm/CityForm";
import Card from "./components/Card/Card";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import "./App.scss";

const key = "RJYJWP4MHJrALBQhr7RxCDmVIndAOOhm";

const particlesOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

const initialState = {
  input: "",
  weather: "",
  route: "signin",
  isSignedIn: false
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  onInputChange = event => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = async () => {
    const city = this.state.input;
    const cityData = await this.getCity(city);
    const weatherData = await this.getWeather(cityData.Key);

    const weather = {
      cityName: cityData.EnglishName,
      text: weatherData.WeatherText,
      temperature: weatherData.Temperature.Metric.Value,
      icon: weatherData.WeatherIcon,
      isDayTime: weatherData.IsDayTime
    };

    this.setState({ weather: weather, input: "" });
  };

  //get city information
  getCity = async city => {
    const baseUrl =
      "https://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];
  };

  //get weather information
  getWeather = async cityId => {
    const baseUrl = "https://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${cityId}?apikey=${key}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];
  };

  onRouteChange = route => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { route } = this.state;

    return (
      <div className="App">
          <Particles className="particles" params={particlesOptions} />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={this.state.isSignedIn}
        />
        {route === "home" ? (
          <div>
            <Logo />
            <CityForm
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
              input={this.state.input}
            />
            <Card weather={this.state.weather} />
          </div>
        ) : route === "signin" ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;
