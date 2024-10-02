

import pool from "../../lib/db"; 
import bcrypt from 'bcrypt'
async function hashPasswordfn(password: any){
  const saltRounds=10;
  try{
    const Hashedpassowrd = await bcrypt.hash(password, saltRounds);
    return Hashedpassowrd;

  }catch(error){
    console.log('hashError')
  }
}
export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    const { name, email, password, cpassword } = req.body;

    try {
      
      if (password === cpassword) {
        const hashPassword= await hashPasswordfn(password)
        const newUser = await pool.query(
          'INSERT INTO student_info (name, email, password) VALUES ($1, $2, $3) RETURNING *',
          [name, email, hashPassword]
        );

        
        res.status(201).json(newUser.rows[0]);
      } else {
        res.status(400).json({ message: 'Passwords do not match' });
      }
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
