import React from "react";
import { buyCake, buyIceCream } from "../redux/index";
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
      <div>
        <h2>Number of iceCream</h2>
        <p>{props.numOfIceCream}</p>
        <button onClick={props.buyIceCream}>Buy Ice Cream</button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
    buyIceCream: () => {
      dispatch(buyIceCream());
    },
  };
};
// CakeContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
