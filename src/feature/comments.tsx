import { FIREBASE_API } from "@/config-global";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useSnackbar } from "notistack";

const { enqueueSnackbar } = useSnackbar();

const firebaseApp = initializeApp(FIREBASE_API);

export const DB = getFirestore(firebaseApp);

export const postComment = async (newComment: any) => {
  try {
    const res = await addDoc(collection(DB, "comments"), newComment);

    return {
      ...newComment,
      id: res.id,
    };
  } catch (err: any) {
    enqueueSnackbar(err, { variant: "error" });
  }
};
