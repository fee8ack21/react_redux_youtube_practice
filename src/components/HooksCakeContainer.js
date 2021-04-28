import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyCake } from "../redux/index";
// import PropTypes from "prop-types";

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>Number of Cake</h2>
        <p>{numOfCakes}</p>
        <button
          onClick={() => {
            dispatch(buyCake());
          }}
        >
          Buy Cake
        </button>
      </div>
    </>
  );
};

// HooksCakeContainer.propTypes = {};

export default HooksCakeContainer;
