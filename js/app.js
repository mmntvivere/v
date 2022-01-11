$(function(){
    $('#aboutW').draggable({
        containment: 'parent'
    });
    $('#diemW').draggable({
        containment: 'parent'
    });
    $('#noctemW').draggable({
        containment: 'parent'
    });
    $('#contactsW').draggable({
        containment: 'parent'
    });
    $('#faqsW').draggable({
        containment: 'parent'
    });
});

let about = document.getElementById("aboutW");
let diem = document.getElementById("diemW");
let noctem = document.getElementById("noctemW");
let contacts = document.getElementById("contactsW");
let faqs = document.getElementById("faqsW");

function openWindow(window){
    switch(window) {
        case window = 'about':
            about.style.width = '30em' ;
            about.style.zIndex = 1;
            break;
        case window = 'diem':
            diem.style.width = '35em';
            diem.style.zIndex = 1;
            break;
        case window = 'noctem':
            noctem.style.width = '35em';
            noctem.style.zIndex = 1;
            break;
        case window = 'contacts':
            contacts.style.width = '21em'
            contacts.style.zIndex = 1;
            break;
        case window = 'faqs':
            faqs.style.width = '24em'
            faqs.style.zIndex = 1;
            break;
        default:
          // code block
    }
};

function closeWindow(window){
    switch(window) {
        case window = 'about':
            about.style.zIndex = -1;
            about.style.left = 0;
            about.style.top = 0;
            about.style.width = 0;
            break;
        case window = 'diem':
            diem.style.zIndex = -1;
            diem.style.left = 0;
            diem.style.top = 0;
            diem.style.width = 0;
            break;
        case window = 'noctem':
            noctem.style.zIndex = -1;
            noctem.style.left = 0;
            noctem.style.top = 0;
            noctem.style.width = 0;
            break;
        case window = 'contacts':
            contacts.style.zIndex = -1;
            contacts.style.left = 0;
            contacts.style.top = 0;
            contacts.style.width = 0;
            break;
        case window = 'faqs':
            faqs.style.zIndex = -1;
            faqs.style.left = 0;
            faqs.style.top = 0;
            faqs.style.width = 0;
            break;
        default:
          // code block
    }
};

