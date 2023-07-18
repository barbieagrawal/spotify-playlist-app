import { getAccessToken } from '../../lib/spotify';

const CallbackPage = async (req, res) => {
	try {
		const { code } = req.query;

		if (!code) {
			throw new Error('Invalid authorization code');
		}

		const accessToken = await getAccessToken(code);

		if (accessToken) {
			res.redirect(`/playlists/${accessToken}`);
		} else {
			throw new Error('Failed to get access token');
		}
	} catch (error) {
		res.redirect(`/error?message=${encodeURIComponent(error.message)}`);
	}
};

export default CallbackPage;
