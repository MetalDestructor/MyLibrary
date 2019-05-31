import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		unique: true,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

userSchema.pre('remove', function(next) {
	this.model('Book').deleteMany({ user: this._id }, next);
});

const User = mongoose.model('User', userSchema);

export default User;
