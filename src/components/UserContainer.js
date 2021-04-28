import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/index";
// import PropTypes from "prop-types";

const UserContainer = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);
  return (
    <>
      <div>User</div>
      <p>
        Condition{" "}
        {props.userData.loading
          ? "loading"
          : props.userData.error
          ? props.userData.error
          : "ok"}
      </p>
      <ul>
        {props.userData &&
          props.userData.users &&
          props.userData.users.map((user) => <p>{user.name}</p>)}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  };
};
// UserContainer.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
