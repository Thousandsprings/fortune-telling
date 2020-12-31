const result = document.querySelector(".card-text");
const omikuji = ["Kyou", "Daikichi", "Kichi", "Chuukichi", "Shoukichi"];

const span = document.querySelector("span");
const button = document.querySelector("button");

let func = (button) => {
  button.innerHTML = "Dein Schicksal ist...";
};

button.addEventListener("click", () => {
  let num = Math.floor(Math.random() * omikuji.length);
  const unsei = omikuji[num];

  let img = [
    { name: "Kyou", src: "img/omikuji_kyou.png" },
    { name: "Daikichi", src: "img/omikuji_daikichi.png" },
    { name: "Kichi", src: "img/omikuji_kichi.png" },
    { name: "Chukichi", src: "img/omikuji_chuukichi.png" },
    { name: "Shoukichi", src: "img/omikuji_syoukichi.png" },
  ];

  span.classList.add("spinner-border");
  button.classList.add("disabled");

  const promise = new Promise((resolve) => {
    setTimeout(() => {
      span.classList.remove("spinner-border");
      result.innerHTML = unsei;
      document.getElementById("images").src = img[num].src;
      resolve();
    }, 3000);
  });

  promise.then(() => {
    setTimeout(() => {
      if (unsei === "Daikichi") {
        alert("Omedetou!");
      }
    }, 500);
  });
});
