import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as y}from"./assets/vendor-77e16229.js";const c=document.getElementById("datetime-picker"),s=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),E=document.querySelector("[data-minutes]"),b=document.querySelector("[data-seconds]");let d=null,i=null;const w={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=t[0];e<=new Date?(iziToast.error({title:"Error",message:"Please choose a date in the future"}),s.disabled=!0):(d=e,s.disabled=!1)}};y(c,w);s.addEventListener("click",()=>{d&&(s.disabled=!0,c.disabled=!0,i=setInterval(()=>{const e=d-new Date;if(e<=0){clearInterval(i),l(0,0,0,0),c.disabled=!1;return}const{days:n,hours:o,minutes:u,seconds:a}=D(e);l(n,o,u,a)},1e3))});function l(t,e,n,o){S.textContent=r(t),p.textContent=r(e),E.textContent=r(n),b.textContent=r(o)}function r(t){return String(t).padStart(2,"0")}function D(t){const a=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:m,minutes:f,seconds:h}}
//# sourceMappingURL=commonHelpers.js.map
