import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";
import { AuthContextProvider } from "./contexts/AuthContext";
import BookingForm from "./pages/BookingForm";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
   return (
      <div className="App">
         <AuthContextProvider>
            <Navbar />
            <Routes>
               <Route exact path="/" element={<Home />} />
               <Route exact path="/rooms" element={<Rooms />} />
               <Route exact path="/rooms/:slug" element={<SingleRoom />} />
               <Route exact path="/signin" element={<Signin />} />
               <Route exact path="/signup" element={<Signup />} />

               <Route
                  exact
                  path="/book/:name"
                  element={
                     <ProtectedRoute>
                        <BookingForm />
                     </ProtectedRoute>
                  }
               />
               <Route path="/*" element={<Error />} />
            </Routes>
         </AuthContextProvider>
      </div>
   );
}

export default App;
