import React, { Component } from "react";
import Dashboard from "../Page/Dashboard";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }


  render() {
    return (
      <>
        {/* <div className='col-lg-6 d-flex justify-content-end'>
          <button className='btn btn-success' onClick={() => { localStorage.removeItem("token") }}>Logout</button>
        </div> */}
        <div className="container col-lg-12 my-5">
          <Dashboard />

        </div>
      </>
    );
  }
}