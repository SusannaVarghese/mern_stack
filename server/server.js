import expess from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const app = expess();
const PORT = 4000;
app.use(cors);

await mongoose.connect(
    'mongodb://susanna:susanna123@ac-kgodnwa-shard-00-00.gpq39jl.mongodb.net:27017,ac-kgodnwa-shard-00-01.gpq39jl.mongodb.net:27017,ac-kgodnwa-shard-00-02.gpq39jl.mongodb.net:27017/?ssl=true&replicaSet=atlas-jgbr8o-shard-0&authSource=admin&retryWrites=true&w=majority'
);
console.log('Connected to database successfully');
// .then(() => console.log('Connected to database successfully'))
// .catch((err) => console.error(err));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});