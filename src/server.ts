import express from 'express';
import cors from 'cors';
import routeUser from './routes/user'; 
import routeCategory from './routes/categories'; 
import routePatients from './routes/patients'; 
import routeQuestions from './routes/questions'; 
import routeAnswers from './routes/answers'; 
import routeSector from './routes/sector'; 






const app = express();
app.use(cors());
app.use(express.json());
app.use('/user', routeUser);


app.use('/category', routeCategory);


app.use('/patients', routePatients);

app.use('/questions', routeQuestions);
app.use('/answers', routeAnswers);

app.use('/sector', routeSector);







const port = 3001;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
