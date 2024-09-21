const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(img => {
    img.addEventListener("click", function () {
        modal.classList.add("show");
        modal.classList.remove("hide");
        modalImg.src = this.src;
    });
});

closeModal.addEventListener("click", function () {
    modal.classList.add("hide");
    setTimeout(() => {
        modal.classList.remove("show");
    }, 500); // Tempo da transição
});

modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.classList.add("hide");
        setTimeout(() => {
            modal.classList.remove("show");
        }, 500);
    }
});
