let movies = [
    {
        name: "Moon Knight",
        des: "Moon Knight follows Steven Grant, a mild-mannered gift-shop employee, who becomes plagued with blackouts and memories of another life. Steven discovers he has dissociative identity disorder and shares a body with mercenary Marc Spector. As Steven/Marc's enemies converge upon them, they must navigate their complex identities while thrust into a deadly mystery among the powerful gods of Egypt..",
        image: "https://images8.alphacoders.com/121/thumb-1920-1214264.jpg"
    },
    {
        name: "Stranger Things",
        des: "After the mysterious and sudden vanishing of a young boy, the people of a small town begin to uncover secrets of a government lab, portals to another world and sinister monsters.",
        image: "https://wallpapercave.com/dwp1x/wp4456064.png"
    },
    {
        name: "Doctor Strange in the Multiverse of Madness ",
        des: "Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.",
        image: "images/dr.jpg"
    },
    {
        name: "Wanda Vision",
        des: "WandaVision blends the style of classic sitcoms with the Marvel Cinematic Universe in which Wanda Maximoff and Vision, two super-powered beings living their ideal suburban lives, begin to suspect that everything is not as it seems.",
        image: "images/wanda.jpg"
    },
    {
        name: "Loki",
        des: "Loki revolves around the mischievous villain escaping the clutches of The Avengers and getting caught by the Time Variance Authority.",
        image: "images/loki.jpg"
    },
    {
        name: "Thor - Love and Thunder",
        des: "Thor: Love and Thunder is a 2022 American superhero film based on Marvel Comics featuring the character Thor, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Thor: Ragnarok (2017) and the 29th film in the Marvel Cinematic Universe (MCU).",
        image: "images/thor.png"
    },
    {
        name: "Morbius",
        des: "A scientist suffering from a rare blood disease whose attempts to cure himself afflict him with a form of transgenic vampirism, gaining all of the superhuman abilities but none of the superstitious weaknesses associated with vampires.",
        image: "images/Morbius.jpg"
    },
    {
        name: "Elite",
        des:"Elite is a Spanish thriller teen drama television series created for Netflix by Carlos Montero and Darío Madrona. The series is set in Las Encinas, a fictional elite secondary school and revolves around the relationships between three working-class teenage students enrolled at the school through a scholarship program and their wealthy classmates. The series features an ensemble cast. Many of the cast previously featured in other Netflix works produced or distributed in Spain and Latin America.",
        image: "https://wallpapercave.com/wp/wp7862165.jpg"
    }
];

const carousel = document.querySelector('.carousel');

let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // create DOM elements
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all the elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classnames
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

// video card

const videoCards=[...document.querySelectorAll('.video-card')];

videoCards.forEach(item=>
    {
        item.addEventListener('mouseover', () =>{
            let video=item.children[1];
            video.play();
        })
        item.addEventListener('mouseleve', () =>{
            let video=item.children[1];
            video.pause();
        })
    })


//card slider

let cardContainers=[...document.querySelectorAll('.card-container')];
let preBtn =[...document.querySelectorAll('.pre-btn')];
let nxtBtn =[...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i)=>{

    let ContainerDimensions = item.getBoundingClientReact();
    let containerWidth=ContainerDimensions.width;

    nxtBtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth -200;
    })
    preBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth +200;
    })
})


