import {
  getFirestore,
  collection,
  getDocs,
  Firestore,
} from "firebase/firestore/lite";

import { app } from "../../lib/firestoreConnection";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = getFirestore(app);
  const data = await getData(db);
  res.status(200).json(data);
}

async function getData(db: Firestore) {
  const col = collection(db, "users");
  const products = await getDocs(col);
  const aux = products.docs.map((doc) => doc.data());
  return aux;
}

// Your web app's Firebase configuration

// Initialize Firebase
