import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { db } from "@/firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const route = useRoute();
const router = useRouter();
const path = "/Mystery-of-Antiques-bg";
const roomId = ref();
roomId.value = route.params.roomId;
const characterOptions = [
    { label: "老朝奉", value: "HuangYanyan" },
    { label: "藥不然", value: "KidoKana" },
    { label: "鄭國渠", value: "JiYunfu" },
    { label: "許願", value: "FangZhen" },
    { label: "方震", value: "MakeAWish" },
    { label: "姬雲浮", value: "ZhengGuoqu" },
    { label: "木戶加奈", value: "MedicineIsNot" },
    { label: "黃煙煙", value: "LaoChaofeng" },
];
const initialBasicForm = {
    name: null,
    character: null,
};
const basicForm = ref({ ...initialBasicForm });
const basicRules = {
    name: {
        required: true,
        trigger: ["blur", "input", "change"],
        type: "string",
        validator: (rule, value) => {
            if (value === null || value === undefined || value === "") {
                return Promise.reject("必填");
            }
            return Promise.resolve();
        },
    },
    character: {
        required: true,
        trigger: ["blur", "input", "change"],
        type: "string",
        validator: (rule, value) => {
            if (value === null || value === undefined || value === "") {
                return Promise.reject("必填");
            }
            return Promise.resolve();
        },
    },
};
const host = computed(() => {
    if (route.query.host === "1")
        return true;
    return false;
});
const start = computed(() => {
    return host.value ? "開始遊戲" : "加入遊戲";
});
const handleSubmit = async () => {
    try {
        const roomRef = doc(db, "rooms", roomId.value);
        const playerInfo = {
            host: host.value,
            character: basicForm.value.character,
        };
        await setDoc(doc(roomRef, "players", basicForm.value.name), playerInfo);
        router.push({
            path: `${path}/game/${roomId.value}`,
            query: { host: host.value ? 1 : 0, player: basicForm.value.name },
        });
    }
    catch (err) { }
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-10/12 max-w-sm mt-8 mx-auto text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-3xl") }, });
    (__VLS_ctx.roomId);
    // @ts-ignore
    [roomId,];
    // @ts-ignore
    const __VLS_0 = {}
        .NCard;
    ({}.NCard);
    ({}.NCard);
    __VLS_components.NCard;
    __VLS_components.nCard;
    __VLS_components.NCard;
    __VLS_components.nCard;
    // @ts-ignore
    [NCard, NCard,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ title: ("玩家資料"), ...{ class: ("mt-8") }, }));
    const __VLS_2 = __VLS_1({ title: ("玩家資料"), ...{ class: ("mt-8") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ title: ("玩家資料"), ...{ class: ("mt-8") }, }));
    // @ts-ignore
    const __VLS_6 = {}
        .NForm;
    ({}.NForm);
    ({}.NForm);
    __VLS_components.NForm;
    __VLS_components.nForm;
    __VLS_components.NForm;
    __VLS_components.nForm;
    // @ts-ignore
    [NForm, NForm,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("text-center") }, ref: ("basicFormRef"), requireMarkPlacement: ("left"), rules: ((__VLS_ctx.basicRules)), model: ((__VLS_ctx.basicForm)), }));
    const __VLS_8 = __VLS_7({ ...{ class: ("text-center") }, ref: ("basicFormRef"), requireMarkPlacement: ("left"), rules: ((__VLS_ctx.basicRules)), model: ((__VLS_ctx.basicForm)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("text-center") }, ref: ("basicFormRef"), requireMarkPlacement: ("left"), rules: ((__VLS_ctx.basicRules)), model: ((__VLS_ctx.basicForm)), }));
    // @ts-ignore
    (__VLS_ctx.basicFormRef);
    // @ts-ignore
    const __VLS_12 = {}
        .NFormItem;
    ({}.NFormItem);
    ({}.NFormItem);
    __VLS_components.NFormItem;
    __VLS_components.nFormItem;
    __VLS_components.NFormItem;
    __VLS_components.nFormItem;
    // @ts-ignore
    [NFormItem, NFormItem,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ path: ("name"), label: ("玩家暱稱"), }));
    const __VLS_14 = __VLS_13({ path: ("name"), label: ("玩家暱稱"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ path: ("name"), label: ("玩家暱稱"), }));
    // @ts-ignore
    const __VLS_18 = {}
        .NInput;
    ({}.NInput);
    __VLS_components.NInput;
    __VLS_components.nInput;
    // @ts-ignore
    [NInput,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: ("w-full") }, showButton: ((false)), value: ((__VLS_ctx.basicForm.name)), placeholder: ("請填參與玩家都知道的暱稱"), }));
    const __VLS_20 = __VLS_19({ ...{ class: ("w-full") }, showButton: ((false)), value: ((__VLS_ctx.basicForm.name)), placeholder: ("請填參與玩家都知道的暱稱"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ ...{ class: ("w-full") }, showButton: ((false)), value: ((__VLS_ctx.basicForm.name)), placeholder: ("請填參與玩家都知道的暱稱"), }));
    // @ts-ignore
    [basicRules, basicForm, basicForm, basicFormRef,];
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    const __VLS_24 = {}
        .NFormItem;
    ({}.NFormItem);
    ({}.NFormItem);
    __VLS_components.NFormItem;
    __VLS_components.nFormItem;
    __VLS_components.NFormItem;
    __VLS_components.nFormItem;
    // @ts-ignore
    [NFormItem, NFormItem,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ path: ("character"), label: ("角色"), }));
    const __VLS_26 = __VLS_25({ path: ("character"), label: ("角色"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ path: ("character"), label: ("角色"), }));
    // @ts-ignore
    const __VLS_30 = {}
        .NSelect;
    ({}.NSelect);
    __VLS_components.NSelect;
    __VLS_components.nSelect;
    // @ts-ignore
    [NSelect,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("w-full") }, value: ((__VLS_ctx.basicForm.character)), options: ((__VLS_ctx.characterOptions)), placeholder: ("選取抽到的角色"), }));
    const __VLS_32 = __VLS_31({ ...{ class: ("w-full") }, value: ((__VLS_ctx.basicForm.character)), options: ((__VLS_ctx.characterOptions)), placeholder: ("選取抽到的角色"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ ...{ class: ("w-full") }, value: ((__VLS_ctx.basicForm.character)), options: ((__VLS_ctx.characterOptions)), placeholder: ("選取抽到的角色"), }));
    // @ts-ignore
    [basicForm, characterOptions,];
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("flex gap-2 flex-wrap mt-2 justify-center") }, });
    // @ts-ignore
    const __VLS_36 = {}
        .RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ to: ("/"), ...{ class: ("underline") }, }));
    const __VLS_38 = __VLS_37({ to: ("/"), ...{ class: ("underline") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ to: ("/"), ...{ class: ("underline") }, }));
    // @ts-ignore
    const __VLS_42 = {}
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
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ size: ("large"), }));
    const __VLS_44 = __VLS_43({ size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ size: ("large"), }));
    (__VLS_47.slots).default;
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    (__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    // @ts-ignore
    const __VLS_48 = {}
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
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, size: ("large"), type: ("primary"), }));
    const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, size: ("large"), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({ ...{ 'onClick': {} }, size: ("large"), type: ("primary"), }));
    let __VLS_54;
    const __VLS_55 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleSubmit();
            // @ts-ignore
            [handleSubmit,];
        }
    };
    (__VLS_ctx.start);
    // @ts-ignore
    [start,];
    (__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    let __VLS_51;
    let __VLS_52;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-10/12'];
        __VLS_styleScopedClasses['max-w-sm'];
        __VLS_styleScopedClasses['mt-8'];
        __VLS_styleScopedClasses['mx-auto'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['text-3xl'];
        __VLS_styleScopedClasses['mt-8'];
        __VLS_styleScopedClasses['text-center'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-2'];
        __VLS_styleScopedClasses['flex-wrap'];
        __VLS_styleScopedClasses['mt-2'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['underline'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                roomId: roomId,
                characterOptions: characterOptions,
                basicForm: basicForm,
                basicRules: basicRules,
                start: start,
                handleSubmit: handleSubmit,
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
