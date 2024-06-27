const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// import { defineModel } from "vue";
const showModal = defineModel("showModal");
const __VLS_fnComponent = (await import('vue')).defineComponent({
    emits: {},
});
let __VLS_functionalComponentProps;
const __VLS_defaults = {};
const __VLS_modelEmitsType = (await import('vue')).defineEmits();
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    const __VLS_0 = {}
        .NModal;
    ({}.NModal);
    ({}.NModal);
    __VLS_components.NModal;
    __VLS_components.nModal;
    __VLS_components.NModal;
    __VLS_components.nModal;
    // @ts-ignore
    [NModal, NModal,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ show: ((__VLS_ctx.showModal)), maskClosable: ((true)), }));
    const __VLS_2 = __VLS_1({ show: ((__VLS_ctx.showModal)), maskClosable: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ show: ((__VLS_ctx.showModal)), maskClosable: ((true)), }));
    // @ts-ignore
    const __VLS_6 = {}
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ style: ({}) }, title: ("Modal"), bordered: ((false)), size: ("huge"), role: ("dialog"), "aria-modal": ("true"), }));
    const __VLS_8 = __VLS_7({ ...{ style: ({}) }, title: ("Modal"), bordered: ((false)), size: ("huge"), role: ("dialog"), "aria-modal": ("true"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ style: ({}) }, title: ("Modal"), bordered: ((false)), size: ("huge"), role: ("dialog"), "aria-modal": ("true"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_11.slots)["header-extra"];
        // @ts-ignore
        [showModal,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_11.slots).footer;
    }
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                showModal: showModal,
            };
        },
        props: {},
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
;
