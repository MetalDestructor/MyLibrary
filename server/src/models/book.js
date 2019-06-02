import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String
	},
	authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author' }],
	genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' }],
	readers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
