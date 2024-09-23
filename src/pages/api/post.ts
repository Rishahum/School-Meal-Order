// pages/api/post.js

import pool from "../../lib/db";


export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    // Hardcoded data as in your example
    const date = '21-09-2024';
    const city = 'New Delhi';
    const temp_hi = 35;
    const temp_lo = 49;
    const prcp = 0.35;

    try {
      const result = await pool.query(
        'INSERT INTO wheather (city, temp_lo, temp_hi, prcp) VALUES ($1, $2, $3, $4) RETURNING *',
        [city, temp_lo, temp_hi, prcp]
      );
      res.status(201).json(result.rows[0]); // Respond with the inserted data
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
