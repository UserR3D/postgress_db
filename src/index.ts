import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';

const prisma = new PrismaClient();

const app = fastify();

app.get('/', async (req, res) => {
  res.send('Console.log asb');
});

app.listen({ port: 3000 }, (err) => {
  if (err) throw err;
  console.log('server funfando');
});
