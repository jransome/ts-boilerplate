import { serve } from '@hono/node-server';
import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { z } from 'zod';

const app = new Hono();
app.get('/', (c) => c.text(`There are four lights! ${process.env.TEST_VAR}`));

app.get('/things',
  zValidator('query', z.object({
    date: z.iso.date(),
  })),
  (c) => {
    const { date } = c.req.valid('query');
    return c.text(date);
  },
);

const server = serve({
  fetch: app.fetch,
  port: 3000,
});

// graceful shutdown
process.on('SIGINT', () => {
  server.close();
  process.exit(0);
});

process.on('SIGTERM', () => {
  server.close((err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    process.exit(0);
  });
});
