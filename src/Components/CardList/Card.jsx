import React, { Component } from "react";
import "./Card.style.css";

class Card extends Component {
  render() {
    // const { robots } = this.props;
    // const { name, email, id } = robots;
    const { name, email, id } = this.props.robots;

    return (
      <div className="card">
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`robot ${name}`}
        />
        <h1>{name}</h1>

        <p>{email}</p>
      </div>
    );
  }
}

export default Card;

// import React from "react";
// import "./Card.style.css";

// const Card = ({ robots: { name, email, id } }) => {
//   return (
//     <div>
//       <div className="card">
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`robot ${name}`}
//         />
//         <h1>{name}</h1>
//         <h1>{email}</h1>
//       </div>
//     </div>
//   );
// };

// export default Card;
