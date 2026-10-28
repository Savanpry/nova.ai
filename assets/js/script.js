
document.querySelectorAll('.site-header__item').forEach(item => {
  const submenu = item.querySelector('.sub-menu');
  const link = item.querySelector('a');
  const span = item.querySelector('a span');

  function enableHover() {
    item.addEventListener('mouseenter', hoverIn);
    item.addEventListener('mouseleave', hoverOut);

    if (span) span.removeEventListener('click', clickToggle);
  }

  function enableClick() {
    item.removeEventListener('mouseenter', hoverIn);
    item.removeEventListener('mouseleave', hoverOut);

    if (span) {
      span.addEventListener('click', clickToggle);
    }
  }

  function hoverIn() {
    submenu.style.display = 'block';
    submenu.style.maxHeight = submenu.scrollHeight + "px";
    link.classList.add('active');
  }

  function hoverOut() {
    submenu.style.maxHeight = "0";
    link.classList.remove('active');
  }

  function clickToggle(e) {
    e.preventDefault();
    e.stopPropagation();

    if (submenu.style.maxHeight && submenu.style.maxHeight !== "0px") {
      submenu.style.maxHeight = "0";
      link.classList.remove('active');
    } else {
      submenu.style.display = 'block';
      submenu.style.maxHeight = submenu.scrollHeight + "px";
      link.classList.add('active');
    }
  }

  link.addEventListener('click', function (e) {
    if (window.innerWidth < 992 && span && e.target === span) {
      e.preventDefault();
    }
  });

  function checkScreen() {
    if (!submenu) return;

    if (window.innerWidth >= 992) {
      enableHover();
    } else {
      enableClick();
    }
  }

  checkScreen();
  window.addEventListener('resize', checkScreen);
});

/* Header JS End */

/* Header Toggle JS Start */

const toggleBtn = document.querySelector(".site-header__toggle");
const menu = document.querySelector(".site-header__menu");

toggleBtn.addEventListener("click", function () {

  toggleBtn.classList.toggle("active-toggle");

  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
  }

});


/* Header Toggle JS End */


(function () {
  const textElements = document.querySelectorAll(".typewriter__text");
  const texts = [
    "Schedule meetings and send invites automatically",
    "Generate weekly sales summary report",
    "Create CRM contact from emails"
  ];

  const typingSpeed = 70;
  const deletingSpeed = 40;
  const delayBetween = 1500;

  textElements.forEach((textElement, index) => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentText = texts[textIndex];

      if (!isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(typeEffect, delayBetween);
          return;
        }
      } else {
        textElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
        }
      }

      const speed = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(typeEffect, speed);
    }

    setTimeout(typeEffect, index * 500);
  });
})();



/* Impact Showcase Section JS Start */

$(document).ready(function () {
  $('.impact-showcase-box').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: true
  });
});

/* Impact Showcase Section JS End */


/* Partners Section JS Start */

$(document).ready(function () {
  $('.partners-section-box').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 6000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
    pauseOnFocus: false,
    variableWidth: true,
    rtl: true,
  });
});

/* Partners Section JS End */


// Who We Are Nova AI Text Animation Start

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".who-we-are-nova")) {

    const section = document.querySelector(".who-we-are-nova");
    const heading = document.querySelector(".who-nova-content h2");

    const originalHTML = heading.innerHTML;

    function parseHTML(html) {
      let container = document.createElement("div");
      container.innerHTML = html;

      let result = [];

      function walk(node) {
        if (node.nodeType === 3) {
          node.textContent.split("").forEach(char => {
            result.push({ type: "char", value: char });
          });
        } else if (node.nodeType === 1) {
          if (node.tagName === "SPAN") {
            result.push({ type: "open" });
            node.childNodes.forEach(walk);
            result.push({ type: "close" });
          } else {
            node.childNodes.forEach(walk);
          }
        }
      }

      container.childNodes.forEach(walk);
      return result;
    }

    const parsed = parseHTML(originalHTML);
    heading.innerHTML = "";

    let current = 0;
    let target = 0;

    const totalChars = parsed.filter(i => i.type === "char").length;

    function render(count) {
      let output = "";
      let i = 0;

      for (let item of parsed) {
        if (item.type === "char") {
          if (i < count) {
            output += item.value;
            i++;
          }
        } else if (item.type === "open") {
          output += "<span>";
        } else if (item.type === "close") {
          output += "</span>";
        }
      }

      heading.innerHTML = output;
    }

    function animate() {
      current += (target - current) * 0.12;
      render(Math.floor(current));
      requestAnimationFrame(animate);
    }

    window.addEventListener("scroll", function () {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight - 150;

      let progress = (start - rect.top) / (rect.height - 150);

      progress = Math.max(0, Math.min(1, progress));

      target = progress * totalChars;
    });

    animate();
  }
});


// Who We Are Nova AI Text Animation End


/* Video Section JS Start */

document.addEventListener("DOMContentLoaded", function () {

  if (document.querySelector(".video-main-sec")) {


    gsap.registerPlugin(ScrollTrigger);

    const video = document.getElementById("scrollVideo");

    video.addEventListener("loadedmetadata", () => {

      video.play();
      video.pause();

      const duration = video.duration;

      gsap.to(video, {
        currentTime: duration,

        ease: "power1.out",

        scrollTrigger: {
          trigger: ".video-main-sec",

          start: "top top",
          end: "bottom top",

          scrub: 2,
          pin: ".video-inner-sec",

          anticipatePin: 1,

          invalidateOnRefresh: true,
        }
      });

    });
  }
});

/* Video Section JS End */

/* What We Do Section 3D View JS Start */

const cards = document.querySelectorAll(".what-item, .service-intro-list-inner, .benefits-image img, .security-image img");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
    `;

  });

});

/* What We Do Section 3D View JS End */

/* Counter Section JS Start */

document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById('feature-section');
  const counters = document.querySelectorAll('.counter');

  let started = false;

  const startCounter = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      if (!target) return;
      const originalText = counter.innerText;
      const suffix = originalText.replace(/[0-9]/g, "");
      let currentVal = 0;
      counter.innerText = currentVal + suffix;

      const increment = Math.max(1, target / 50);

      const updateCount = () => {
        currentVal += increment;
        if (currentVal < target) {
          counter.innerText = Math.ceil(currentVal) + suffix;
          setTimeout(updateCount, 25);
        } else {
          counter.innerText = target + suffix;
        }
      };

      updateCount();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        startCounter();
        started = true;
      }
    });
  }, {
    threshold: 0.5
  });

  if (section) {
    observer.observe(section);
  }
});

/* Counter Section JS End */

/* How We Work Section JS Start */

document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {

    const sections = gsap.utils.toArray(".work-content");

    gsap.set(sections, {
      y: 120,
      opacity: 0,
      scale: 0.95
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-main-sec",
        start: "top top",
        end: () => "+=" + (window.innerHeight * sections.length),
        scrub: 1.5,
        pin: true
      }
    });

    sections.forEach((section, i) => {

      tl.to(section, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power6.out"
      });

      if (i !== sections.length - 1) {
        tl.to(section, {
          y: -80,
          opacity: 0,
          scale: 0.85,
          duration: 1,
          ease: "power2.inOut"
        });
      }

    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf(sections);
    };

  });

});


/* How We Work Section JS End */

/* Lenis JS Start */

// const lenis = new Lenis({
//   duration: 1.2,
//   smooth: true,
//   direction: 'vertical'
// });

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);


/* Lenis JS End */

/* Service Banner Animation JS Start */


/* Service Banner Animation JS End */

/* Timeline Section JS Start */

document.addEventListener("DOMContentLoaded", function () {

  if (document.querySelector(".our-approach-main-sec")) {

    const section = document.querySelector(".our-approach-main-sec");
    const items = document.querySelectorAll(".our-approach-timeline");

    let hasAnimated = false;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {

        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("active");
            }, index * 500); // delay for one-by-one effect
          });

        }

      });
    }, {
      threshold: 0.3 // 30% visible
    });

    observer.observe(section);

  }

});

/* Timeline Section JS End */

/* Stories Section JS Start */

document.addEventListener("DOMContentLoaded", function () {

  if (document.querySelector(".stories-main-sec")) {

    const tracks = document.querySelectorAll(".stories-main-sec .stories-slider-track");

    tracks.forEach(track => {

      const slides = Array.from(track.children);

      slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        track.appendChild(clone);
      });

      let totalWidth = 0;
      slides.forEach(slide => {
        totalWidth += slide.offsetWidth + 10;
      });

      let animation;

      if (track.classList.contains("right-to-left")) {
        animation = gsap.to(track, {
          x: `-=${totalWidth}`,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      }

      track.addEventListener("mouseenter", () => {
        if (animation) animation.pause();
      });

      track.addEventListener("mouseleave", () => {
        if (animation) animation.resume();
      });

    });

  }

});

/* Stories Section JS End */

/* Project Slider JS Start */

document.addEventListener("DOMContentLoaded", function () {

  if (document.querySelector(".portfolio-slider")) {

    var swiper = new Swiper(".portfolio-slider-thumb", {
      spaceBetween: 10,
      slidesPerView: 4,
      loop: true,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".portfolio-slider", {
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

  }

});

/* Project Slider JS End */

/* Counter Section JS Start */


document.addEventListener("DOMContentLoaded", function () {

  const section = document.querySelector(".counter-main-sec");

  if (section) {

    const counters = section.querySelectorAll('.counter');

    const startCounter = () => {
      counters.forEach(counter => {

        const suffix = counter.getAttribute('data-suffix') || '';
        const prefix = counter.getAttribute('data-prefix') || '';
        const target = +counter.getAttribute('data-target');
        if (!target) return;

        let currentVal = 0;
        counter.innerText = prefix + '0' + suffix;

        const increment = Math.max(0.1, target / 50);

        const updateCounter = () => {
          currentVal += increment;
          if (currentVal < target) {
            counter.innerText = prefix + Math.ceil(currentVal) + suffix;
            setTimeout(updateCounter, 25);
          } else {
            counter.innerText = prefix + target + suffix;
          }
        };

        updateCounter();
      });
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter();
          observer.unobserve(section);
        }
      });
    }, {
      threshold: 0.5
    });

    observer.observe(section);
  }

});

/* Counter Section JS End */


/* FAQ Section JS Start */

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".faq-main-sec")) {

    function slideDown(element) {
      element.style.display = "block";
      element.style.marginTop = "10px";
      element.style.maxHeight = element.scrollHeight + "px";
    }

    function slideUp(element) {
      element.style.maxHeight = "0";
      element.style.marginTop = "0px";
    }

    const openId = localStorage.getItem("openFaqId");

    let itemToOpen = null;

    if (openId) {
      itemToOpen = document.querySelector(`.faq-item[data-id="${openId}"]`);
    }

    if (!itemToOpen) {
      itemToOpen = document.querySelector(".faq-item:first-child");
    }

    if (itemToOpen) {
      itemToOpen.classList.add("active");
      const answer = itemToOpen.querySelector(".faq-answer");
      if (answer) {
        answer.style.display = "block";
        answer.style.marginTop = "10px";
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    }

    document.querySelectorAll(".faq-question").forEach(function (question) {
      question.addEventListener("click", function (e) {

        e.preventDefault();

        const item = this.closest(".faq-item");

        document.querySelectorAll(".faq-item").forEach(function (otherItem) {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            const otherAnswer = otherItem.querySelector(".faq-answer");
            if (otherAnswer) {
              slideUp(otherAnswer);
            }
          }
        });

        const answer = item.querySelector(".faq-answer");

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
          slideDown(answer);
          localStorage.setItem("openFaqId", item.getAttribute("data-id"));
        } else {
          slideUp(answer);
          localStorage.removeItem("openFaqId");
        }
      });
    });
  }
});

/* FAQ Section JS End */

/* Radio Input Checked JS Start */

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".popup-radio-box")) {

    const radioWrappers = document.querySelectorAll(".popup-radio-box-innner");

    radioWrappers.forEach(wrapper => {
      const checkedRadio = wrapper.querySelector("input[type='radio']:checked");

      if (checkedRadio) {
        wrapper.classList.add("input-checked");
      }
    });

    radioWrappers.forEach(wrapper => {
      const radios = wrapper.querySelectorAll("input[type='radio']");

      radios.forEach(radio => {
        radio.addEventListener("change", function () {

          radioWrappers.forEach(w => {
            w.classList.remove("input-checked");
          });

          if (this.checked) {
            wrapper.classList.add("input-checked");
          }

        });
      });
    });

  }
});

/* Radio Input Checked JS End */

/* About FAQ JS Start */

document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector(".about-faq-main-sec")) {
    const faqItems = document.querySelectorAll(".faq-item");

    if (faqItems.length > 0) {
      const firstItem = faqItems[0];
      const firstAnswer = firstItem.querySelector(".faq-answer");

      firstItem.classList.add("active");
      firstAnswer.style.maxHeight = firstAnswer.scrollHeight + "px";
      firstAnswer.style.marginTop = "10px";
    }

    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");

      question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach(el => {
          el.classList.remove("active");
          const answer = el.querySelector(".faq-answer");
          answer.style.maxHeight = null;
          answer.style.marginTop = "0px";
        });

        if (!isActive) {
          item.classList.add("active");
          const answer = item.querySelector(".faq-answer");
          answer.style.maxHeight = answer.scrollHeight + "px";
          answer.style.marginTop = "10px";
        }
      });
    });
  }
});

/* About FAQ JS End */

/* Terms Page JS Start */

document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll("ul.policy-listing li a");
  const sections = document.querySelectorAll(".policy-content-info");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.startsWith("#")) {
        e.preventDefault();

        document.querySelectorAll("ul.policy-listing li").forEach(li => {
          li.classList.remove("active");
        });

        this.closest("li").classList.add("active");

        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }
    });
  });

  function updateActiveSection() {
    let current = "";

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 120 && rect.bottom >= 120) {
        current = section.getAttribute("id");
      }
    });

    if (current) {
      document.querySelectorAll("ul.policy-listing li").forEach(li => {
        li.classList.remove("active");
      });

      const activeLink = document.querySelector(`ul.policy-listing li a[href="#${current}"]`);
      if (activeLink) {
        activeLink.parentElement.classList.add("active");
      }
    }
  }

  window.addEventListener("scroll", updateActiveSection);

  window.scrollTo(0, 0);

  updateActiveSection();
});

/* Terms Page JS End */