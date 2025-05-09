import React from "react";

function getCurrentTime() {
    return new Date().toTimeString();
 }
function HelloWorld() {
    return (
         <div>
            <p>The current time is <span className="red">{getCurrentTime()}</span></p>
         </div>
      );
}
export default HelloWorld;