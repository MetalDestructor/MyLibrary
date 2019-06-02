import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
	const genres = await req.context.models.Genre.find();
	return res.send(genres);
});

router.get('/:genreId', async (req, res) => {
	const genre = await req.context.models.Genre.findById(req.params.genreId);
	return res.send(genre);
});

router.post('/', async (req, res) => {
	const genre = await req.context.models.Genre.create({
		label: req.body.label
	});

	return res.send(genre);
});

router.delete('/:genreId', async (req, res) => {
	const genre = await req.context.models.Genre.findById(req.params.genreId);

	let result = null;
	if (genre) {
		result = await genre.remove();
	}

	res.send(result);
});

export default router;
