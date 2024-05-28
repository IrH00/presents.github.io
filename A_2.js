function init() {
  const title = document.getElementById("title");
  const presents = document.querySelectorAll("#presents img");
  const unopenButton = document.getElementById("unopen-button");
  const openedCount = document.getElementById("opened-count");

  let openedCountValue = 0;

  presents.forEach((present) => {
    present.addEventListener("click", () => {
      if (!present.classList.contains("opened")) {
        present.src = "p_2.png";
        present.classList.add("opened");
        openedCountValue++;
        openedCount.textContent = `Opened presents: ${openedCountValue}`;

        if (openedCountValue === presents.length) {
          title.textContent = "Enjoy your presents!";
          unopenButton.classList.remove("hidden");
        }
      }
    });
  });

  unopenButton.addEventListener("click", () => {
    presents.forEach((present) => {
      if (present.classList.contains("opened")) {
        present.src = "p_1.png";
        present.classList.remove("opened");
        openedCountValue--;
      }
    });

    if (openedCountValue < presents.length) {
      title.textContent = "Click a present to open it:";
      unopenButton.classList.add("hidden");
      openedCount.textContent = `Opened presents: ${openedCountValue}`;
    }
  });

  unopenButton.classList.add("hidden");
  title.textContent = "Click a present to open it:";
  openedCount.textContent = `Opened presents: ${openedCountValue}`;
}

document.addEventListener("DOMContentLoaded", init);
