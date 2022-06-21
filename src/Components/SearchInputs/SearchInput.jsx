import React, { Component } from "react";
import "./searchInput.style.css";

class SearchInput extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input
        type="search"
        placeholder={placeholder}
        className={`searchInput ${className}`}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchInput;

// import React from "react";

// const SearchInput = ({ filteredRobots }) => {
//   return (
//     <div>
//       <input
//         style={{
//           padding: "1rem",
//           fontWeight: "bold",
//           fontSize: "1rem",
//           borderRadius: "5px",
//           background: "powderBlue",
//           margin: "3rem",
//         }}
//         type="search"
//         placeholder="search your robot"
//         className="searcBox"
//         onChange={filteredRobots}
//       />
//     </div>
//   );
// };

// export default SearchInput;
