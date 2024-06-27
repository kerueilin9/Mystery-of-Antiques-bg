import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/firebaseConfig";
import { setDoc, doc, collection, getDocs, } from "firebase/firestore";
import CheckAntiquesModal from "@/components/CheckAntiquesModal.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const roomId = ref();
roomId.value = route.params.roomId;
const player = ref();
player.value = route.query.player;
const roomRef = doc(db, "rooms", roomId.value);
const turn = ref(1);
const showModal = ref(false);
const animals = ref();
const getAnimals = async () => {
    try {
        const animalsCollectionRef = collection(roomRef, "animals");
        const querySnapshot = await getDocs(animalsCollectionRef);
        const fetchedAnimals = [];
        querySnapshot.forEach((doc) => {
            const animalData = doc.data();
            const animal = {
                name: animalData.animal,
                value: animalData.value,
                view_value: animalData.view_value,
            };
            fetchedAnimals.push(animal);
        });
        console.log(fetchedAnimals);
        animals.value = fetchedAnimals;
    }
    catch (err) { }
};
const setFourRandomAnimals = async () => {
    try {
        const value1Animals = animals.value.filter((animal) => animal.value === 1);
        const value0Animals = animals.value.filter((animal) => animal.value === 0);
        const selectedValue1 = getRandomElements(value1Animals, 2);
        const selectedValue0 = getRandomElements(value0Animals, 2);
        const fourRandomAnimals = shuffle([...selectedValue1, ...selectedValue0]);
        for (const animal of fourRandomAnimals) {
            await setDoc(doc(roomRef, "fourRandomAnimals", String(turn.value++)), animal);
        }
    }
    catch (err) { }
};
const getRandomElements = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};
onMounted(async () => {
    if (route.query.host === "1") {
        await getAnimals();
        console.log(setFourRandomAnimals());
    }
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-10/12 max-w-sm mt-8 mx-auto text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-3xl") }, });
    (__VLS_ctx.roomId);
    // @ts-ignore
    [roomId,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col h-96 justify-around") }, });
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            ;
        }
    };
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    // @ts-ignore
    const __VLS_8 = {}
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
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }));
    const __VLS_10 = __VLS_9({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }));
    let __VLS_14;
    const __VLS_15 = {
        onClick: (...[$event]) => {
            __VLS_ctx.showModal = true;
            // @ts-ignore
            [showModal,];
        }
    };
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    let __VLS_11;
    let __VLS_12;
    // @ts-ignore
    const __VLS_16 = {}
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
    const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }));
    const __VLS_18 = __VLS_17({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }));
    let __VLS_22;
    const __VLS_23 = {
        onClick: (...[$event]) => {
            ;
        }
    };
    (__VLS_21.slots).default;
    const __VLS_21 = __VLS_pickFunctionalComponentCtx(__VLS_16, __VLS_18);
    let __VLS_19;
    let __VLS_20;
    // @ts-ignore
    const __VLS_24 = {}
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
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }));
    const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("text-4xl h-14") }, type: ("primary"), size: ("large"), }));
    let __VLS_30;
    const __VLS_31 = {
        onClick: (...[$event]) => {
            ;
        }
    };
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    let __VLS_27;
    let __VLS_28;
    // @ts-ignore
    [CheckAntiquesModal,];
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(CheckAntiquesModal, new CheckAntiquesModal({ showModal: ((__VLS_ctx.showModal)), }));
    const __VLS_33 = __VLS_32({ showModal: ((__VLS_ctx.showModal)), }, ...__VLS_functionalComponentArgsRest(__VLS_32));
    ({}({ showModal: ((__VLS_ctx.showModal)), }));
    // @ts-ignore
    [showModal,];
    const __VLS_36 = __VLS_pickFunctionalComponentCtx(CheckAntiquesModal, __VLS_33);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-10/12'];
        __VLS_styleScopedClasses['max-w-sm'];
        __VLS_styleScopedClasses['mt-8'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-3xl'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['h-96'];
        __VLS_styleScopedClasses['justify-around'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['h-14'];
        __VLS_styleScopedClasses['text-4xl'];
        __VLS_styleScopedClasses['h-14'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                CheckAntiquesModal: CheckAntiquesModal,
                roomId: roomId,
                showModal: showModal,
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
