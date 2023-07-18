import { MongoClient } from 'mongodb';

let cachedDb = null;

export async function connectToDatabase() {
	if (cachedDb) {
		return cachedDb;
	}

	const client = new MongoClient(process.env.NEXT_PUBLIC_MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	if (!client.isConnected()) {
		await client.connect();
	}

	const db = client.db();

	cachedDb = {
		client,
		db,
	};

	return cachedDb;
}
