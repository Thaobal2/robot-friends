import React, { Component } from "react";
import Card from "./Card";
import "./CardList.style.css";

class CardList extends Component {
  render() {
    const { robots } = this.props;

    return (
      <div className="card--list">
        {robots.map((robot, i) => (
          <Card robots={robot} key={i} />
        ))}
      </div>
    );
  }
}

export default CardList;

// import React from "react";
// import Card from "./Card";
// import "./CardList.style.css";

// const CardList = ({ robots }) => {
//   return (
//     <div>
//       <div className="card--list">
//         {robots.map((robot, i) => (
//           <Card robots={robot} key={i} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CardList;
