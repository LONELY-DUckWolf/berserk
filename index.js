const bErserk = document.querySelector(".berserk-list");
const modalBackdropBebebeb = document.querySelector(".backdrop");
const closeButton = document.querySelector(".guts__close");
const modalContent = document.querySelector(".berserk-modal");

const whiteFalcons = [
    { photo: "./griffith.jpg" },
    { photo: "./griffithhhhh.webp" },
    { photo: "./grifith.jpg" },
    { photo: "./gutss.jpg" },
    { photo: "./gutsss.jpg" },
    { photo: "./gutssss.jpg" }
];

const berserkList = whiteFalcons
    .map((berserk) => {
        return `<li class="berserk-item">
                    <img class="berserk-img" src="${berserk.photo}" alt="Berserk Image" />
                </li>`;
    })
    .join("");

bErserk.innerHTML = berserkList;

bErserk.addEventListener("click", (event) => {
    if (event.target.nodeName !== "IMG") {
        return;
    }


    const modalImage = document.createElement("img");
    modalImage.src = event.target.src;
    modalImage.classList.add("modal-img");
    modalImage.style.width = "100%";
    modalImage.style.height = "auto";

    const berserkModalImage = modalContent.querySelector(".modal-img");
    if (berserkModalImage) {
        berserkModalImage.remove();
    }
    modalContent.appendChild(modalImage);


    modalBackdropBebebeb.classList.remove("is-hidden");
});

closeButton.addEventListener("click", () => {
    modalBackdropBebebeb.classList.add("is-hidden");
});
