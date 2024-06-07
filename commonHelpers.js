import{a as b,i as u,S as L}from"./assets/vendor-ee72e1a4.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const v="43230635-158e2f6795128fbec19d81d21",w="https://pixabay.com/api/";async function f(e,a=1){try{const{data:i}=await b(`${w}`,{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:a}});return i}catch{return u.error({title:"Error",position:"topRight",message:"Failed to fetch images. Please try again later."}),null}}let S=new L(".gallery a",{captionsData:"alt",captionDelay:150,captionPosition:"bottom",widthRatio:.9,heightRatio:.8});function h(e){const a=document.querySelector(".gallery"),i=e.map(({webformatURL:l,largeImageURL:t,tags:r,likes:n,views:p,comments:y,downloads:m})=>`
  
        <div class="gallery-card">
            <li class="gallery-items">
                <a href="${t}">
                <img src="${l}" alt="${r}" class="gallery-img"></a>
                <div class="card-text-div">
                    <ul class="card-text-list">
                        <li class="card-text">
                            <h2>Likes</h2>
                            <p>${n}</p>
                        </li>
                        <li class="card-text">
                            <h2>Views</h2>
                            <p>${p}</p>
                        </li>
                        <li class="card-text">
                            <h2>Comments</h2>
                            <p>${y}</p>
                        </li>
                        <li class="card-text">
                            <h2>Downloads</h2>
                            <p>${m}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>`).join("");a.insertAdjacentHTML("beforeend",i),S.refresh()}const g=document.querySelector(".search-form"),q=document.querySelector(".gallery"),s=document.querySelector(".loader"),o=document.querySelector(".load-btn");let c="",d=1;g.addEventListener("submit",R);s.hidden=!0;o.hidden=!0;async function R(e){e.preventDefault(),s.hidden=!1;const{searchRequest:a}=e.currentTarget.elements;if(c=a.value.trim(),!c){u.warning({title:"",position:"topRight",message:"Start typing in"}),s.hidden=!0;return}q.innerHTML="",d=1;try{const i=await f(c);if(!i)return;i.total?(h(i.hits),i.totalHits>15?o.hidden=!1:o.hidden=!0):(u.error({title:"Error",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}),o.hidden=!0)}finally{s.hidden=!0}g.reset()}o.addEventListener("click",x);async function x(){d+=1,o.disabled=!0,s.hidden=!1;try{const e=await f(c,d);e&&e.hits.length>0&&h(e.hits),d*15>=e.totalHits?(o.hidden=!0,u.info({title:"End of results",position:"bottomRight",message:"We're sorry, but you've reached the end of search results!"})):o.hidden=!1,o.disabled=!1,$()}catch(e){alert(e.message)}finally{s.hidden=!0}}function P(){const e=document.querySelector(".gallery-card");return e?e.getBoundingClientRect().height:0}function $(){const e=P();e>0&&window.scrollBy({top:e*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
