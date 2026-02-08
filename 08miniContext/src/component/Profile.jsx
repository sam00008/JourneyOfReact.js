import React, { useContext } from "react";
import UserContext from "../context/UserContext.js";

function Profile(){
  const {user} = useContext(UserContext);
  
  if(!user) return <h2>please Login</h2>

  return (
    <>
     <div>
        Welcome {user.username};
     </div>
    </>
  )
}

export default Profile;