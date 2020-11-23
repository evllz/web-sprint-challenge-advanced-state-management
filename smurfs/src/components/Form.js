import React, { useState } from 'react';
import {
	Container,
	TextField,
	Button,
	FormControl,
	FormGroup,
	Typography,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { submitData } from '../actions/index';

const Form = (props) => {
	const [data, setData] = useState({ name: '', age: '', height: '', id: '' });
	const handleChange = (e) => {
		e.persist();
		setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		props.submitData(data);
		setData({ name: '', age: '', height: '', id: '' });
	};
	return (
		<Container>
			<Typography>New in the group? Let's get you registered!</Typography>
			<FormControl>
				<FormGroup>
					<TextField
						label='Name'
						style={{ margin: '5px' }}
						value={data.name}
						name='name'
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<TextField
						label='Age'
						style={{ margin: '5px' }}
						value={data.age}
						name='age'
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<TextField
						label='Height'
						style={{ margin: '5px' }}
						value={data.height}
						name='height'
						onChange={handleChange}
					/>
				</FormGroup>
				<FormGroup>
					<Button
						variant='contained'
						color='primary'
						style={{ margin: '5px' }}
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</FormGroup>
			</FormControl>
		</Container>
	);
};

export default connect(null, { submitData })(Form);
