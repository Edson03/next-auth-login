import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../services/prismaClient';

export default async function login(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {

        const { email, password} = req.body

        const person = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if(person){
            res.status(200).json({message: person});
            // compare(password, person.password, function (err, result) {
            //     if (!err && result) {
            //         const claims = { sub: person.id, myEmail: person.email, myName: person.name };
            //         const jwt = sign(claims, process.env.SECRET, { expiresIn: '1h' });
            //         res.setHeader('Set-Cookie', cookie.serialize('auth', jwt, {
            //             httpOnly: true,
            //             secure: process.env.NODE_ENV !== 'development',
            //             sameSite: 'strict',
            //             maxAge: 3600,
            //             path: '/'
            //         }))
            //         res.json({message: 'Welcome to the app!'});
            //         //res.json({ authToken: jwt });
            //     } else {
            //         res.json({ message: 'Email or password not valid!' });
            //     }
            // });
        }else{
            res.status(401).json({message: 'No user with this credentials'})
        }
    } else {
        res.status(405).json({ message: 'We only support POST' });
    }
}    