import React from 'react';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
} from '@material-ui/core';

const PlaylistTable = ({ playlists, onSave }) => {
	return (
		<TableContainer component={Paper}>
			<Table className="min-w-full">
				<TableHead>
					<TableRow>
						<TableCell className="font-semibold">Cover</TableCell>
						<TableCell className="font-semibold">Name</TableCell>
						<TableCell className="font-semibold">URL</TableCell>
						<TableCell className="font-semibold">Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{playlists.map((playlist) => (
						<TableRow key={playlist.id}>
							<TableCell>
								<img
									src={playlist.images[0].url}
									alt={playlist.name}
									className="w-12 h-12 rounded-full"
								/>
							</TableCell>
							<TableCell className="text-gray-700">{playlist.name}</TableCell>
							<TableCell>
								{playlist.public ? (
									<a
										href={playlist.external_urls.spotify}
										target="_blank"
										rel="noreferrer"
										className="text-blue-500 underline"
									>
										Open in Spotify
									</a>
								) : (
									'Private'
								)}
							</TableCell>
							<TableCell>
								<Button
									variant="contained"
									color="primary"
									onClick={() => onSave(playlist)}
									className="py-2 px-4"
								>
									Save
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default PlaylistTable;
