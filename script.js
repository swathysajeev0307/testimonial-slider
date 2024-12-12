/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

const testimonials = [
    
    {
        name:"Binoj Raj",
        position: "UI/UX Designer",
        image:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
        testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing ElementInternals. Fusce tincidunt ex et lacus pulvinar, eu fermentum sapien volupat. Nullam non ullamcorper elit.`,
    },

    {
        name:"Swathy Binoj",
        position: "Full Stack Developer",
        image:"https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359554_640.png",
        testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing ElementInternals. Fusce tincidunt ex et lacus pulvinar, eu fermentum sapien volupat. Nullam non ullamcorper elit.`,
    },

    {
        name:"BRJ Studios",
        position: "Digital Studio",
        image:"https://cdn.pixabay.com/photo/2016/04/22/04/57/graduation-1345143_640.png",
        testimonial: `Lorem ipsum dolor sit amet, consectetur adipiscing ElementInternals. Fusce tincidunt ex et lacus pulvinar, eu fermentum sapien volupat. Nullam non ullamcorper elit.`,
    },
];

const testimonialContainer = document.getElementById("_testimonial-container");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

function showTestimonial(){

    const testimonial = testimonials[currentIndex];
    testimonialContainer.innerHTML = `
        <img src = "${testimonial.image}" />
        <h3>${testimonial.name}</h3>
        <h6>${testimonial.position}</h6>
        <p>${testimonial.testimonial}</p>
    
    
    `;

}

function changeTestimonial(direction){
    
    currentIndex += direction;
    if(currentIndex < 0){
        currentIndex = testimonials.length -1;
    }else if(currentIndex >= testimonials.length){
        currentIndex = 0;
    }

    showTestimonial();

}

prevButton.addEventListener("click", ()=> changeTestimonial(-1));
nextButton.addEventListener("click", ()=> changeTestimonial(1));

showTestimonial();
