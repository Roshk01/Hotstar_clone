let movies = [
  {
    name: "Falcon and the winter soldier",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque ea necessitatibus, assumenda eveniet nemo reprehenderit mollitia. Culpa animi quae ab. Repellat omnis ex doloribus aut, minus est vitae accusamus!",
    Image: "image/the.png"
  },
  {
    name: "Loki",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque ea necessitatibus, assumenda eveniet nemo reprehenderit mollitia. Culpa animi quae ab. Repellat omnis ex doloribus aut, minus est vitae accusamus!",
    Image: "image/loki.png"
  },
  {
    name: "Wanda vision",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque ea necessitatibus, assumenda eveniet nemo reprehenderit mollitia. Culpa animi quae ab. Repellat omnis ex doloribus aut, minus est vitae accusamus!",
    Image: "image/wanda.png"
  },
  {
    name: "Raya and the last dragon",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque ea necessitatibus, assumenda eveniet nemo reprehenderit mollitia. Culpa animi quae ab. Repellat omnis ex doloribus aut, minus est vitae accusamus!",
    Image: "image/raya.png"
  },
  {
    name: "Luca",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque ea necessitatibus, assumenda eveniet nemo reprehenderit mollitia. Culpa animi quae ab. Repellat omnis ex doloribus aut, minus est vitae accusamus!",
    Image: "image/luca.png"
  }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideindex = 0;
const createslide = () => {
  if (slideindex >= movies.length) {
    slideindex = 0;
  }

  let slide = document.createElement("div");
  var imgElement = document.createElement("img");
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  imgElement.appendChild(document.createTextNode(""));
  h1.appendChild(document.createTextNode(movies[slideindex].name));
  p.appendChild(document.createTextNode(movies[slideindex].discription));
  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(imgElement);
  carousel.appendChild(slide);

  imgElement.src = movies[slideindex].Image;
  slideindex++;

  slide.className = "slider";
  content.className = "slide-content";
  h1.className = "title";
  p.className = "discription";

  sliders.push(slide);

  if (sliders.length) {
    sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
      30 * (sliders.length - 2)
    }px)`;
  }
};

for (let i = 0; i < 3; i++) {
  createslide();
}

setInterval(() => {
  createslide();
}, 3000);

//video section

const videocards = [...document.querySelectorAll(".vedio-card")];

videocards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });

  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

//card slider

let cardcontainer = [...document.querySelectorAll(".card-container")];
let prebtns = [...document.querySelectorAll(".pre-btn")];
let nxtbtns = [...document.querySelectorAll(".nxt-btn")];

cardcontainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerwidth = containerDimensions.width;

  nxtbtns[i].addEventListener("click", () => {
    item.scrollLeft += containerwidth - 200;
  });

  prebtns[i].addEventListener("click", () => {
    item.scrollLeft -= containerwidth + 200;
  });
});
