import React from "react";
import RoomList from "./Roomlist";
import { RoomConsumer } from "../contexts/RoomContext";
import Loading from "./Loading";

const RoomContainer = () => {
   return (
      <RoomConsumer>
         {(value) => {
            const { loading, rooms } = value;
            if (loading) {
               return <Loading />;
            }

            return (
               <div>
                  <RoomList rooms={rooms} />
               </div>
            );
         }}
      </RoomConsumer>
   );
};

export default RoomContainer;
