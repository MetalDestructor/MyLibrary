import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	const books = await req.context.models.Book.find();
	return res.send(books);
});

router.get('/:bookId', async (req, res) => {
	const book = await req.context.models.Book.findById(req.params.bookId);
	return res.send(book);
});

router.post('/', async (req, res) => {
	const book = await req.context.models.Book.create({
		title: req.body.title
	});

	return res.send(book);
});

router.put('/:bookId', (req, res) => {
	let book = req.context.models.books[req.params.bookId];
	if (req.context.me.id === book.userId) {
		book.title = req.body.title;
		book.author = req.body.author;
		book.description = req.body.description;
		book.genre = req.body.genre;
	} else {
		res.sendStatus(401);
	}

	res.send(book);
});

router.delete('/:bookId', async (req, res) => {
	const book = await req.context.models.Book.findById(req.params.bookId);

	let result = null;
	if (book) {
		result = await book.remove();
	}

	res.send(result);
});

export default router;
