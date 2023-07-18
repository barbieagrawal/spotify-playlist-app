import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography } from '@material-ui/core';
import { getUserPlaylists } from '../../lib/spotify';
import PlaylistTable from '../../components/PlaylistTable';
import axios from 'axios';

const PlaylistsPage = () => {
	const router = useRouter();
	const { access_token } = router.query;
	const [playlists, setPlaylists] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		if (access_token) {
			getUserPlaylists(access_token)
				.then((data) => setPlaylists(data))
				.catch((error) => setError(error.message));
		}
	}, [access_token]);

	const handleSave = (playlist) => {
		axios
			.post('/api/save', { playlist })
			.then((response) => {
				console.log('Playlist saved:', response.data);
				// Handle successful save if needed
			})
			.catch((error) => {
				console.error('Failed to save playlist:', error);
				// Handle save failure if needed
			});
	};

	if (error) {
		return (
			<Container>
				<Typography variant="h4" component="h1" align="center">
					Error
				</Typography>
				<Typography variant="body1" align="center">
					{error}
				</Typography>
			</Container>
		);
	}

	return (
		<Container>
			<Typography variant="h4" component="h1" align="center">
				Playlists
			</Typography>
			<PlaylistTable playlists={playlists} onSave={handleSave} />
		</Container>
	);
};

export default PlaylistsPage;
