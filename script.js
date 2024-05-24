function toggleVisibility() {
    var additionalContent = document.getElementById("additionalContent");
    var hideButton = document.getElementById("hideButton");
    if (additionalContent.style.display === "none") {
        additionalContent.style.display = "block";
        hideButton.style.display = "inline-block";
    } else {
        additionalContent.style.display = "none";
        hideButton.style.display = "none";
    }
}

function hideAdditionalContent() {
    var additionalContent = document.getElementById("additionalContent");
    var hideButton = document.getElementById("hideButton");
    additionalContent.style.display = "none";
    hideButton.style.display = "none";
}

  