import { Component } from "react";
import { connect } from "react-redux";

class CounterClass extends Component {
  increment() {
    this.props.dispatch({
      type: "INCREMENT",
    });
  }
  decrement() {
    this.props.dispatch({
      type: "DECREMENT",
    });
  }

  customIncrement() {
    this.props.dispatch({
      type: "INCREMENT",
      payload: 10,
    });
  }

  render() {
    return (
      <div className="demo">
        <h1>Class Componet Counter</h1>
        <h1 id="counter">{this.props.localCounter}</h1>
        <button id="decrement" onClick={() => this.decrement()}>
          -
        </button>
        &nbsp;&nbsp;
        <button id="increment" onClick={() => this.increment()}>
          +
        </button>
        &nbsp;&nbsp;
        <button id="decrement" onClick={() => this.customIncrement()}>
          + 10
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    localCounter: state.counter,
  };
};

export default connect(mapStateToProps)(CounterClass);
