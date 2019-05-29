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

app.use((req, res, next) => {
	req.context = {
		models,
		me: models.users[1]
	};
	next();
});

app.use('/users', routes.user);
app.use('/books', routes.book);

app.get('/authenticated', (req, res) => {
	res.send(req.context.users[req.context.me.id]);
});

const eraseDatabaseOnSync = true;

connectDb().then(async () => {
	if (eraseDatabaseOnSync) {
		await Promise.all([
			models.User.deleteMany({}),
			models.Book.deleteMany({})
		]);
	}

	app.listen(process.env.PORT, () =>
		console.log(`Example app listening on port ${process.env.PORT}!`)
	);
});
