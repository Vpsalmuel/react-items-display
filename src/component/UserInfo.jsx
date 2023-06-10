import React from "react";

export const UserInfo = ({ person, lastname, email, phone }) => {
  return (
    <div className="content">
      <h1>
        My name is {person} {lastname}, my email address is {email}, and my
        phone Number is {phone}
      </h1>
    </div>
  );
};
