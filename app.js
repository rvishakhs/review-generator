const review =[
    {
        id: 1,
        name: "susan smith",
        job: "webdeveloper",
        img:"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Fwp-content%2Fuploads%2Fgetty-images%2F2022%2F04%2F1347087545.jpeg",
        text:"when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",  
    },
    {
        id: 2,
        name: "Steve Jobs",
        job: "CEO of apple ",
        img:"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Fwp-content%2Fuploads%2Fgetty-images%2F2022%2F04%2F1347087545.jpeg",
        text:"s opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by"
    },
    {
        id: 3,
        name: "Isabella",
        job: "Full stack developer ",
        img:"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Fwp-content%2Fuploads%2Fgetty-images%2F2022%2F04%2F1347087545.jpeg",
        text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage"
    },
    {
        id: 3,
        name: "James rodigres",
        job: "Content writer",
        img:"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Fwp-content%2Fuploads%2Fgetty-images%2F2022%2F04%2F1347087545.jpeg",
        text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
    },
    {
        id: 3,
        name: "Anna johnson",
        job: "Backend developer",
        img:"https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Fwp-content%2Fuploads%2Fgetty-images%2F2022%2F04%2F1347087545.jpeg",
        text:"of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

// Declaring DOM elements
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")
// Declaring Navigation Buttons

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");

let currentItem = 3;

window.addEventListener("DOMContentLoaded", function(){
  showPerson(currentItem)  
})

function showPerson(person){
    const item = review[person]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

prevbtn.addEventListener("click", function(){
    
    currentItem -= 1;
    if(currentItem < 0 ){
        currentItem = review.length - 1;
    }
    showPerson(currentItem);
})

nextbtn.addEventListener("click", function(){
    
    currentItem += 1;
    if (currentItem > review.length - 1){
        currentItem =0;
    }
    showPerson(currentItem);
})