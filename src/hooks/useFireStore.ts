// ----------------------------------------------------------------------

import { FIREBASE_API } from "@/config-global";
import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseApp = initializeApp(FIREBASE_API);

export const DB = getFirestore(firebaseApp);

const useFireStore = (table: string, conditional: any) => {
  const { fieldName, operator, compareValue } = conditional;

  const [document, setDocument] = useState<any>([]);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const q = query(
      collection(DB, table),
      where(fieldName, operator, compareValue)
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const documents = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setDocument(documents);
        setLoading(false);
      },
      (error) => {
        if(error) {
          setLoading(false);
        setDocument(null);
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, [table, fieldName, operator, compareValue]);

  return { document, loading };
};

export default useFireStore;
