(function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports,require("chartist")):"function"==typeof define&&define.amd?define(["exports","chartist"],b):b(a.VueChartist={},a.chartist)})(this,function(a,b){"use strict";/* component normalizer */ /* component normalizer */ /* component normalizer */var c={props:{data:{type:Object,required:!0},options:{type:Object,default:function(){return{}}},responsiveOptions:{type:Array,default:function(){return[]}}},methods:{init:function(){this.pie=new b.Pie(this.$refs.pie,this.data,this.options,this.responsiveOptions)}},render:function(a){return a("div",{ref:"pie"})},created:function(){this.pie=null},mounted:function(){"undefined"!=typeof this.data&&this.init()},beforeDestroy:function(){null!=this.pie&&this.pie.detach()}},d=function(a,b,c,d,e){var f=("function"==typeof c?c.options:c)||{};// For security concerns, we use only base name in production mode.
return f.__file="/Users/hadefication/Packages/vue-chartist/src/components/Pie.vue",f.render||(f.render=a.render,f.staticRenderFns=a.staticRenderFns,f._compiled=!0,e&&(f.functional=!0)),f._scopeId=d,f}/* style inject */ /* style inject SSR */({},void 0,c,void 0,void 0,void 0,void 0,void 0),e={props:{data:{type:Object,required:!0},options:{type:Object,default:function(){return{}}}},methods:{init:function(){this.bar=new b.Bar(this.$refs.bar,this.data,this.options)}},render:function(a){return a("div",{ref:"bar"})},created:function(){this.bar=null},mounted:function(){"undefined"!=typeof this.data&&this.init()},beforeDestroy:function(){null!=this.bar&&this.bar.detach()}},f=function(a,b,c,d,e){var f=("function"==typeof c?c.options:c)||{};// For security concerns, we use only base name in production mode.
return f.__file="/Users/hadefication/Packages/vue-chartist/src/components/Bar.vue",f.render||(f.render=a.render,f.staticRenderFns=a.staticRenderFns,f._compiled=!0,e&&(f.functional=!0)),f._scopeId=d,f}/* style inject */ /* style inject SSR */({},void 0,e,void 0,void 0,void 0,void 0,void 0),g={props:{data:{type:Object,required:!0},options:{type:Object,default:function(){return{fullWidth:!0,chartPadding:{right:40}}}}},methods:{init:function(){this.line=new b.Line(this.$refs.line,this.data,this.options)}},render:function(a){return a("div",{ref:"line"})},created:function(){this.line=null},mounted:function(){"undefined"!=typeof this.data&&this.init()},beforeDestroy:function(){null!=this.line&&this.line.detach()}},h=function(a,b,c,d,e){var f=("function"==typeof c?c.options:c)||{};// For security concerns, we use only base name in production mode.
return f.__file="/Users/hadefication/Packages/vue-chartist/src/components/Line.vue",f.render||(f.render=a.render,f.staticRenderFns=a.staticRenderFns,f._compiled=!0,e&&(f.functional=!0)),f._scopeId=d,f}/* style inject */ /* style inject SSR */({},void 0,g,void 0,void 0,void 0,void 0,void 0),i=function(a){i.installed||(i.installed=!0,a.component("BarChart",f),a.component("PieChart",d),a.component("LineChart",h))},j=null;/* script */"undefined"==typeof window?"undefined"!=typeof global&&(j=global.Vue):j=window.Vue,j&&j.use({install:i});a.PieChart=d,a.BarChart=f,a.LineChart=h,a.default={install:i},Object.defineProperty(a,"__esModule",{value:!0})});
