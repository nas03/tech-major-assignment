import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(
	express.json({
		limit: '10mb',
	})
);
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}🚀`);
});
