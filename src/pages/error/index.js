import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography } from '@material-ui/core';

const ErrorPage = () => {
	const router = useRouter();
	const { message } = router.query;

	useEffect(() => {
		if (!message) {
			router.replace('/');
		}
	}, [message, router]);

	if (!message) {
		return null; // Display nothing until the redirect happens
	}

	return (
		<Container>
			<Typography variant="h4" component="h1" align="center">
				Error
			</Typography>
			<Typography variant="body1" align="center">
				{message}
			</Typography>
		</Container>
	);
};

export default ErrorPage;
