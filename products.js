let arr =
  JSON.parse(localStorage.getItem("Products")) || [];

let length = arr.length;
document.querySelector("#counter").append(length);
arr.forEach(function (ele, index) {
  let box = document.createElement("div");
  box.setAttribute("class", "product");

  let img = document.createElement("img");
  img.src = ele.imageUrl;

  let name1 = document.createElement("h2");
  name1.innerText = ele.name;
  let price1 = document.createElement("p");
  price1.innerText = ele.price;

  let btn1 = document.createElement("button");

  btn1.innerText = "Remove";
  btn1.setAttribute("id", "remove");

  btn1.addEventListener("click", function () {
    removeItem(ele, index);
  });

  let btn2 = document.createElement("button");

  btn2.innerText = "sold";
  btn2.setAttribute("id", "sold");
  if (ele.sold == true) {
    btn2.style.background = "red";
  } else {
    btn2.style.background = "green";
  }

  box.append(img, name1, price1, btn1, btn2);
  document.querySelector("#container").append(box);
});

function removeItem(ele, index) {
  arr.splice(index, 1);

  localStorage.setItem("Products", JSON.stringify(arr));
  window.location.reload();
}


