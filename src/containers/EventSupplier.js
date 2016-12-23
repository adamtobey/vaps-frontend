import React from 'react';
import {fetchEvent, initializeEventSupplierStore as initSupply} from '../actions/singleEventSupply';
import {cacheEvent} from '../actions/eventSupplyActions';
import {connect} from 'react-redux';

// static counter for unique supply keys
let supplierId = 0;

class SupplyChildren extends React.Component {
  componentWillMount() {
    this.props.initSupply(this.props.supplyKey);
    this.props.fetchEvent(this.props.eventId);
  }
  render() {
    let {event, saveEdit, isLoading} = this.props;
    let suppliedChildren = React.Children.map(this.props.children, (child) =>
      React.cloneElement(child, {event, saveEdit, isLoading})
    );
    return (
      <div className="single-event-container">
        {suppliedChildren}
      </div>
    );
  }
};

const mapStateToProps = (uniqueKey => (state, ownProps) => {
  let myStore = state.suppliers.singleEvent[ownProps.supplyKey || uniqueKey];
  myStore = myStore || {
    event: {},
    fetchError: false,
    isLoading: true
  };
  return {
    supplyKey: ownProps.supplyKey || uniqueKey,
    event: myStore.event,
    isLoading: myStore.isLoading
  };
})(supplierId++);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initSupply: key => {
      dispatch(initSupply(key));
    },
    fetchEvent: id => {
      dispatch(fetchEvent(id, ownProps.supplyKey));
    },
    saveEdit: newEvent => {
      dispatch(cacheEvent(newEvent));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupplyChildren);
