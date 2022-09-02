import { Database } from 'database/db';

const avo = async (req, res) => {
  const db = new Database('New Database');

  const { query: { id } } = req;

  const exactAvo = await db.getAvoId(`${id}`);

  res.status(200).json(exactAvo);
};

export default avo;
