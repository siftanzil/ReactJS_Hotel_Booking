import React, { useContext } from "react";
import Banner from "./../components/Banner";
import { Link, useParams, useNavigate } from "react-router-dom";
import defaultBcg from "../images/room-1.jpeg";
import { RoomContext } from "../contexts/RoomContext";
import StyledHero from "./../components/StyledHero";

const SingleRoom = () => {
   const { slug } = useParams();
   const navigate = useNavigate();

   const context = useContext(RoomContext);
   const { getRoom } = context;

   const room = getRoom(slug);

   if (!room) {
      return (
         <div className="error">
            <h3>no such room could be found</h3>
            <Link to="/rooms" className="btn-primary">
               back to rooms
            </Link>
         </div>
      );
   }

   const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      images,
      available,
   } = room;

   const [mainImg, ...defaultImg] = images;

   const handleBooking = () => {
      if (available) {
         navigate(`/book/${name}`);
      }
   };

   return (
      <>
         <StyledHero img={mainImg || defaultBcg}>
            <Banner title={`${name} room`}>
               <Link to="/rooms" className="btn-primary">
                  back to rooms
               </Link>
            </Banner>
         </StyledHero>
         <section className="single-room">
            <div className="single-room-images">
               {defaultImg.map((item, index) => {
                  return <img key={index} src={item} alt={name} />;
               })}
            </div>
            <div className="single-room-info">
               <article className="desc">
                  <h3>details</h3>
                  <p>{description}</p>
               </article>
               <article className="info">
                  <h3>info</h3>
                  <h6>Price : ${price}</h6>
                  <h6>Size : ${size} SQFT</h6>
                  <h6>
                     Max capacity :{" "}
                     {capacity > 1
                        ? `${capacity} people`
                        : `${capacity} person`}
                  </h6>
                  <h6>{breakfast && "free breakfast included"}</h6>
                  <h4 style={{ color: "green" }}>
                     Rooms Available Now : {available}
                  </h4>
                  <button
                     onClick={handleBooking}
                     style={{
                        padding: "3px",
                        fontSize: "1.5rem",
                        border: "solid 3px",
                        backgroundColor: "orange",
                        borderRadius: "10px",
                     }}>
                     BOOK NOW
                  </button>
               </article>
            </div>
         </section>
         <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
               {extras.map((item, index) => {
                  return <li key={index}>{item}</li>;
               })}
            </ul>
         </section>
      </>
   );
};

export default SingleRoom;
