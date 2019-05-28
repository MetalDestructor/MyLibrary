import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import models from './models';
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

app.listen(process.env.PORT, () =>
	console.log(`Listening ${process.env.PORT}`)
);
