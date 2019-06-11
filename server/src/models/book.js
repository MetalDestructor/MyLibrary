import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	about: {
		type: String, 
		required: true
	},
	cover: {
		type: String
	},
	authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }],
	genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Genre' , required: true}],
	readers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
