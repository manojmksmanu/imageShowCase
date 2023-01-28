let image=[
{
    img:'https://i.insider.com/5e820b04671de06758588fb8?width=700',
    id:'1'
},
{
    img: 'https://images.squarespace-cdn.com/content/v1/5a5780226f4ca3aa2a6c9298/f73373ec-f2de-450d-b8e7-059a01acaf3c/image1.jpg?format=1000w',
    id:'2'
},
{
    img:'https://cdn.vox-cdn.com/thumbor/23dWY86RxkdF7ZegvfnY8gFjR7s=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19157811/ply0947_fall_reviews_2019_tv_anime.jpg',
    id:'3'
},
{
    img:'https://i.pinimg.com/736x/50/64/af/5064af4bf459eb8db5db5a2aeee8ed96.jpg',
    id:'4'
},
{
    img:'https://i.pinimg.com/736x/50/64/af/5064af4bf459eb8db5db5a2aeee8ed96.jpg',
    id:'5'
},
{
    img:'https://images.indianexpress.com/2022/12/Anime.jpg',
    id:'6'
},
]

let showIndex=0;
let show_item= document.getElementById('show-options');


image.forEach((image) => {
    show_item.innerHTML += `<img id='${image.id}'  class='show-item' src="${image.img}" alt="" />`
});

Array.from(document.getElementsByClassName('show-item')).forEach((element)=>{
   
element.addEventListener('click',(e)=>{
    showIndex= parseInt(e.target.id)
    document.getElementById('show').innerHTML = `<img class="show-img" src="${image[showIndex-1].img}" alt="">` 
})

})
// Array.from(document.getElementsByClassName('show-item')).forEach((element)=>{
//    element.addEventListener('mousemove',()=>{
//    document.body.style.backgroundImage=''
//    })
 
//     })