import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Test');
})
app.listen(process.env.PORT, () =>
    console.log(`Listening ${process.env.PORT}`),
);