import{a as L,i as u,S as b}from"./assets/vendor-ee72e1a4.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const w="43230635-158e2f6795128fbec19d81d21",S="https://pixabay.com/api/";async function f(e,i=1){try{const{data:a}=await L(`${S}`,{params:{key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:i}});return a}catch{return u.error({title:"Error",position:"topRight",message:"Failed to fetch images. Please try again later."}),null}}let q=new b(".gallery a",{captionsData:"alt",captionDelay:150,captionPosition:"bottom",widthRatio:.9,heightRatio:.8});function h(e){const i=document.querySelector(".gallery"),a=e.map(({webformatURL:n,largeImageURL:t,tags:r,likes:o,views:p,comments:g,downloads:m})=>`
  
        <div class="gallery-card">
            <li class="gallery-items">
                <a href="${t}">
                <img src="${n}" alt="${r}" class="gallery-img"></a>
                <div class="card-text-div">
                    <ul class="card-text-list">
                        <li class="card-text">
                            <h2>Likes</h2>
                            <p>${o}</p>
                        </li>
                        <li class="card-text">
                            <h2>Views</h2>
                            <p>${p}</p>
                        </li>
                        <li class="card-text">
                            <h2>Comments</h2>
                            <p>${g}</p>
                        </li>
                        <li class="card-text">
                            <h2>Downloads</h2>
                            <p>${m}</p>
                        </li>
                    </ul>
                </div>
                
            </li>
        </div>`).join("");i.insertAdjacentHTML("beforeend",a),q.refresh()}const y=document.querySelector(".search-form"),v=document.querySelector(".gallery"),l=document.querySelector(".loader"),s=document.querySelector(".load-btn");let d="",c=1;y.addEventListener("submit",x);l.hidden=!0;s.hidden=!0;async function x(e){e.preventDefault(),v.innerHTML="",l.hidden=!1;const{searchRequest:i}=e.currentTarget.elements;d=i.value,c=1;try{const a=await f(d);if(!a)return;a.total?(h(a.hits),a.totalHits>15?s.hidden=!1:s.hidden=!0):(u.error({title:"Error",position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}),s.hidden=!0)}finally{l.hidden=!0}y.reset()}s.addEventListener("click",P);async function P(){c+=1,s.disabled=!0,l.hidden=!1;try{const e=await f(d,c);e&&e.hits.length>0&&h(e.hits),c*15>=e.totalHits?s.hidden=!0:s.hidden=!1,s.disabled=!1,$()}catch(e){alert(e.message)}finally{l.hidden=!0}}function R(){const e=document.querySelector(".gallery-card");return e?e.getBoundingClientRect().height:0}function $(){const e=R();e>0&&window.scrollBy(0,e*2)}
//# sourceMappingURL=commonHelpers.js.map
