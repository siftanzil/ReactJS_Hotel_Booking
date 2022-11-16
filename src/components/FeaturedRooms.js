import React, { useContext } from "react";
import { RoomContext } from "../RoomContext";
import Loading from "../components/Loading";
import Room from "../components/Room";
import Title from "./Title";

const FeaturedRooms = () => {
   const { loading, featuredRooms } = useContext(RoomContext);
   let rooms = featuredRooms.map((room) => {
      return <Room key={room.id} room={room} />;
   });

   return (
      <section className="featured-rooms">
         <Title title="featured rooms" />
         <div className="featured-rooms-center">
            {loading ? <Loading /> : rooms}
         </div>
      </section>
   );
};

export default FeaturedRooms;
