import React, { Component } from "react";
import UavList from "../uav-list/uav-list";
// import Pagination from "../pagination/pagination";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  state = {
    currentPage: 1,
    uavsPerPage: 6
  };

  render() {
    const { uavs } = this.props;
    // const { currentPage, uavsPerPage } = this.state;

    // Get current uavs
    // const indexOfLastUav = currentPage * uavsPerPage;
    // const indexOfFirstUav = indexOfLastUav - uavsPerPage;
    // const currentUavs = uavs.slice(indexOfFirstUav, indexOfLastUav);

    // const paginate = event => {
    //   let currentId = Number(event.target.id);
    //   this.setState({
    //     currentPage: currentId
    //   });
    //   let current = document.querySelector(".is-current");
    //   let next = document.getElementById(currentId);
    //   current.classList.remove("is-current");
    //   next.classList.add("is-current");
    // };

    return (
      <>
        <UavList uavs={uavs} />
        {/* <section className="section has-background-grey-lighter">
          <Pagination
            uavsPerPage={uavsPerPage}
            totalUavs={uavs.length}
            paginate={paginate}
          />
        </section> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    uavs: state.firestore.ordered.uavs ? state.firestore.ordered.uavs : []
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "uavs" }])
)(Dashboard);
