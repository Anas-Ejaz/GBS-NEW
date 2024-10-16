
gsap.registerPlugin(ScrollTrigger);
const text1 = document.querySelector('.text_1')

gsap.from(text1, {

    y: 20,
    duration: 1,
    opacity: 0,
})
// ==================================================================================
const sec2h2 = document.querySelector('#abc')

gsap.from(sec2h2, {

    scrollTrigger: {

        trigger: sec2h2,
        start: "top center",
        end: "top end",
    },
    y: 20,
    duration: 1,
    opacity: 0,
})


// =================================================================================
const sec2 = document.querySelector('.sec_2')

gsap.from(sec2, {

    scrollTrigger: {

        trigger: sec2,
        start: "top center",
        end: "top end",
    },
    y: 20,
    duration: 1,
    opacity: 0,
    scrub: 1,
})

const screenWidth = window.innerWidth;
console.log(screenWidth)
// --
const sec3 = document.querySelector('.sec_3')
if(window.innerWidth > 1060){
gsap.from(sec3, {

    scrollTrigger: {

        trigger: sec3,
        start: "top center",
        end: "top end",
    },
    y: 20,
    duration: 1,
    opacity: 0,
    scrub: 1,
})
}
if (window.) {
    
} else {
    
}
// =================================================================================
const sec6 = document.querySelector('.sec_6')

gsap.from(sec6, {

    scrollTrigger: {

        trigger: sec6,
        start: "bottom 50%",
        end: "top end",
    },
    x: -40,
    duration: 1.5,
    opacity: 0,
    scrub: 1,
})



gsap.from('#timeTo', {
    scrollTrigger: {
        trigger: '#timeTo',
        start: 'top top',
        end: 'top center',
        scrub: 1,
    },
    filter: "blur(5px)",
    opacity: 0,
    x: -100,
    duration: 0.5,
});

gsap.from('#roar', {
    scrollTrigger: {
        trigger: '#roar',
        start: 'top top',
        end: 'top center',
        scrub: 1,
    },
    filter: "blur(5px)",
    opacity: 0,
    x: 100,
    duration: 0.5,
});

gsap.from('#my_hr0', {
    scrollTrigger: {
        trigger: '#my_hr0',
        start: 'top top',
        end: 'top center',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    opacity: 0,
    duration: 0.5,
});

gsap.from('.infoContainer', {
    scrollTrigger: {
        trigger: '.infoContainer',
        start: 'top top',
        end: 'top center',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    opacity: 0,
    duration: 0.5,
});

gsap.from('#my_hr', {
    scrollTrigger: {
        trigger: '#my_hr',
        start: 'top top',
        end: 'top center',
        scrub: 1,
        ease: "power2.out",
    },
    filter: "blur(5px)",
    opacity: 0,
    y: 100,
    duration: 0.5,
});












// Select the elements and calculate the scroll amount
const totalCards = document.querySelectorAll(".my_card1");
const scrollContainer = document.querySelector(".my_scroll");

gsap.to(totalCards, {
  ease: "all",
    transform: 'translateX(-140%)',
  scrollTrigger: {
    trigger: ".sec_7",
    scroller: "body",
    start: 'top 0%',
    end: 'top -150%',
    scrub: 2,  // Smooth out the scroll
    pin: true, // Pin the section in place

    } , // End the scroll when the entire container has scrolled
  },
);


const sec4Elements = document.querySelectorAll('.sec4_inner');

sec4Elements.forEach((element) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            scrub: 1,
            start: "top center",
            end: "top end",
        },
        opacity: 0,
        y: 20,
        duration: 1,
    });
});


















document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector(".text-wrapper");
    var lightEffect = container.querySelector(".footer_cursor-light"); // Ensure it's selected within .text-wrapper

    function updateTorchPosition(x, y) {
        if (lightEffect) {
            lightEffect.style.setProperty('--x', `${x}px`);
            lightEffect.style.setProperty('--y', `${y}px`);
        }
    }

    function handleMouseMove(e) {
        var rect = container.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        updateTorchPosition(x, y);
    }

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleMouseMove);
    container.addEventListener('touchstart', handleMouseMove);
});













// Get references to the background and light effect
// Get references to the background and light effect
// Get references to the background and light effect
const lightSection = document.querySelector('.light-section');
const lightEffect = document.querySelector('.light-effect');
const heading = document.querySelector('.center-heading');

// Split the heading into individual spans for each letter
heading.innerHTML = heading.textContent
  .split('')
  .map(letter => `<span class="letter">${letter}</span>`)
  .join('');

// Get all the letters as span elements
const letters = document.querySelectorAll('.letter');

// Track the mouse position
lightSection.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;

  // Move the spotlight to follow the cursor
  lightEffect.style.left = `${clientX}px`;
  lightEffect.style.top = `${clientY}px`;

  // Calculate distance for spotlight effect
  letters.forEach(letter => {
    const letterRect = letter.getBoundingClientRect();
    const letterCenterX = letterRect.left + letterRect.width / 2;
    const letterCenterY = letterRect.top + letterRect.height / 2;

    const distanceX = clientX - letterCenterX;
    const distanceY = clientY - letterCenterY;
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    const radius = 100; // Set the radius of the effect
    if (distance <= radius) {
      letter.classList.add('in-spotlight');
    } else {
      letter.classList.remove('in-spotlight');
    }
  });
});

lightSection.addEventListener('mouseleave', () => {
  // Hide the effect when the mouse leaves the section
  lightEffect.style.opacity = 0;
  letters.forEach(letter => letter.classList.remove('in-spotlight'));
});

lightSection.addEventListener('mouseenter', () => {
  // Show the effect again when the mouse re-enters the section
  lightEffect.style.opacity = 1;
});
