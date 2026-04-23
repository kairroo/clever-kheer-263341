const p = new URLSearchParams(window.location.search);

const name = p.get("name");
const price = p.get("price");
const img = p.get("img");

document.getElementById("product-name").innerText = name;
document.getElementById("product-price").innerText = price;
document.getElementById("product-img").src = img;

/* 📲 YOUR WHATSAPP NUMBER (CHANGE THIS) */
const phone = "917736013463";

/* MESSAGE */
const message = `Hi, I want to order ${name} for ${price}`;

/* LINK */
const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

document.getElementById("whatsapp-btn").href = link;