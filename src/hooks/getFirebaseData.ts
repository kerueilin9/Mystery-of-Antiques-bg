import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const getPlayerDataByCharacter = async (roomRef: any, character: string) => {
  try {
    const q = query(
      collection(roomRef, "players"),
      where("character", "==", character)
    );
    const querySnapshot = await getDocs(q);
    const docSnapshot = querySnapshot.docs[0];
    const playerData = docSnapshot.data() as DocumentData;
    return playerData;
  } catch (err) {
    console.log(err);
  }
};

export { getPlayerDataByCharacter };
