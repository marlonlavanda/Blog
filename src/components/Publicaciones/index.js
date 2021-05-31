import React, { Component } from "react";
import { connect } from "react-redux";
class publicaciones extends Component {
  componentDidMount() {}
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Publicaciones de </h1>
        {this.props.match.params.key}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};

export default connect(mapStateToProps)(publicaciones);
