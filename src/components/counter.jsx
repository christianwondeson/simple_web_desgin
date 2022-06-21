import React, { Component } from "react";


class Counter extends Component {
 
  /*constructor()
  {
      super();
      this.handleIncrement = this.handleIncrement.bind.this;

  }*/

/*arrow functions inherit rebind method*/

  render() {
    return (
      <div>
        <span className={this.getBadgeclasses()}>
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 15 }}
          onClick={()=>this.props.onIncrement(this.props.counter)}
          className="badge badge-secondary m-1 btn-sm"
        >
          Increment
        </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() =>this.props.onDelete(this.props.counter.id)}>Delete</button>
      </div>
    );
  }

  getBadgeclasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "zero" : value;
  }
}

export default Counter;
