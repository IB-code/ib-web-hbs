document.getElementById('apply-iframe').onload = () => {
    document.getElementById("spinner-container").remove();
    document.getElementById("apply-iframe").style.height = "100vh";
};

document.body.removeChild(document.getElementById("newsletter-expand-container"));