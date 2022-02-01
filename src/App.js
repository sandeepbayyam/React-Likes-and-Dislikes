import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
    };
  }
  lik = () => {
    this.setState({ likes: this.state.likes + 1 });
  };
  dislik = () => {
    this.setState({ dislikes: this.state.dislikes + 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.lik}>Like</button>:{this.state.likes}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.dislik}>Dislike</button>:{this.state.dislikes}
        <hr />
      </div>
    );
  }
}

export default App;
