import { connectToDatabase } from '../../lib/mongodb';

const savePlaylist = async (req, res) => {
	try {
		const { playlist } = req.body;

		// Connect to MongoDB
		const { db } = await connectToDatabase();

		// Save playlist to 'playlists' collection
		await db.collection('playlists').insertOne(playlist);

		res.status(200).json({ success: true });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
};

export default savePlaylist;
