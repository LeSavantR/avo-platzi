import { Database } from 'database/db';

const allAvos = async (req, res) => {
  const db = new Database('New Database');

  const allEntries = await db.getAll();
  const { length } = allEntries;

  res.statusCode = 200;
  res.setHeader('Content-type', 'application/json');
  res.end(JSON.stringify({ length, data: allEntries }));
};

export default allAvos;
