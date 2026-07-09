const menuToggle=document.querySelector('.menu-toggle');const navLinks=document.querySelector('.nav-links');if(menuToggle){menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',open?'true':'false');});}document.getElementById('year').textContent=new Date().getFullYear();
// IMPORTANT: Change this to the real appointment email address before publishing.
const appointmentEmail='charity.petpawlor@gmail.com';
const form=document.getElementById('appointmentForm');if(form){form.addEventListener('submit',(e)=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent(`Appointment Request for ${data.get('pet')||'Pet'}`);const body=encodeURIComponent(`Name: ${data.get('name')}
Phone: ${data.get('phone')}
Email: ${data.get('email')}
Pet Name: ${data.get('pet')}
Pet Type/Size: ${data.get('type')}
Preferred Date: ${data.get('date')}
Service: ${data.get('service')}

Notes:
${data.get('notes')}`);window.location.href=`mailto:${appointmentEmail}?subject=${subject}&body=${body}`;});}
