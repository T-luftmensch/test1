// Interactive Photo Gallery — mouse and keyboard handlers
function upDate(previewPic) {
  console.log("Preview event:", previewPic.alt);
  const display = document.getElementById("image");
  display.style.backgroundImage = "url('" + previewPic.src + "')";
  display.textContent = previewPic.alt;
}

function undo() {
  console.log("Preview reset");
  const display = document.getElementById("image");
  display.style.backgroundImage = "url('')";
  display.textContent = "Hover over or focus an image below to preview it here.";
}

function addTabindex() {
  console.log("addTabindex() triggered");
  const figures = document.querySelectorAll(".gallery figure");
  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute("tabindex", "0");
  }
}

function initGallery() {
  console.log("Gallery listeners initialized");
  const figures = document.querySelectorAll(".gallery figure");
  for (let i = 0; i < figures.length; i++) {
    const img = figures[i].querySelector("img");
    figures[i].addEventListener("mouseover", function () { upDate(img); });
    figures[i].addEventListener("mouseleave", undo);
    figures[i].addEventListener("focus", function () { upDate(img); });
    figures[i].addEventListener("blur", undo);
  }
  addTabindex();
}

window.addEventListener("load", initGallery);
