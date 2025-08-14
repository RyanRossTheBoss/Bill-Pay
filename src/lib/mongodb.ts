import { MongoClient, Db } from "mongodb";

type Cached = {
  client: MongoClient | null;
  db: Db | null;
};

const globalForMongo = globalThis as unknown as { _mongo?: Cached };

if (!globalForMongo._mongo) {
  globalForMongo._mongo = { client: null, db: null } as Cached;
}

export async function getMongoDb(): Promise<Db> {
  const cached = globalForMongo._mongo as Cached;
  if (cached.db) return cached.db;

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB;
  if (!uri) throw new Error("Missing MONGODB_URI");
  if (!dbName) throw new Error("Missing MONGODB_DB");

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db(dbName);

  cached.client = client;
  cached.db = db;
  return db;
}


