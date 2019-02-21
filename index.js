function changeCheckbox(event) {
  let item = document.getElementById("outer");
  switch (item.getAttribute("aria-checked")) {
    case "true":
      item.setAttribute("aria-checked", "false");
      break;
    case "false":
      item.setAttribute("aria-checked", "true");
      break;
  }
}

document.getElementById("outer").addEventListener("click", changeCheckbox);