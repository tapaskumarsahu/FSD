// Images and captions
const images = [
  { src: "assets/img1.jpg", caption: "Fresh Droplet" },
  { src: "assets/img2.jpg", caption: "Sunset Road" },
  { src: "assets/img3.jpg", caption: "Green Leaves" },
  { src: "assets/img4.jpg", caption: "Night Reflection" },
  { src: "assets/img5.jpg", caption: "Colorful Mosaic" },
  { src: "assets/img6.jpg", caption: "Neon Cross" },
];

const thumbnails = document.getElementById("thumbnails");
const mainImage = document.getElementById("mainImage");
const caption = document.getElementById("caption");

// Populate thumbnails
images.forEach((img, idx) => {
  const thumb = document.createElement("img");
  thumb.src = img.src;
  thumb.alt = img.caption;
  thumb.classList.add("thumbnail");
  if (idx === 0) thumb.classList.add("selected");
  thumb.addEventListener("click", () => selectImage(idx));
  thumbnails.appendChild(thumb);
});

function selectImage(idx) {
  mainImage.src = images[idx].src;
  caption.textContent = images[idx].caption;
  document.querySelectorAll(".thumbnail").forEach((el, i) => {
    el.classList.toggle("selected", i === idx);
  });
}

// Font controls
const fontFamily = document.getElementById("fontFamily");
const fontSize = document.getElementById("fontSize");
const fontAlign = document.getElementById("fontAlign");

// Image effects
const sepia = document.getElementById("sepia");
const grayscale = document.getElementById("grayscale");
const blur = document.getElementById("blur");

// Buttons
const applyBtn = document.getElementById("applyBtn");
const resetBtn = document.getElementById("resetBtn");

applyBtn.addEventListener("click", () => {
  // Font effects
  caption.style.fontFamily = fontFamily.value;
  caption.style.fontSize = fontSize.value + "px";
  caption.style.textAlign = fontAlign.value;

  // Image effects
  let filters = [];
  if (sepia.checked) filters.push("sepia(0.7)");
  if (grayscale.checked) filters.push("grayscale(1)");
  if (blur.checked) filters.push("blur(4px)");
  mainImage.style.filter = filters.join(" ");
});

resetBtn.addEventListener("click", () => {
  // Reset font
  caption.style.fontFamily = "Arial";
  caption.style.fontSize = "25px";
  caption.style.textAlign = "right";
  fontFamily.value = "Arial";
  fontSize.value = 25;
  fontAlign.value = "right";

  // Reset image effects
  sepia.checked = false;
  grayscale.checked = false;
  blur.checked = false;
  mainImage.style.filter = "";
});

// Initial state
selectImage(0);
resetBtn.click();
