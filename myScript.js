window.onload = function() {
  const p = document.querySelector("#paragraph");
  const paragraphs = p.innerText.split("\n\n");
  p.innerHTML = "";
  for (const paragraph of paragraphs) {
    p.innerHTML += `<span>&#x25CF; ${paragraph}</span><br><br>`;
  }
}
  