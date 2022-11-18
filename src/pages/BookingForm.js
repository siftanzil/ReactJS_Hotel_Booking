import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { push, ref } from "firebase/database";
import { db } from "../firebase/config";
import moment from "moment";

const BookingForm = () => {
   const { name } = useParams();
   const [fullName, setFullName] = useState("");
   const [type, setType] = useState(name);
   const [mobile, setMobile] = useState("");
   const [address, setAddress] = useState("");
   const [checkIn, setCheckIn] = useState("");
   const [checkOut, setCheckOut] = useState("");
   const today = moment().format("yyyy-MM-DD");

   const storeOrder = (fullName, type, mobile, address, checkIn, checkOut) => {
      const orderDate = new Date().toISOString();
      push(ref(db, type), {
         fullName: fullName,
         mobile: mobile,
         address: address,
         checkIn: checkIn,
         checkOut: checkOut,
         orderDate: orderDate,
      });
      alert("Order Successful. Thank you.");
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(fullName + type + mobile + address + checkIn + checkOut);
      storeOrder(fullName, type, mobile, address, checkIn, checkOut);
      console.log("submitted");
      setFullName("");
      setAddress("");
      setCheckIn("");
      setCheckOut("");
      setMobile("");
   };
   return (
      <div>
         <form onSubmit={handleSubmit} className="sign-form" id="feedback-form">
            <input
               onChange={(e) => {
                  e.preventDefault();
                  setFullName(e.target.value);
                  console.log(e.target.value);
               }}
               type="text"
               placeholder="Full name"
               value={fullName}
               required
            />
            <br />
            <input
               onChange={(e) => {
                  e.preventDefault();
                  setMobile(e.target.value);
                  console.log(e.target.value);
               }}
               type="text"
               placeholder="Phone Number"
               value={mobile}
               required
            />
            <br />
            <input
               onChange={(e) => {
                  e.preventDefault();
                  setAddress(e.target.value);
                  console.log(e.target.value);
               }}
               type="text"
               placeholder="Present Address"
               value={address}
               required
            />
            <label>Check In</label>
            <input
               onChange={(e) => {
                  e.preventDefault();
                  setCheckIn(e.target.value);
                  console.log(e.target.value);
               }}
               type="date"
               min={today}
               value={checkIn}
               required
            />
            <label>Check Out</label>
            <input
               onChange={(e) => {
                  e.preventDefault();
                  setCheckOut(e.target.value);
                  console.log(e.target.value);
               }}
               type="date"
               min={checkIn}
               value={checkOut}
               required
            />
            <button type="submit">Submit</button>
         </form>
      </div>
   );
};

export default BookingForm;
