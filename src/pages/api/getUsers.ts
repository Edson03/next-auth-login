import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../services/prismaClient';

export default async function(req: NextApiRequest, res: NextApiResponse){
    if (req.method === 'GET') {
        const users = await prisma.user.findMany();
        
        if(users){
            res.status(201).json(users)
        }else{
            res.status(405).json({message: 'No users found'})
        }
        
    }else{
        res.status(405).json({ message: 'We only support GET' });
    }
}