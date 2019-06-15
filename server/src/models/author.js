import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	born: {
		type: Date,
		required: true
	}
});

const Author = mongoose.model('Author', authorSchema);

export default Author;
