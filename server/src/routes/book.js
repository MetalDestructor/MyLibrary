import { Router } from 'express';
import services from '../services';

const router = Router();

router.get('/', async (req, res) => {
	try {
		const books = await services.book.getAllBooks();
		return res.send(books);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

router.get('/:bookId', async (req, res) => {
	try {
		const book = await services.book.getBookById(req.params.bookId);
		return res.send(book);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

router.post('/', async (req, res) => {
	//minamail creation requirements
	try {
		const book = await services.book.createBook(req.body);
		return res.send(book);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

router.put('/:bookId', (req, res) => {
	//I will wait for the authentication before I do that one properly
	let book = req.context.models.books[req.params.bookId];
	if (req.context.me.id === book.userId) {
		book.title = req.body.title;
		book.authors = req.body.authors;
		book.description = req.body.description;
		book.genres = req.body.genres;
		book.readers = req.body.readers;
	} else {
		res.sendStatus(401);
	}

	res.send(book);
});

router.delete('/:bookId', async (req, res) => {
	try {
		const result = await services.book.deleteBook(req.params.bookId);
		res.send(result);
	} catch (e) {
		console.log(e);
		return res.status(500).send('Server Error');
	}
});

export default router;
