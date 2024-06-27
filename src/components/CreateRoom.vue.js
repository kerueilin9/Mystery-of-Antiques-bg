import { db } from "@/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { NButton } from "naive-ui";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const generateRoomId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
};
function getRandomAnimals() {
    // 定义12只动物（12生肖）
    const animals = [
        "Rat",
        "Ox",
        "Tiger",
        "Rabbit",
        "Dragon",
        "Snake",
        "Horse",
        "Goat",
        "Monkey",
        "Rooster",
        "Dog",
        "Pig",
    ];
    // 初始化所有动物的值为0
    const animalValues = animals.map((animal) => ({
        animal: animal,
        value: 0,
        view_value: 0,
    }));
    // 从动物数组中随机选取6只动物，将它们的值设置为1
    let selectedCount = 0;
    while (selectedCount < 6) {
        const randomIndex = Math.floor(Math.random() * animals.length);
        if (animalValues[randomIndex].value === 0) {
            animalValues[randomIndex].value = 1;
            animalValues[randomIndex].view_value = 1;
            selectedCount++;
        }
    }
    return animalValues;
}
const createRoom = async () => {
    const roomId = generateRoomId();
    try {
        await setDoc(doc(db, "rooms", roomId), {
            roomId: roomId,
            createdAt: new Date(),
        });
        const randomAnimals = getRandomAnimals();
        const roomRef = doc(db, "rooms", roomId);
        for (const animal of randomAnimals) {
            await setDoc(doc(roomRef, "animals", animal.animal), animal);
        }
        alert(`房間已創建！房號：${roomId}`);
        router.push({ path: `/room/${roomId}`, query: { host: "1" } });
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
const __VLS_modelEmitsType = {};
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_0 = {}
        .NButton;
    ({}.NButton);
    ({}.NButton);
    __VLS_components.NButton;
    __VLS_components.nButton;
    __VLS_components.NButton;
    __VLS_components.nButton;
    // @ts-ignore
    [NButton, NButton,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("text-8xl h-fit") }, type: ("primary"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("text-8xl h-fit") }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("text-8xl h-fit") }, type: ("primary"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (__VLS_ctx.createRoom)
    };
    // @ts-ignore
    [createRoom,];
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['text-8xl'];
        __VLS_styleScopedClasses['h-fit'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                NButton: NButton,
                createRoom: createRoom,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
