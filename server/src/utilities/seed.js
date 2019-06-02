import models from '../models';

const createUsersWithBooks = async () => {
	const users = [
		new models.User({
			username: 'ivan',
			email: 'asd@asd.bg',
			password: 'asd123'
		}),
		new models.User({
			username: 'peter',
			email: 'asd@bg.bg',
			password: 'asd123'
		})
	];

	const genres = [
		new models.Genre({
			label: 'Drama'
		}),
		new models.Genre({
			label: 'Fantasy'
		}),
		new models.Genre({
			label: 'Action'
		})
	];

	const authors = [
		new models.Author({
			name: 'Tom Clancy',
			description: 'Good one',
			born: '1987-09-28'
		}),
		new models.Author({
			name: 'Gary Paulsen',
			description: 'Not that bad',
			born: '1913-12-02'
		}),
		new models.Author({
			name: 'Louis Sachar',
			description: 'Please stop',
			born: '2019-02-12'
		})
	];

	const books = [
		new models.Book({
			title: 'Red rabbit',
			description: 'Good book',
			authors: [authors[0].id],
			readers: [users[0].id],
			genres: [genres[0].id]
		}),
		new models.Book({
			title: 'Hatchet',
			description: 'I guess its okay',
			authors: [authors[1].id],
			readers: [users[1].id],
			genres: [genres[1].id]
		}),
		new models.Book({
			title: 'holes',
			description: 'Dont get me started',
			authors: [authors[2].id],
			readers: [users[1].id],
			genres: [genres[2].id]
		})
	];

	for (const user of users) {
		await user.save();
	}

	for (const genre of genres) {
		await genre.save();
	}

	for (const author of authors) {
		await author.save();
	}

	for (const book of books) {
		await book.save();
	}
};

export default { createUsersWithBooks };
