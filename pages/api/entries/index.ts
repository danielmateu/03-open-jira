/* eslint-disable import/no-anonymous-default-export */
import type { NextApiRequest, NextApiResponse } from 'next'
import { json } from 'node:stream/consumers';
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';

type Data =
    | { message: string }
    | IEntry[]
    | IEntry

export default function (req: NextApiRequest, res: NextApiResponse<Data>) {

    switch (req.method) {
        case 'GET':

            return getEntries(res);

        case 'POST':

            return postEntry(req,res);
        default:
            return res.status(400).json({ message: 'Endpoint no existe' })


    }
}

const getEntries = async (res: NextApiResponse<Data>) => {

    await db.connect();
    const entries = await Entry.find().sort({ createdAdd: 'ascending' });
    await db.disconnect();

    res.status(200).json(entries)
}


const postEntry = async(req:NextApiRequest, res: NextApiResponse<Data>) =>{


    const {description = ''} = req.body;
    // console.log(req.body);
    const newEntry = new Entry({
        description, 
        createdAt: Date.now(),

    });

    try {
        
        await db.connect();
        await newEntry.save();
        await db.disconnect();

        return res.status(200).json(newEntry);
    } catch (error) {

        await db.disconnect();
        console.log(error); 
        
        return res.status(500).json({message: 'Algo salió mal, revisar consola del servidor'});
    }

    

}