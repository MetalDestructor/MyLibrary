import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

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

// userSchema.pre('remove', function(next) {
// 	this.model('Book').deleteMany({ user: this._id }, next);
// });

userSchema.pre('save', function(next) {
	let user = this;

	if (!user.isModified('password')) {
		return next();
	}

	bcrypt.hash(user.password, null, null, (err, hash) => {
		if (err) return next(err);
		user.password = hash;
		next();
	});
});

const User = mongoose.model('User', userSchema);

export default User;
