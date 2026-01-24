


const MONGDB_URI = process.env.MONGODB_URI as string;

if (!MONGDB_URI) {
    throw new Error ("Please define the MONGODB_URI environment variable inside .env")
}

