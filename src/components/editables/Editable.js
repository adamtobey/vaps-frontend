import React, { Component } from 'react';

/* Props:
		initialData: the data to display initially
		onEdit: callback for edit event -- facilitate edit here
		editable: whether this component should be editable
		wrapper: the component to use to wrap the display and edit components,
			but not the edit button
		editComponent: the component that displays an editing interface
		displayComponent: the component that displays the string
		NOTE: both components must accept the following props:
			initialData: the initial data from this Editable
			wrapper: the wrapper element given to this Editable
			togglable: whether to allow editing toggles, i.e. whether to display edit
				button
			toggleEdit: function to trigger an editing state toggle
			saveEdit: function to save the edit
*/
class Editable extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isEditing: false
		};
	}

	onEdit(data) {
		this.props.onEdit(data);
	}

	render() {
		let displayComponent = this.state.isEditing
								? this.props.editComponent
								: this.props.displayComponent;
		let toggleEdit = () => {
			this.setState({edit: this.props.editable && !this.state.isEditing});
		};
		displayComponent = React.cloneElement(displayComponent, {
			initialData: this.props.initialData,
			togglable: this.props.editable,
			toggleEdit: toggleEdit.bind(this),
			saveEdit: this.onEdit.bind(this)
		});
		return displayComponent;
	}

}

Editable.propTypes = {
	initialData: React.PropTypes.any.isRequired,
	onEdit: React.PropTypes.func.isRequired,
	editable: React.PropTypes.bool,
	wrapper: React.PropTypes.node,
	editComponent: React.PropTypes.node.isRequired,
	displayComponent: React.PropTypes.node.isRequired
}

Editable.defaultProps = {
	onEdit: function() {},
	editable: true,
	wrapper: <div></div>
}

export const EditComponentPropTypes = {
	initialData: React.PropTypes.any.isRequired,
	wrapper: React.PropTypes.node,
	togglable: React.PropTypes.boolean,
	toggleEdit: React.PropTypes.func.isRequired,
	saveEdit: React.PropTypes.func
};

export const EditComponentPropDefaults = {
	wrapper: <div></div>,
	togglable: true,
	saveEdit: function() {}
};

export default Editable;
