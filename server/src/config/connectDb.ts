import mongoose from 'mongoose';
import logger from './winston';
const connectDb = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI, {
			dbName: 'app',
		});
		console.log('MongoDB connected');
	} catch (error) {
		console.log('Error creating connection to mongo', error.message);
		logger.error('Error creating connection to mongo', error.message);
	}
};
export default connectDb;
