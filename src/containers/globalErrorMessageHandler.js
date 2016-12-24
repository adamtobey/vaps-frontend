import {connect} from 'react-redux';
import {raiseErrorAction, settleErrorAction, settleAllErrorsForAction} from '../state/errors';

let ownerCounter = 0;

export default function(component) {
  let owner = ownerCounter++;
  let mapStateToProps = () => ({});
  let mapDispatchToProps = (dispatch) => ({
    raiseError: (id, error) => dispatch(raiseErrorAction(id, error, owner)),
    settleError: id => dispatch(settleErrorAction(id)),
    settleAllErrors: () => dispatch(settleAllErrorsForAction(owner))
  });
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
}
