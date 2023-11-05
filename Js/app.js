
$(function(){

 let hideBtn = $(".hide")
 let showBtn = $(".show")
 let toggleBtn = $(".toggle")
 let box = $('.box')


 hideBtn.click(() => {
     box.hide(500)
 })



 showBtn.click(() => {
    box.show(800)
 })


toggleBtn.click(() => {
    box.toggle(900)
 })

let navBTn = $("nav button")
let sidebarBtn = $(".side")
let btn = $(".Btn")

navBTn.click(() =>{
    btn.toggleClass('active')
    sidebarBtn.toggleClass('active')
    navBTn.toggleClass('is-active')
})



$(window). on('load',() =>{
    $('.preloader').fadeOut(3000)
})


})