// // pages/api/post.js

// import pool from "../../lib/db";

// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json()); 

// app.post('/register', async (req: any, res: any) => {
//   const { name, email, password, cpassword } = req.body;

//   try {
//     if(password==cpassword){
//       const newUser = await pool.query(
//         'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
//         [name, email, password]
//       );
//       res.json(newUser.rows[0]); 
//     }else{
//       res.status(404).send('Passwords do not match');
//     }
 
//   } catch (error: any) {
//     console.error(error.message);
//     res.status(500).send('Server Error');
//   }
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import pool from "../../lib/db"; // Assuming db.js is in the lib directory

// This is the default function that handles requests to this API route
export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, password, cpassword } = req.body;

    try {
      // Check if passwords match
      if (password === cpassword) {
        const newUser = await pool.query(
          'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
          [name, email, password]
        );

        // Send back the newly created user information
        res.status(201).json(newUser.rows[0]);
      } else {
        res.status(400).json({ message: 'Passwords do not match' });
      }
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    // Handle other HTTP methods if necessary
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
