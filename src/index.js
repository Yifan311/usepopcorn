import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
// import { useState } from "react";
import "./index.css";
import App from "./App";

// function Test() {
//   const [rating, setRating] = useState(0);
//   function handleRating(rating) {
//     setRating(rating);
//   }
//   return (
//     <div>
//       <StarRating color="blue" size={58} onRating={handleRating} />
//       <p>
//         This movie was rated {rating} {rating > 1 ? "stars" : "star"}.
//       </p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <StarRating maxRating={5} color="red" size={24} defaultRating={3} /> */}
  </React.StrictMode>,
);
