import React, { useEffect, useState } from "react";

function AllComponent() {
  return (
    <>
      <div>AllComponent</div>
      <Counter />
    </>
  );
}

export default AllComponent;

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    console.log("mounted");
  }

  componentDidUpdate(prevState) {
    if (prevState.count !== this.state.count) {
      console.log("component updated");
    }
  }

  render() {
    return (
      <>
        <div>Count {this.state.count}</div>
        <button onClick={this.handleClick}>Inc</button>
        <DataFn />
      </>
    );
  }
}

function DataFn() {
  const [recipe, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((data) => data.json())
      .then((res) => setData(res.recipes));
  }, []);

  console.log(recipe);
  return (
    <>
      <div>
        {recipe.map((rec) => (
          <img
            src={rec.image}
            alt={rec.name}
            style={{ maxHeight: "50%", maxWidth: "50%" }}
          />
        ))}
      </div>
    </>
  );
}

