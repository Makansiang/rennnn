const navigasi =document.querySelector('nav')
const nama =document.querySelector('.nama')
const tombol=document.querySelector('button');
const sidebar =document.querySelector('nav ul');
tombol.addEventListener('click', function(){
    sidebar.classList.toggle('geser');
    tombol.classList.toggle('active');
    navigasi.classList.toggle('warna');
    nama.classList.toggle('nm')
});