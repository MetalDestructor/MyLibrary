import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import models, { connectDb } from './models';
import routes from './routes';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(async (req, res, next) => {
	req.context = {
		models
	};
	next();
});

app.use('/users', routes.user);
app.use('/books', routes.book);
app.use('/genres', routes.genre);
app.use('/authors', routes.author);

app.get('/authenticated', (req, res) => {
	res.send(req.context.users[0]);
});

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
	if (eraseDatabaseOnSync) {
		await Promise.all([
			models.User.deleteMany({}),
			models.Genre.deleteMany({}),
			models.Author.deleteMany({}),
			models.Book.deleteMany({})
		]);

		createUsersWithBooks();
	}
	app.listen(process.env.PORT, () =>
		console.log(`Example app listening on port ${process.env.PORT}!`)
	);
});

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
