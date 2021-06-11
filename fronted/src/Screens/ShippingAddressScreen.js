import React, { useState } from "react";
import CheckOutStep from "../components/CheckOutStep";

export default function ShippingAddressScreen() {
  const [fullname, setFullName] = useState("");
  const [address, setAddresss] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <CheckOutStep step1 step2></CheckOutStep>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Shipping Address</h1>
        </div>
        <div>
          <label htmlfor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlfor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddresss(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlfor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter your city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlfor="postalcode">PostalCode</label>
          <input
            type="number"
            id="postalcode"
            placeholder="Enter your postal code number"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label htmlfor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="Enter your country name"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
}
