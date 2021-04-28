import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyIceCream } from "../redux/index";
// import PropTypes from "prop-types";

const HooksIceCreamContainer = () => {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Number of Ice Cream</h2>
        <p>{numOfIceCream}</p>
        <button
          onClick={() => {
            dispatch(buyIceCream());
          }}
        >
          Buy Ice Cream
        </button>
      </div>
    </>
  );
};

// HooksCakeContainer.propTypes = {};

export default HooksIceCreamContainer;
