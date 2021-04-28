import React, { useState } from "react";
import { buyCake } from "../redux/index";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

const NewCakeContainer = (props) => {
  const [number, setNumber] = useState(1);
  return (
    <>
      <div>
        <h2>Number of Cake</h2>
        <input
          type="text"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <p>{props.numOfCakes}</p>
        <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
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
    buyCake: (number) => {
      return dispatch(buyCake(number));
    },
  };
};
// CakeContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
