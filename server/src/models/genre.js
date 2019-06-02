import mongoose from 'mongoose';

const genreSchema = mongoose.Schema({
	label: {
		type: String,
		required: true,
		unique: true
	}
});

const Genre = mongoose.model('Genre', genreSchema);

export default Genre;
