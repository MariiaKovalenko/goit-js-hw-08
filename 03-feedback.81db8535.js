!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},t.parcelRequired7c6=a);var n,l=a("eaxEB"),u="feedback-form-state",i={email:" ",message:" "},f={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form  input"),textarea:document.querySelector(".feedback-form  textarea")};f.form.addEventListener("input",e(l)((function(e){i[e.target.name]=e.target.value,localStorage.setItem(u,JSON.stringify(i))}),500)),f.form.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem(u));console.log(t),e.currentTarget.reset(),localStorage.removeItem(u),i={}})),(n=localStorage.getItem(u))&&(i=JSON.parse(n),console.log(i),f.input.value=i.email,f.textarea.value=i.message)}();
//# sourceMappingURL=03-feedback.81db8535.js.map
