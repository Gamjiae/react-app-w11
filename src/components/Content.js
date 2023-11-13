import { Component } from "react";

class Content extends Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
        <div>
          <img src={this.props.image} alt={this.props.title}></img>
        </div>
      </article>
    );
  }
}

export default Content;