

import pool from "../../lib/db";
const bcrypt = require('bcrypt') 
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
    const { name, email, password } = req.body;

    try {
      // const RegisteredEmails = await pool.query(
      //   'SELECT email FROM student_info'
      // )
      // RegisteredEmails.rows.map((element: any)=>{
      //   if(email == element.email){
      //     alert('This email is already registered');
      //   }
      // })

      const RegisteredEmails = await pool.query(
        'SELECT email FROM student_info WHERE email = $1',
        [email]
      );
      if (RegisteredEmails.rows.length > 0) {
        return res.status(409).json({ message: 'This email is already registered' });
      }
      
      
        const hashPassword= await hashPasswordfn(password)
        const newUser = await pool.query(
          'INSERT INTO student_info (name, email, password) VALUES ($1, $2, $3) RETURNING *',
          [name, email, hashPassword]
        );

        res.status(200).send(newUser)
    } catch (error: any) {
      console.error(error.message);
      res.status(500).json({ message: 'Server Error' });
    }
  } else {
    
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
