import React from "react";
import { buyCake } from "../redux/index";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

const CakeContainer = (props) => {
  return (
    <>
      <div>
        <h2>Number of Cake</h2>
        <p>{props.numOfCakes}</p>
        <button onClick={props.buyCake}>Buy Cake</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};
// CakeContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
