import { db, realtimeDB } from "@/firebaseConfig";
import {
  push,
  set,
  ref as fireRef,
  orderByChild,
  equalTo,
  get,
  update,
  query,
  onValue,
} from "firebase/database";

const listenRound = async (roomId: string) => {
  try {
    const roomsRef = fireRef(realtimeDB, "rooms");
    const roomQuery = query(roomsRef, orderByChild("roomId"), equalTo(roomId));

    onValue(roomQuery, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const roomKey = Object.keys(data)[0]; // 获取第一个结果的 key
        const currentRound = data[roomKey].round || 0;
        const round = currentRound; // 更新组件中的 round 值
      } else {
        console.log("roomId not found");
      }
    });
  } catch (error) {
    console.error("Error querying roomId", error);
  }
};

export { listenRound };
