const options = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");

const card = document.getElementById("card");
const ratingContent = document.getElementById("rating-content");
const thanksContent = document.getElementById("thanks-content");
const badge = document.querySelector(".badge");
const form = document.querySelector("form");

options.forEach(option => option.addEventListener("change", () => {
    labels.forEach(label => label.classList.remove("selected"));

    const currentLabel = document.querySelector(`label[for="${option.id}"]`);
    currentLabel.classList.add("selected");
}));

form.addEventListener("submit", (e) => {
    e.preventDefault();

    ratingContent.hidden = true;
    thanksContent.hidden = false;
    card.className = "thanks-card";

    badge.innerText = `You selected ${form.elements["rating"].value} out of 5`;
});