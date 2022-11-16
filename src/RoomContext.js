import React, { createContext, useEffect, useState } from "react";
import items from "./data";
const RoomContext = createContext();

const RoomProvider = ({ children }) => {
   const [rooms, setRooms] = useState([]);
   const [sortedRooms, setSortedRooms] = useState([]);
   const [featuredRooms, setFeaturedRooms] = useState([]);
   const [loading, setLoading] = useState(true);

   //getData

   useEffect(() => {
      let rooms = formatData(items);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      setFeaturedRooms(featuredRooms);
      setRooms(rooms);
      setSortedRooms(rooms);
      setLoading(false);
   }, []);

   const formatData = (items) => {
      let tempItems = items.map((item) => {
         let id = item.sys.id;
         let images = item.fields.images.map((image) => image.fields.file.url);
         let room = { ...item.fields, images, id };
         return room;
      });
      return tempItems;
   };

   const getRoom = (slug) => {
      let tempRooms = [...rooms];
      const room = tempRooms.find((room) => room.slug === slug);
      return room;
   };

   return (
      <RoomContext.Provider
         value={{ rooms, sortedRooms, featuredRooms, loading, getRoom }}>
         {children}
      </RoomContext.Provider>
   );
};

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
