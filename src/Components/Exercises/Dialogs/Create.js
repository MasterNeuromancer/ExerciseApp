import React, { Fragment, Component } from 'react';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class extends Component {
	state = {
		open: false
	};

	handleToggle = () => {
		this.setState({
			open: !this.state.open
		});
	};

	render() {
		const { open } = this.state;

		return (
			<Fragment>
				<Fab color="secondary" onClick={this.handleToggle} size="small">
					<AddIcon />
				</Fab>
				<Dialog open={open} onClose={this.handleToggle}>
					<DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
					<DialogContent>
						<DialogContentText>Please fill out the form below</DialogContentText>
						<form />
					</DialogContent>
					<DialogActions>
						<Button color="primary" variant="contained">
							Create
						</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}
