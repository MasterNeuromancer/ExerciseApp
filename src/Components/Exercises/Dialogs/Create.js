import React, { Fragment, Component } from 'react';
import { Dialog, Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class extends Component {
	state = {
		open: false
	};

	render() {
		const { open } = this.state;

		return (
			<Fragment>
				<Fab color="secondary" size="small">
					<AddIcon />
				</Fab>
				<Dialog open={open} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Create a new exercise</DialogTitle>
					<DialogContent>
						<DialogContentText>Please fill out the form below</DialogContentText>
						<form />
					</DialogContent>
					<DialogActions>
						<Button color="primary">Create</Button>
					</DialogActions>
				</Dialog>
			</Fragment>
		);
	}
}
