import axios from 'axios';

export const getAccessToken = async (code) => {
	try {
		const response = await axios.post(
			'https://accounts.spotify.com/api/token',
			new URLSearchParams({
				grant_type: 'authorization_code',
				code,
				redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/callback`,
			}),
			{
				headers: {
					Authorization: `Basic ${Buffer.from(
						`${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID}:${process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET}`,
					).toString('base64')}`,
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			},
		);

		return response.data.access_token;
	} catch (error) {
		throw new Error('Failed to get access token');
	}
};

export const getUserPlaylists = async (accessToken) => {
	console.log(accessToken);
	try {
		const response = await axios.get(
			'https://api.spotify.com/v1/me/playlists',
			{
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			},
		);

		return response.data.items;
	} catch (error) {
		console.log(error);
		throw new Error('Failed to fetch user playlists');
	}
};
