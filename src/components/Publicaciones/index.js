import React, { Component } from "react";
import { connect } from "react-redux";
import * as usuariosActions from "../../actions/usuariosActions";
import * as publicacionesActions from "../../actions/publicacionesActions";
import Spinner from "../General/Spinner";
import Fatal from "../General/Fatal";

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerPorUsuario: publicaionesTraerPorUsuario } = publicacionesActions;

class publicaciones extends Component {
  async componentDidMount() {
    const {
      usuariosTraerTodos,
      publicaionesTraerPorUsuario,
      match: {
        params: { key },
      },
    } = this.props;

    if (!this.props.usuariosReducer.usuarios.length) {
      await usuariosTraerTodos();
    }
    if (this.props.usuariosReducer.error) {
      return;
    }
    if (!("publicaciones_key" in this.props.usuariosReducer.usuarios[key])) {
      publicaionesTraerPorUsuario(key);
    }
  }
  ponerUsuario = () => {
    const {
      usuariosReducer,
      match: {
        params: { key },
      },
    } = this.props;
    if (usuariosReducer.error) {
      return <Fatal mensaje={usuariosReducer.error} />;
    }

    if (!usuariosReducer.usuarios.length || usuariosReducer.cargando) {
      return <Spinner />;
    }

    const nombre = usuariosReducer.usuarios[key].name;

    return <h1>Publicaciones de {nombre}</h1>;
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.match.params.key}
        {this.ponerUsuario()}
      </div>
    );
  }
}

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
  return { usuariosReducer, publicacionesReducer };
};

const mapDispatchToProps = {
  usuariosTraerTodos,
  publicaionesTraerPorUsuario,
};

export default connect(mapStateToProps, mapDispatchToProps)(publicaciones);
