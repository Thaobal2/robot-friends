// import { Component } from "react";
// import "./App.css";
// import SearchInput from "./Components/SearchInputs/SearchInput";
// import CardList from "./Components/CardList/CardList";

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       robots: [],
//       searchBox: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => this.setState({ robots: data }));
//   }

//   filteredRobots = (e) => {
//     this.setState({ searchBox: e.target.value });
//   };

//   render() {
//     const { robots, searchBox } = this.state;
//     const { filteredRobots } = this;
//     const removeRobot = robots.filter((robot) => {
//       return robot.name.toLowerCase().includes(searchBox);
//     });
//     return (
//       <div className="App">
//         <h1 className="app--header">My Robots friends</h1>
//         <SearchInput
//           onChangeHandler={filteredRobots}
//           placeholder="search your robot"
//           className="searchInputsss"
//         />
//         <CardList robots={removeRobot} />
//       </div>
//     );
//   }
// }

// export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
import SearchInput from "./Components/SearchInputs/SearchInput";
import CardList from "./Components/CardList/CardList";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchBox, setSearchBox] = useState("");
  const [filteredRobots, setFilteredRobots] = useState(robots);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setRobots(data));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const remmoveRobot = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchBox);
    });

    setFilteredRobots(remmoveRobot);
  }, [robots, searchBox]);

  const onSearchChange = (e) => {
    setSearchBox(e.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app--header">My Robots friends</h1>
      <SearchInput
        onChangeHandler={onSearchChange}
        placeholder="search your robot"
        className="searchInputsss"
      />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
