import pool from "@/lib/db";

export default async function handler(req: any, res: any) {
    try{
    if(req.method === 'GET' ){
        const menuItems = await pool.query(
            'SELECT * FROM menu_list'

        )
        res.status(200).send(menuItems.rows)
        
    }
    }catch(error){
        console.log("error:", error)
         res.error(500).send('Error')
    }
    
}