import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import models, { connectDb } from './models';
import routes from './routes';
import seeder from './utilities/seed.js';

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

		seeder.createUsersWithBooks();
	}
	app.listen(process.env.PORT, () =>
		console.log(`Example app listening on port ${process.env.PORT}!`)
	);
});
