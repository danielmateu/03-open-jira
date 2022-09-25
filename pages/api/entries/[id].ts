import mongoose from 'mongoose';
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { Entry, IEntry } from '../../../models';


type Data = 
|{message: string}
| IEntry
| null

// eslint-disable-next-line import/no-anonymous-default-export
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    const {id} = req.query;

    if(!mongoose.isValidObjectId(id)) {
        return res.status(400).json({message: `El id: ${id} no es válido`})
    }

    switch (req.method) {
        case 'PUT':
            return updateEntry(req,res);
        case 'GET':
            return getEntry(req,res);
        default:
            return res.status(400).json({message: 'El método no existe'})
    }
}

const getEntry =async(req: NextApiRequest, res: NextApiResponse<Data>) => {

    const {id} = req.query;

    await db.connect();

    const entryInDB = await Entry.findById(id);

    if(!entryInDB){
        await db.disconnect();
        return res.status(400).json({message: `No hay entrada con ese id: ${id}`})
    }

    return res.status(200).json(entryInDB)
}

const updateEntry = async(req: NextApiRequest,res: NextApiResponse<Data>) => {

    const {id} = req.query;

    await db.connect();

    const entryToUpdate = await Entry.findById(id);

    if(!entryToUpdate){
        await db.disconnect();
        return res.status(400).json({message: `No hay entrada con ese id: ${id}`})
    }

    const {
        description = entryToUpdate.description,
        status =  entryToUpdate.status,
    } = req.body

    try {
        const updatedEntry = await Entry.findByIdAndUpdate( id, {description, status},{runValidators : true, new : true});
        await db.disconnect();
        res.status(200).json(updatedEntry!);

    } catch (error) {
        console.log({error})
        await db.disconnect();
        res.status(400).json({message: `Error, bad request`})
    }


    // entryToUpdate.description = description;
    // entryToUpdate.status = status;
    // await entryToUpdate.save()

}