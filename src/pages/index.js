import React from 'react';
import { Button } from '@material-ui/core';
import { useRouter } from 'next/router';

const HomePage = () => {
	const router = useRouter();

	const handleLogin = () => {
		window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${window.location.origin}/api/callback&scope=playlist-read-private%20playlist-read-collaborative`;
	};

	return (
		<div>
			<Button variant="contained" color="primary" onClick={handleLogin}>
				Log in with Spotify
			</Button>
		</div>
	);
};

export default HomePage;
