import { db } from "@/firebaseConfig";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { collection, query, where, getDocs } from "firebase/firestore";
import { NInput, NButton } from "naive-ui";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const router = useRouter();
const path = "/Mystery-of-Antiques-bg";
const data = ref("");
const roomId = ref();
const joinRoom = async () => {
    if (roomId.value) {
        const q = query(collection(db, "rooms"), where("roomId", "==", roomId.value));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            router.push(`${path}/room/${roomId.value}`);
        }
        else {
            alert("房間不存在！");
        }
    }
    else {
        alert("請輸入房間號！");
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col items-center") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .NInput;
    ({}.NInput);
    __VLS_components.NInput;
    __VLS_components.nInput;
    // @ts-ignore
    [NInput,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ size: ("large"), ...{ class: ("max-w-56 block") }, value: ((__VLS_ctx.roomId)), placeholder: ("輸入房間ID"), }));
    const __VLS_2 = __VLS_1({ size: ("large"), ...{ class: ("max-w-56 block") }, value: ((__VLS_ctx.roomId)), placeholder: ("輸入房間ID"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ size: ("large"), ...{ class: ("max-w-56 block") }, value: ((__VLS_ctx.roomId)), placeholder: ("輸入房間ID"), }));
    // @ts-ignore
    [roomId,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    // @ts-ignore
    const __VLS_6 = {}
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onClick': {} }, ...{ class: ("text-8xl h-fit") }, type: ("info"), }));
    const __VLS_8 = __VLS_7({ ...{ 'onClick': {} }, ...{ class: ("text-8xl h-fit") }, type: ("info"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onClick': {} }, ...{ class: ("text-8xl h-fit") }, type: ("info"), }));
    let __VLS_12;
    const __VLS_13 = {
        onClick: (__VLS_ctx.joinRoom)
    };
    // @ts-ignore
    [joinRoom,];
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    let __VLS_9;
    let __VLS_10;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['max-w-56'];
        __VLS_styleScopedClasses['block'];
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
                NInput: NInput,
                NButton: NButton,
                roomId: roomId,
                joinRoom: joinRoom,
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
