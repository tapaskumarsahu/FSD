// Banner slideshow data
const slides = [
  {
    title: "Lowest ever price",
    headline: "Starting ₹999",
    subtitle: "Deals on headphones",
    offers: [
      "Free delivery & Up to ₹100 cashback*",
      '<span class="cards">SBI Debit Card | SBI Card</span>',
      "10% Instant Discount*",
    ],
    img: "slide-image-1.jpg",
    alt: "Slide 1",
  },
  {
    title: "Up to 70% off | Truly wireless earbuds, headphones & more",
    headline: "Best Wireless Audio",
    subtitle: "Top brands, top deals",
    offers: ["Up to 70% off", "Blockbuster deals", "Shop now!"],
    img: "slide-image-2.jpg",
    alt: "Slide 2",
  },
  {
    title: "Up to 80% off | Electronics & Accessories",
    headline: "Mega Electronics Sale",
    subtitle: "Laptops, tablets & more",
    offers: ["Up to 80% off", "Limited time offers", "Shop now!"],
    img: "slide-image-3.jpg",
    alt: "Slide 3",
  },
  {
    title: "Shop by brand | Deals on top smartphones",
    headline: "Smartphone Savings",
    subtitle: "Top brands, big discounts",
    offers: [
      "Savings up to ₹12,000",
      "Savings up to ₹5,000",
      "Savings up to ₹4,000",
    ],
    img: "slide-image-4.jpg",
    alt: "Slide 4",
  },
  {
    title: "Sign in for your best experience",
    headline: "Personalized Deals",
    subtitle: "Sign in securely",
    offers: ["Exclusive offers for you", "Fast checkout", "Shop now!"],
    img: "slide-image-5.jpg",
    alt: "Slide 5",
  },
];

let currentSlide = 0;

function renderSlide(idx) {
  const slide = slides[idx];
  const banner = document.getElementById("bannerContent");
  banner.innerHTML = `
    <img src="${slide.img}" alt="${slide.alt}" class="banner-full">
  `;
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  renderSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  renderSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", function () {
  renderSlide(currentSlide);
  document.getElementById("prevBanner").onclick = prevSlide;
  document.getElementById("nextBanner").onclick = nextSlide;
  // Optional: auto-slide every 5 seconds
  setInterval(nextSlide, 5000);
});
