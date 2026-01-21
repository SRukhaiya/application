import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    };
  }

  componentDidMount() {
    console.log("element created and rendered");
    console.log("Initial count:", this.state.count);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("element updated");

    // Print count ONLY when it changes
    if (prevState.count !== this.state.count) {
      console.log("Updated count:", this.state.count);
    }
  }

  componentWillUnmount() {
    console.log("element deleted");
  }

  render() {
    return (
      <>
        {/* Printing count in UI */}
        <p>Count value: {this.state.count}</p>

        <button
          onClick={() =>
            this.setState(prevState => ({
              count: prevState.count + 1
            }))
          }
        >
          Increase count
        </button>
      </>
    );
  }
}

export default Navbar;