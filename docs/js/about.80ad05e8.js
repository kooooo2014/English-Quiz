(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{4622:function(t,c,s){},"68dc":function(t,c,s){},"78c1":function(t,c,s){"use strict";s.r(c);var e=function(){var t=this,c=t.$createElement,s=t._self._c||c;return s("div",{staticClass:"test"},[s("div",{staticClass:"container"},[t.test_countup<=t.test_counts?s("Question",{attrs:{test_countup:t.test_countup,choice1:t.questions[t.tests[t.test_countup-1]].choice1,choice2:t.questions[t.tests[t.test_countup-1]].choice2},on:{nextQuestion:t.next}}):s("Result",{attrs:{correct_count:t.results_correct,wrong_count:t.results_wrong,count_all:t.test_counts}})],1)])},i=[];s("caad");function n(t,c){for(var s=[],e=0;e<t;e++){var i=Math.floor(Math.random()*c);s.includes(i)?e--:s.push(i)}return s}var o=n,u=function(){var t=this,c=t.$createElement,e=t._self._c||c;return e("div",{staticClass:"question"},[e("p",{staticClass:"counts"},[t._v(t._s(t.test_countup)+"/20")]),e("div",{staticClass:"audio"},[e("svg",{attrs:{version:"1.1",id:"_x32_",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"},on:{click:t.speak}},[e("g",[e("path",{staticClass:"st0",attrs:{d:"M256,0C114.625,0,0,114.625,0,256c0,141.374,114.625,256,256,256c141.374,0,256-114.626,256-256\n                      C512,114.625,397.374,0,256,0z M351.062,258.898l-144,85.945c-1.031,0.626-2.344,0.657-3.406,0.031\n                      c-1.031-0.594-1.687-1.702-1.687-2.937v-85.946v-85.946c0-1.218,0.656-2.343,1.687-2.938c1.062-0.609,2.375-0.578,3.406,0.031\n                      l144,85.962c1.031,0.586,1.641,1.718,1.641,2.89C352.703,257.187,352.094,258.297,351.062,258.898z"}})])])]),"text"!=t.status?e("div",{staticClass:"next"},[e("p",{on:{click:t.next}},[t._v("next")]),e("img",{attrs:{src:s("ff95")},on:{click:t.next}})]):e("div",{staticClass:"not-next"}),"text"==t.status?e("div",{class:t.status},[t._v("正解を選んでください")]):"correct"==t.status?e("div",{class:t.status},[t._v("〇 正解は"+t._s(t.answer)+"です！")]):e("div",{class:t.status},[t._v("✕ 正解は"+t._s(t.answer)+"です...")]),e("div",{staticClass:"buttons"},[e("button",{class:t.isButtonClick,attrs:{disabled:t.isclick},on:{click:t.button1}},[t._v(t._s(t.choice1))]),e("button",{class:t.isButtonClick,attrs:{disabled:t.isclick},on:{click:t.button2}},[t._v(t._s(t.choice2))])])])},r=[],a={name:"Question",data:function(){return{status:"text",correct_bgm:new Audio(s("ed91")),wrong_bgm:new Audio(s("9508")),isclick:!1,isButtonClick:"blue-button",randomChoice:0}},props:["choice1","choice2","test_countup"],watch:{choice1:function(){this.randomChoice=Math.floor(2*Math.random())}},computed:{voiceUrl:function(){return 0==this.randomChoice?"/voice/"+this.choice1+".mp3":"/voice/"+this.choice2+".mp3"},answer:function(){return 0==this.randomChoice?this.choice1:this.choice2}},methods:{speak:function(){var t=new SpeechSynthesisUtterance;0==this.randomChoice?t.text=this.choice1:t.text=this.choice2,t.lang="en-US",speechSynthesis.speak(t)},button1:function(){0==this.randomChoice?(this.status="correct",this.correct_sound()):(this.status="wrong",this.wrong_sound()),this.isclick=!0,this.isButtonClick="disabled-blue-button"},button2:function(){0==this.randomChoice?(this.status="wrong",this.wrong_sound()):(this.status="correct",this.correct_sound()),this.isclick=!0,this.isButtonClick="disabled-blue-button"},correct_sound:function(){this.correct_bgm.play()},wrong_sound:function(){this.wrong_bgm.play()},next:function(){"wrong"==this.status?this.$emit("nextQuestion","✕"):"correct"==this.status&&this.$emit("nextQuestion","〇"),this.status="text",this.isclick=!1,this.isButtonClick="blue-button"}}},h=a,d=(s("a4e7"),s("2877")),l=Object(d["a"])(h,u,r,!1,null,"3f97f4d4",null),w=l.exports,A=s("eeac"),f={name:"Test",components:{Question:w,Result:A["a"]},data:function(){return{questions:[{id:1,choice1:"play",choice2:"pray"},{id:2,choice1:"light",choice2:"right"},{id:3,choice1:"lice",choice2:"rice"},{id:4,choice1:"liver",choice2:"river"},{id:5,choice1:"fly",choice2:"fry"},{id:6,choice1:"flight",choice2:"fright"},{id:7,choice1:"love",choice2:"rub"},{id:8,choice1:"elect",choice2:"erect"},{id:9,choice1:"flea",choice2:"frea"},{id:10,choice1:"alive",choice2:"arrive"},{id:11,choice1:"allow",choice2:"arrow"},{id:12,choice1:"bleed",choice2:"breed"},{id:13,choice1:"glow",choice2:"grow"},{id:14,choice1:"glass",choice2:"grass"},{id:15,choice1:"load",choice2:"road"},{id:16,choice1:"elect",choice2:"erect"},{id:17,choice1:"lace",choice2:"race"},{id:18,choice1:"blue",choice2:"brew"},{id:19,choice1:"blanch",choice2:"branch"},{id:20,choice1:"bleak",choice2:"break"}],test_countup:1,test_counts:20,tests:[],results:[],results_correct:0,results_wrong:0}},computed:{},created:function(){this.tests=o(this.test_counts,this.questions.length)},methods:{next:function(t){this.results.push(t),this.test_countup++,"〇"===t?this.results_correct++:"✕"===t&&this.results_wrong++}}},g=f,b=(s("a084"),Object(d["a"])(g,e,i,!1,null,"42b3fc2e",null));c["default"]=b.exports},9508:function(t,c,s){t.exports=s.p+"media/Wrong_Buzzer.09ba9a63.mp3"},a084:function(t,c,s){"use strict";s("4622")},a4e7:function(t,c,s){"use strict";s("68dc")},caad:function(t,c,s){"use strict";var e=s("23e7"),i=s("4d64").includes,n=s("d039"),o=s("44d2"),u=n((function(){return!Array(1).includes()}));e({target:"Array",proto:!0,forced:u},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},ed91:function(t,c,s){t.exports=s.p+"media/Correct_Answer.992f2d67.mp3"},ff95:function(t,c){t.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=about.80ad05e8.js.map