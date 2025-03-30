import express, {Request, Response} from 'express';
import bookRoute from "./routes/booksRoutes";
import authorRoute from "./routes/authorRoutes"
import memberRoute from "./routes/memberRoutes"

const app = express();
const port = 3000;
app.use('/books', bookRoute);
app.use('/authors',authorRoute);
app.use('/members',memberRoute)
app.use(express.json());

app.use(express.json())


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
