import { isValidObjectId } from "mongoose"
import { db } from ".";
import { Entry, IEntry } from "../models";




export const getEntryById = async(id: string) => {


    if(!isValidObjectId(id)) return null;

    await db.connect();
    const entry = await Entry.findById(id).lean();
    await db.disconnect();

    // return entry; //no va a funcionar
    return JSON.parse(JSON.stringify(entry));
}