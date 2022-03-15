const readmoreBtns: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.readmore');

readmoreBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        // change button text of clicked button to "close"
        btn.innerText === "Read More" ? btn.innerText = "Close" : btn.innerText = "Read More";

        // collapse any other open sections to close them
        // readmoreBtns.forEach((btn, index) => {
        //     $(`#textArea-${index}`).collapse();

        // });

        // scroll to selected button
        btn.scrollIntoView({ behavior: "smooth", block: "center" });
    });
});