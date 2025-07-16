import pool from "../../lib/db";
const bcrypt = require('bcrypt');

export default async function handler(req: any, res: any) {
  // Ensure the method is POST for login
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Check if the user exists
      const userEmail = await pool.query(
        'SELECT email FROM student_info WHERE email = $1',
        [email]
      );

      // If no user is found, return 404
      if (userEmail.rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Retrieve the stored password for comparison
      const user = await pool.query(
        'SELECT password FROM student_info WHERE email = $1',
        [email]
      );

      const storedPassword = user.rows[0].password;

      // Compare the provided password with the stored hashed password
      const passwordCorrect = await bcrypt.compare(password, storedPassword);

      if (passwordCorrect) {
        return res.status(200).json({ message: 'Login successful' });
      } else {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
