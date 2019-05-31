import uuidv4 from 'uuid/v4';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
	return res.send(Object.values(req.context.models.books));
});

router.get('/:bookId', (req, res) => {
	return res.send(req.context.models.books[req.params.bookId]);
});

router.post('/', (req, res) => {
	const id = uuidv4();
	const book = {
		id,
		title: req.body.title,
		userId: req.context.me.id
	};

	req.context.models.books[id] = book;

	return res.send(book);
});

router.put('/:bookId', (req, res) => {
	let book = req.context.models.books[req.params.bookId];
	if (req.context.me.id === book.userId) {
		book.title = req.body.title;
	} else {
		res.sendStatus(401);
	}

	res.send(book);
});

router.delete('/:bookId', (req, res) => {
	const {
		[req.params.bookId]: book,
		...otherBooks
	} = req.context.models.books;

	req.context.models.books = otherBooks;

	res.send(book);
});

export default router;
