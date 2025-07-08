function shtoNeShporte(button) {
  let textElement = button.nextElementSibling;
  textElement.textContent = "Libri është shtuar në shportë!";
  textElement.classList.remove("show");
  void textElement.offsetWidth; // truk që ri-shton animacionin
  textElement.classList.add("show");
}
