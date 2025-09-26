var navToggler = document.querySelector(".nav-toggler"),
navMenu = document.querySelector(".nav-menu");
navToggler.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggler.classList.toggle('show-icon');
});

//show modal
var promptBox = document.querySelector(".prompt-box"),
promptContent = document.querySelectorAll(".prompt-content"),
modalCloserIcon = document.querySelector("#modal-closer-icon"),
modalContainer = document.querySelector(".modal-container");

promptBox.addEventListener('click', showModal);
modalCloserIcon.addEventListener('click', closeModal);
promptContent.forEach((prompt) => {
    prompt.addEventListener('click', showModal);
})

function showModal(){
    if(!modalContainer.classList.contains("modal-show")){
        modalContainer.classList.add('modal-show');
    }
}

function closeModal(){
    if(modalContainer.classList.contains("modal-show")){
        modalContainer.classList.remove('modal-show');
    }
}

//get post
var caption = document.querySelector('.caption'),
postBtn = document.querySelector('.post-btn'),
postContainer = document.querySelector('.post-container'),
post = document.querySelector('.post'),
imgPreviewImg = document.querySelector('.img-preview img'),
postDeleteIcon = document.querySelector('.post-delete-icon'),
postText = document.querySelector('.post-text');

postBtn.addEventListener('click', getPostCaption)
function getPostCaption(){
    if(caption.value == ''){
        alert("Please enter a caption");
        return;
    }
    else{
        closeModal();
        createPost();
        localStorageSetData();
    }
}


//create post dynamically 
function createPost(){
    var newPost = `
    
                <div class="post">
                    <div class="topper-profile-content">
                        <div class="profile">
                            <div class="post-profile">
                                <img src="./images/profile-picture.jpg" alt="profile">
                            </div>
                            <div class="profile-content">
                                <a href="#">Profile Name</a>
                                <p><span class="time">1</span>h ago</p>
                            </div>
                        </div>
                        <div class="modal-closer-icon post-delete-icon">
                            <i class="fa-solid fa-xmark modal-closer" ></i>
                        </div>
                    </div>
                    <div class="middle-profile-content">
                        <div class="post-box">
                            <p class="post-text">${caption.value}</p>
                        </div>
                    </div>
                    <div class="bottom-profile-content">
                        <div class="like-box interect-box">
                            <i class="fa-solid fa-thumbs-up"></i>
                        </div>
                        <div class="comment-box interect-box">
                            <i class="fa-solid fa-comment"></i>
                        </div>
                        <div class="share-box interect-box">
                            <i class="fa-solid fa-share"></i>
                        </div>
                    </div>
                </div>

    `
    postContainer.innerHTML += newPost;
    caption.value = '';
}

//delete post
document.addEventListener("click", function(e) {
    if (e.target.closest(".post-delete-icon")) { 
        e.target.closest(".post").remove();
        localStorage.setItem("post", postContainer.innerHTML);
    }
});

//set data on local storage
function localStorageSetData(){
    localStorage.setItem("post", postContainer.innerHTML);
}

window.addEventListener("load", loadPost);
function loadPost() {
    let savedPost = localStorage.getItem("post");
    if (savedPost) {
        postContainer.innerHTML = savedPost;
    }
};


//swipper js
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  spaceBetween: 5,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true 
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0:{
        slidesPerView : 1
    },
    620: {
        slidesPerView : 2
    },
    1024: {
        slidesPerView : 3
    },
  }

});

// Mouse hover এ autoplay pause
const swiperEl = document.querySelector('.swiper');

swiperEl.addEventListener('mouseenter', () => {
  swiper.autoplay.stop();  // autoplay stop on hover
});

// Mouse leave এ autoplay resume
swiperEl.addEventListener('mouseleave', () => {
  swiper.autoplay.start(); // autoplay start on mouse out
});

//swipper js


document.querySelectorAll('#lightGallery .card-item').forEach(item => {
    const captionEl = item.querySelector('.imgCaption'),
    imgSrc = item.querySelector('.imgSrc');
    item.setAttribute("data-src", imgSrc.src);
    if (captionEl) {
        item.setAttribute("data-sub-html", `<p>${captionEl.innerText}</p>`);
    }
});

//dynamic modal 

// Dynamic modal
// var allCardItem = document.querySelectorAll(".card-item"),
//     modalTitle = document.querySelector(".modalTitle"),
//     modalImg = document.getElementById("modalImg");

// allCardItem.forEach((card) => {
//   var imgSrc = card.querySelector(".imgSrc"),
//       imgCaption = card.querySelector(".imgCaption");

//   card.addEventListener('click', () => {
//     modalImg.setAttribute("src", imgSrc.src);
//     modalTitle.textContent = imgCaption.textContent;
//   });
// });
