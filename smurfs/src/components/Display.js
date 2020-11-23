import React from 'react';
import { Container, Card, Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const Display = (props) => {
	console.log(props.smurfs);
	return (
		<div>
			<Container>
				{props.smurfs.map((item) => {
					return (
						<Card key={item.id}>
							<Typography>{item.name}</Typography>
							<Typography>{item.age}</Typography>
							<Typography>{item.height}</Typography>
						</Card>
					);
				})}
			</Container>
		</div>
	);
};

const mapStatetoProps = (state) => {
	return {
		smurfs: state.smurfs,
	};
};

export default connect(mapStatetoProps)(Display);
