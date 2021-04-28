import React from "react";
import { buyIceCream } from "../redux/index";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

const IceCreamContainer = (props) => {
  return (
    <>
      <div>
        <h2>Number of Ice Cream</h2>
        <p>{props.numOfIceCream}</p>
        <button onClick={props.buyIceCream}>Buy Ice Cream</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => {
      dispatch(buyIceCream());
    },
  };
};
// CakeContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
