import gsap from "gsap";
import anime from "animejs/lib/anime.es.js";

export default function () {
  function startLoader() {
    let currentVal = 0;

    function updateCounter() {
      if (currentVal < 100) {
        let increment = Math.floor(Math.random() * 10) + 1;
        currentVal = Math.min(currentVal + increment, 100);

        let delay = Math.floor(Math.random() * 200) + 5;
        setTimeout(updateCounter, delay);
      }
    }

    updateCounter();
  }

  function overflow() {
    document.querySelectorAll("body")[0].style.overflow = "hidden";

    setTimeout(() => {
      document.querySelectorAll("body")[0].style.overflow = "";
      document.querySelector(".header").style.display = "";
      document.querySelector("#container").style.position = "absolute"
      document.querySelector("#container").style.zIndex = "-1"
    }, 5000);
  }

  startLoader();
  overflow();

  let textWrapper = document.querySelector(".ml16");

  let firstSevenCharacters = textWrapper.textContent.slice(0, 7);
  let lastCharacters = textWrapper.textContent.slice(7, 10);

  textWrapper.innerHTML =
    firstSevenCharacters.replace(/\S/g, "<span class='letter'>$&</span>") +
    lastCharacters.replace(
      /\S/g,
      "<span class='letter' style='color: #666666'>$&</span>"
    );

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml16 .letter",
      translateY: [-100, 0],
      easing: "easeOutExpo",
      duration: 1500,
      delay: (el, i) => 30 * i,
    })
    .add({
      targets: ".ml16 .letter",
      translateY: [0, 100],
      easing: "easeOutExpo",
      duration: 3000,
      delay: (el, i) => 2000 + 30 * i,
    });

  gsap.to(".pre-loader", {
    scale: 0.5,
    ease: "power4.inOut",
    duration: 2,
    delay: 3,
  });

  gsap.to(".loader", {
    height: "0",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.75,
  });

  gsap.to(".loader-bg", {
    height: "0",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 4,
  });

  gsap.to(".loader-content", {
    display: "none",
    delay: 4,
  });

  gsap.to(".loader-2", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.5,
  });

  gsap.to(".hero h1", {
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.75,
    stagger: 0.05,
  });

  gsap.to(".hero p", {
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.75,
    stagger: 0.05,
  });

  gsap.to(".hero h2", {
    ease: "power4.inOut",
    duration: 1.5,
    delay: 3.75,
    stagger: 0.05,
  });

  gsap.to(".img", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    ease: "power4.inOut",
    duration: 1.5,
    delay: 4.5,
    stagger: 0.25,
  });
}
