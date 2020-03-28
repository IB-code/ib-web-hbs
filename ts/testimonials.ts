const readmoreBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.readmore');

readmoreBtns.forEach(btn => {
    btn.addEventListener("click", () => btn.innerText === "Read More" ? btn.innerText = "Close" : btn.innerText = "Read More");
});