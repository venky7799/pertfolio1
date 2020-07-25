/* =================cursor====================*/
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".main p");
let navLinks2 = document.querySelectorAll(".section3 img");
let navLinks3 = document.querySelectorAll(".social a");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  console.log(e);
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});

navLinks2.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});

navLinks3.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
  });
});
/*==============end of cursor================== */

var html = document.documentElement;
var body = document.body;

var scroller = {
  target: document.querySelector("#scroll-container"),
  ease: 0.09, // <= scroll speed
  endY: 0,
  y: 0,
  resizeRequest: 1,
  scrollRequest: 0,
};

var requestId = null;

TweenLite.set(scroller.target, {
  rotation: 0.01,
  force3D: true,
});

window.addEventListener("load", onLoad);

function onLoad() {
  updateScroller();
  window.focus();
  window.addEventListener("resize", onResize);
  document.addEventListener("scroll", onScroll);
}

function updateScroller() {
  var resized = scroller.resizeRequest > 0;

  if (resized) {
    var height = scroller.target.clientHeight;
    body.style.height = height + "px";
    scroller.resizeRequest = 0;
  }

  var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

  scroller.endY = scrollY;
  scroller.y += (scrollY - scroller.y) * scroller.ease;

  if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
    scroller.y = scrollY;
    scroller.scrollRequest = 0;
  }

  TweenLite.set(scroller.target, {
    y: -scroller.y,
  });

  requestId =
    scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
}

function onScroll() {
  scroller.scrollRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

function onResize() {
  scroller.resizeRequest++;
  if (!requestId) {
    requestId = requestAnimationFrame(updateScroller);
  }
}

scroller.resizeRequest++;
scroller.scrollRequest++;
scroller.addItems();
scroller._update();

window.addEventListener("click", clickHandler, {
  once: true,
});

function clickHandler() {
  var items = document.querySelectorAll(".item");
  items[1].style.display = "none";
  items[3].style.display = "none";

  scroller.resizeRequest++;
  scroller.scrollRequest++;
  scroller.scrollItems = [];
  scroller.addItems();
  scroller._update();
}

console.clear();

var scroller = new SmoothScroll({
  target: document.querySelector("#scroll-container"), // element container to scroll
  scrollEase: 0.05,
  maxOffset: 500,
});
