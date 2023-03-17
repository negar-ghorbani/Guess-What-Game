import { MongoClient } from 'mongodb';
import * as mongoDB from 'mongodb';


const connectionString = `mongodb://saltadmin:episalt@localhost:27017/?authMechanism=DEFAULT`;

type categories = {
    _id: string;
    name: string,
    value: string[]
}

export const getValue = async (categoryId: string): Promise<categories> => {
    const client = new MongoClient(connectionString);
    try {
        await client.connect();
        const db: mongoDB.Db = client.db('salthack');
        const col: mongoDB.Collection = db.collection('category');
        const data = await col.findOne({ _id: mongoDB.ObjectId(categoryId) });
        return data;
    }
    catch (e) {
        throw new Error('value not found')
    }
    finally {
        await client.close();
    }
};
export const getCategories = async (): Promise<categories[]> => {
    const client = new MongoClient(connectionString);
    try {
        await client.connect();
        const db: mongoDB.Db = client.db('salthack');
        const col: mongoDB.Collection = db.collection('category');
        const data = (await col.find({}, { value: 0 }).toArray()) as categories[]
        return data;
    }
    catch (e) {
        throw new Error('categories not found')
    }
    finally {
        await client.close();
    }

};
