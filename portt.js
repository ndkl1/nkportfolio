const primaryNav=document.querySelector('.primary-navigation');
const navTag=document.querySelector('.mobile-nav-tag');

navTag.addEventListener('click',()=>{
    const visibility=primaryNav.getAttribute('data-visible')

    if (visibility==='false'){
        primaryNav.setAttribute('data-visible', true);
        navTag.setAttribute('aria-expanded', true);
    }
    else if (visibility==="true"){
        primaryNav.setAttribute('data-visible', false);
        navTag.setAttribute('aria-expanded', false);
    }
});