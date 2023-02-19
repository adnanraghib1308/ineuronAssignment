import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const express = require('express');
const app = express();
const bodyParser = express.json({});

app.use(bodyParser);

app.get('/', (req: Request, res: Response) => { res.send("Hi there V6!!") });
app.use('/api', require('./controllers'));

app.listen(3030, () => console.log("Server running on port 3030"));

export = app;
