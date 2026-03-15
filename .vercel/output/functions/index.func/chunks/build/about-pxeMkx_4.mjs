import { _ as _sfc_main$2 } from './PageHero-DwodRroo.mjs';
import { defineComponent, ref, mergeProps, withCtx, createVNode, unref, useSlots, useModel, computed, renderSlot, openBlock, createBlock, Fragment, renderList, createCommentVNode, createTextVNode, toDisplayString, mergeModels, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { Primitive, Separator } from 'reka-ui';
import { a as useAppConfig, b as useComponentUI, t as tv, g as get, c as _sfc_main$b } from './server.mjs';
import './Container-CiACrIZ8.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'vue-router';
import '@iconify/vue';
import 'tailwindcss/colors';
import '@vueuse/core';
import 'tailwind-variants';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const theme = {
  "slots": {
    "root": "flex gap-1.5",
    "item": "group relative flex flex-1 gap-3",
    "container": "relative flex items-center gap-1.5",
    "indicator": "group-data-[state=completed]:text-inverted group-data-[state=active]:text-inverted text-muted",
    "separator": "flex-1 rounded-full bg-elevated",
    "wrapper": "w-full",
    "date": "text-dimmed text-xs/5",
    "title": "font-medium text-highlighted text-sm",
    "description": "text-muted text-wrap text-sm"
  },
  "variants": {
    "orientation": {
      "horizontal": {
        "root": "flex-row w-full",
        "item": "flex-col",
        "separator": "h-0.5"
      },
      "vertical": {
        "root": "flex-col",
        "container": "flex-col",
        "separator": "w-0.5"
      }
    },
    "color": {
      "primary": {
        "indicator": "group-data-[state=completed]:bg-primary group-data-[state=active]:bg-primary"
      },
      "secondary": {
        "indicator": "group-data-[state=completed]:bg-secondary group-data-[state=active]:bg-secondary"
      },
      "success": {
        "indicator": "group-data-[state=completed]:bg-success group-data-[state=active]:bg-success"
      },
      "info": {
        "indicator": "group-data-[state=completed]:bg-info group-data-[state=active]:bg-info"
      },
      "warning": {
        "indicator": "group-data-[state=completed]:bg-warning group-data-[state=active]:bg-warning"
      },
      "error": {
        "indicator": "group-data-[state=completed]:bg-error group-data-[state=active]:bg-error"
      },
      "neutral": {
        "indicator": "group-data-[state=completed]:bg-inverted group-data-[state=active]:bg-inverted"
      }
    },
    "size": {
      "3xs": "",
      "2xs": "",
      "xs": "",
      "sm": "",
      "md": "",
      "lg": "",
      "xl": "",
      "2xl": "",
      "3xl": ""
    },
    "reverse": {
      "true": ""
    }
  },
  "compoundVariants": [
    {
      "color": "primary",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-primary"
      }
    },
    {
      "color": "secondary",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-secondary"
      }
    },
    {
      "color": "success",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-success"
      }
    },
    {
      "color": "info",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-info"
      }
    },
    {
      "color": "warning",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-warning"
      }
    },
    {
      "color": "error",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-error"
      }
    },
    {
      "color": "primary",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-primary group-data-[state=completed]:bg-primary"
      }
    },
    {
      "color": "secondary",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-secondary group-data-[state=completed]:bg-secondary"
      }
    },
    {
      "color": "success",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-success group-data-[state=completed]:bg-success"
      }
    },
    {
      "color": "info",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-info group-data-[state=completed]:bg-info"
      }
    },
    {
      "color": "warning",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-warning group-data-[state=completed]:bg-warning"
      }
    },
    {
      "color": "error",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-error group-data-[state=completed]:bg-error"
      }
    },
    {
      "color": "neutral",
      "reverse": false,
      "class": {
        "separator": "group-data-[state=completed]:bg-inverted"
      }
    },
    {
      "color": "neutral",
      "reverse": true,
      "class": {
        "separator": "group-data-[state=active]:bg-inverted group-data-[state=completed]:bg-inverted"
      }
    },
    {
      "orientation": "horizontal",
      "size": "3xs",
      "class": {
        "wrapper": "pe-4.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xs",
      "class": {
        "wrapper": "pe-5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xs",
      "class": {
        "wrapper": "pe-5.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "sm",
      "class": {
        "wrapper": "pe-6"
      }
    },
    {
      "orientation": "horizontal",
      "size": "md",
      "class": {
        "wrapper": "pe-6.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "lg",
      "class": {
        "wrapper": "pe-7"
      }
    },
    {
      "orientation": "horizontal",
      "size": "xl",
      "class": {
        "wrapper": "pe-7.5"
      }
    },
    {
      "orientation": "horizontal",
      "size": "2xl",
      "class": {
        "wrapper": "pe-8"
      }
    },
    {
      "orientation": "horizontal",
      "size": "3xl",
      "class": {
        "wrapper": "pe-8.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "3xs",
      "class": {
        "wrapper": "-mt-0.5 pb-4.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "2xs",
      "class": {
        "wrapper": "pb-5"
      }
    },
    {
      "orientation": "vertical",
      "size": "xs",
      "class": {
        "wrapper": "mt-0.5 pb-5.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "sm",
      "class": {
        "wrapper": "mt-1 pb-6"
      }
    },
    {
      "orientation": "vertical",
      "size": "md",
      "class": {
        "wrapper": "mt-1.5 pb-6.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "lg",
      "class": {
        "wrapper": "mt-2 pb-7"
      }
    },
    {
      "orientation": "vertical",
      "size": "xl",
      "class": {
        "wrapper": "mt-2.5 pb-7.5"
      }
    },
    {
      "orientation": "vertical",
      "size": "2xl",
      "class": {
        "wrapper": "mt-3 pb-8"
      }
    },
    {
      "orientation": "vertical",
      "size": "3xl",
      "class": {
        "wrapper": "mt-3.5 pb-8.5"
      }
    }
  ],
  "defaultVariants": {
    "size": "md",
    "color": "primary"
  }
};
const _sfc_main$1 = {
  __name: "UTimeline",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    as: { type: null, required: false },
    items: { type: Array, required: true },
    size: { type: null, required: false },
    color: { type: null, required: false },
    orientation: { type: null, required: false, default: "vertical" },
    valueKey: { type: null, required: false, default: "value" },
    defaultValue: { type: [String, Number], required: false },
    reverse: { type: Boolean, required: false },
    class: { type: null, required: false },
    ui: { type: Object, required: false }
  }, {
    "modelValue": { type: [String, Number] },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["select"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const slots = useSlots();
    const modelValue = useModel(__props, "modelValue");
    const appConfig = useAppConfig();
    const uiProp = useComponentUI("timeline", props);
    const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.timeline || {} })({
      orientation: props.orientation,
      size: props.size,
      color: props.color,
      reverse: props.reverse
    }));
    const currentStepIndex = computed(() => {
      const value = modelValue.value ?? props.defaultValue;
      if (typeof value === "string") {
        return props.items.findIndex((item) => get(item, props.valueKey) === value) ?? -1;
      }
      if (props.reverse) {
        return value != null ? props.items.length - 1 - value : -1;
      } else {
        return value ?? -1;
      }
    });
    function getItemState(index) {
      if (currentStepIndex.value === -1) return void 0;
      if (index === currentStepIndex.value) return "active";
      if (props.reverse) {
        return index > currentStepIndex.value ? "completed" : void 0;
      } else {
        return index < currentStepIndex.value ? "completed" : void 0;
      }
    }
    function onSelect(event, item) {
      emits("select", event, item);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        as: __props.as,
        "data-orientation": __props.orientation,
        "data-slot": "root",
        class: ui.value.root({ class: [unref(uiProp)?.root, props.class] })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.items, (item, index) => {
              _push2(`<div data-slot="item" class="${ssrRenderClass(ui.value.item({ class: [unref(uiProp)?.item, item.ui?.item, item.class] }))}"${ssrRenderAttr("data-state", getItemState(index))}${_scopeId}><div data-slot="container" class="${ssrRenderClass(ui.value.container({ class: [unref(uiProp)?.container, item.ui?.container] }))}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$b, mergeProps({
                size: __props.size,
                icon: item.icon
              }, { ref_for: true }, typeof item.avatar === "object" ? item.avatar : {}, {
                "data-slot": "indicator",
                class: ui.value.indicator({ class: [unref(uiProp)?.indicator, item.ui?.indicator] }),
                ui: { icon: "text-inherit", fallback: "text-inherit" }
              }), {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-indicator` : "indicator", { item }, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, item.slot ? `${item.slot}-indicator` : "indicator", { item })
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              if (index < __props.items.length - 1) {
                _push2(ssrRenderComponent(unref(Separator), {
                  "data-slot": "separator",
                  class: ui.value.separator({ class: [unref(uiProp)?.separator, item.ui?.separator] }),
                  orientation: props.orientation
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-slot="wrapper" class="${ssrRenderClass(ui.value.wrapper({ class: [unref(uiProp)?.wrapper, item.ui?.wrapper] }))}"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-wrapper` : "wrapper", { item }, () => {
                if (item.date || !!slots[item.slot ? `${item.slot}-date` : "date"]) {
                  _push2(`<div data-slot="date" class="${ssrRenderClass(ui.value.date({ class: [unref(uiProp)?.date, item.ui?.date] }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-date` : "date", { item }, () => {
                    _push2(`${ssrInterpolate(item.date)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.title || !!slots[item.slot ? `${item.slot}-title` : "title"]) {
                  _push2(`<div data-slot="title" class="${ssrRenderClass(ui.value.title({ class: [unref(uiProp)?.title, item.ui?.title] }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => {
                    _push2(`${ssrInterpolate(item.title)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (item.description || !!slots[item.slot ? `${item.slot}-description` : "description"]) {
                  _push2(`<div data-slot="description" class="${ssrRenderClass(ui.value.description({ class: [unref(uiProp)?.description, item.ui?.description] }))}"${_scopeId}>`);
                  ssrRenderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => {
                    _push2(`${ssrInterpolate(item.description)}`);
                  }, _push2, _parent2, _scopeId);
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
              }, _push2, _parent2, _scopeId);
              _push2(`</div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.items, (item, index) => {
                return openBlock(), createBlock("div", {
                  key: index,
                  "data-slot": "item",
                  class: ui.value.item({ class: [unref(uiProp)?.item, item.ui?.item, item.class] }),
                  "data-state": getItemState(index),
                  onClick: ($event) => onSelect($event, item)
                }, [
                  createVNode("div", {
                    "data-slot": "container",
                    class: ui.value.container({ class: [unref(uiProp)?.container, item.ui?.container] })
                  }, [
                    createVNode(_sfc_main$b, mergeProps({
                      size: __props.size,
                      icon: item.icon
                    }, { ref_for: true }, typeof item.avatar === "object" ? item.avatar : {}, {
                      "data-slot": "indicator",
                      class: ui.value.indicator({ class: [unref(uiProp)?.indicator, item.ui?.indicator] }),
                      ui: { icon: "text-inherit", fallback: "text-inherit" }
                    }), {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-indicator` : "indicator", { item })
                      ]),
                      _: 2
                    }, 1040, ["size", "icon", "class"]),
                    index < __props.items.length - 1 ? (openBlock(), createBlock(unref(Separator), {
                      key: 0,
                      "data-slot": "separator",
                      class: ui.value.separator({ class: [unref(uiProp)?.separator, item.ui?.separator] }),
                      orientation: props.orientation
                    }, null, 8, ["class", "orientation"])) : createCommentVNode("", true)
                  ], 2),
                  createVNode("div", {
                    "data-slot": "wrapper",
                    class: ui.value.wrapper({ class: [unref(uiProp)?.wrapper, item.ui?.wrapper] })
                  }, [
                    renderSlot(_ctx.$slots, item.slot ? `${item.slot}-wrapper` : "wrapper", { item }, () => [
                      item.date || !!slots[item.slot ? `${item.slot}-date` : "date"] ? (openBlock(), createBlock("div", {
                        key: 0,
                        "data-slot": "date",
                        class: ui.value.date({ class: [unref(uiProp)?.date, item.ui?.date] })
                      }, [
                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-date` : "date", { item }, () => [
                          createTextVNode(toDisplayString(item.date), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      item.title || !!slots[item.slot ? `${item.slot}-title` : "title"] ? (openBlock(), createBlock("div", {
                        key: 1,
                        "data-slot": "title",
                        class: ui.value.title({ class: [unref(uiProp)?.title, item.ui?.title] })
                      }, [
                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-title` : "title", { item }, () => [
                          createTextVNode(toDisplayString(item.title), 1)
                        ])
                      ], 2)) : createCommentVNode("", true),
                      item.description || !!slots[item.slot ? `${item.slot}-description` : "description"] ? (openBlock(), createBlock("div", {
                        key: 2,
                        "data-slot": "description",
                        class: ui.value.description({ class: [unref(uiProp)?.description, item.ui?.description] })
                      }, [
                        renderSlot(_ctx.$slots, item.slot ? `${item.slot}-description` : "description", { item }, () => [
                          createTextVNode(toDisplayString(item.description), 1)
                        ])
                      ], 2)) : createCommentVNode("", true)
                    ])
                  ], 2)
                ], 10, ["data-state", "onClick"]);
              }), 128))
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/@nuxt/ui/dist/runtime/components/Timeline.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + __buildAssetsURL("about-me.DtqE-5pj.JPG");
const aboutMe = "Motivée, dynamique, curieuse et attentive, je suis actuellement étudiante en 3ème année de BUT Métiers du Multimédia et de l'Internet, à l'IUT de Haguenau (Bas-Rhin).                 Je suis actuellement alternante développeuse web front-end chez Logitud Solutions.                 J'ai développé un sens de l'écoute et un esprit créatif grâce à la musique (saxophone), que je pratique depuis plus de 14 ans.";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const itemsSchool = ref([
      {
        date: "Septembre 2023 - Ajourd'hui",
        title: "BUT Métiers du Multimédia et de l'Internet",
        description: "IUT de Haguenau - Parcours : Développement web & Dispositifs Interactifs",
        icon: "i-lucide-laptop"
      },
      {
        date: "Septembre 2020 - Juin 2023",
        title: "Baccalauréat général - Mention Bien",
        description: "Lycée Fustel de Coulanges, Strasbourg - Spécialités : Mathématiques & Physique-Chimie",
        icon: "i-lucide-school"
      },
      {
        date: "2013 - 2024",
        title: "Diplôme du COA (cycle orientation amateur)",
        description: "Cité de la Musique et de la Danse, Strasbourg - Cursus : Saxophone",
        icon: "i-lucide-piano"
      }
    ]);
    const itemsJob = ref([
      {
        date: "Mars 2026 - Aujourd'hui",
        title: "Secrétaire de l'Orchestre d'Harmonie des Jeunes de Strasbourg - OHJS",
        description: "Association - Rédaction de compte-rendu de réunion, participation à l'organisation des événements, chargée de communication.",
        icon: "i-lucide-square-code"
      },
      {
        date: "Septembre 2025 - Aujourd'hui",
        title: "Alternante Développeuse web Front-end & Conceptrice UX",
        description: "Logitud Solutions, Strasbourg - Conception et développement de logiciels métiers pour la fonction publique.",
        icon: "i-lucide-square-code"
      },
      {
        date: "Mars 2025 - Mars 2026",
        title: "Présidente de l'Amicale des Étudiants et des Anciens de l'IUT de Haguenau - AEAIH",
        description: "Association étudiante - Prise de décisions, organisation d'événements...",
        icon: "i-lucide-hand-heart"
      },
      {
        date: "Avril 2025 - Juin 2025",
        title: "Stagiaire Développeuse web Front-end",
        description: "Agence de communication Izhak Interact, Strasbourg - Développement et mise à jour de sites pour de nombreux clients.",
        icon: "i-lucide-square-code"
      },
      {
        date: "Juillet 2023",
        title: "Surveillante de salle",
        description: "Musées de la ville de Strasbourg",
        icon: "i-lucide-landmark"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UPageHero = _sfc_main$2;
      const _component_UTimeline = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full h-full" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UPageHero, {
        title: "A propos de moi",
        description: aboutMe,
        orientation: "horizontal",
        ui: {
          container: "lg:py-32 lg:flex lg:flex-row"
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="about-me" class="rounded-full w-80 aspect-square object-cover"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "about-me",
                class: "rounded-full w-80 aspect-square object-cover"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="grid grid-cols-2 mx-40 gap-30"><div class="flex flex-col gap-5"><h2 class="text-3xl font-bold">Mes expériences pros et associatives</h2>`);
      _push(ssrRenderComponent(_component_UTimeline, { items: unref(itemsJob) }, null, _parent));
      _push(`</div><div class="flex flex-col gap-5"><h2 class="text-3xl font-bold">Mes formations</h2>`);
      _push(ssrRenderComponent(_component_UTimeline, { items: unref(itemsSchool) }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-pxeMkx_4.mjs.map
