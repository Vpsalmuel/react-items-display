import React, { Component } from "react";
import { UserInfo } from "./component/UserInfo";

class App extends Component {
  state = {
    persons: [
      {
        FirstName: "Samuel",
        LastName: "Daniel",
        EmailAddress: "example@example.com",
        PhoneNumber: "090765854",
      },
      {
        FirstName: "David",
        LastName: "solomon",
        EmailAddress: "example@example.com",
        PhoneNumber: "090765854",
      },
      {
        FirstName: "Joel",
        LastName: "Amos",
        EmailAddress: "example@example.com",
        PhoneNumber: "090765854",
      },
      {
        FirstName: "Sandi",
        LastName: "Wiliams",
        EmailAddress: "example@example.com",
        PhoneNumber: "090765854",
      },
      {
        FirstName: "Kate",
        LastName: "Daniel",
        EmailAddress: "example@example.com",
        PhoneNumber: "090765854",
      },
    ],
  };
  render() {
    return this.state.persons.map((item, id) => {
      console.log(item.FirstName);
      return (
        <div className="container">
          <UserInfo
            key={id}
            person={item.FirstName}
            lastname={item.LastName}
            email={item.EmailAddress}
            phone={item.PhoneNumber}
          />
        </div>
      );
    });
  }
}
export default App;
