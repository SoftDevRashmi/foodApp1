import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this.props;

    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>{count}</h1>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Incraese Count
        </button>
        <h1>User Name: {name}</h1>
        <h3>LOcation: {location}</h3>
      </div>
    );
  }
}

export default UserClass;
