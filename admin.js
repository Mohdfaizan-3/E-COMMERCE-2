function ConstructorR(n, c, u, p, g, s) {
  this.name = n;
  this.category = c;
  this.imageUrl = u;
  this.price = p;
  this.gender = g;
  this.sold = s;
}

document
  .querySelector("#data")
  .addEventListener("submit", addProduct);

let arr=[];

function addProduct() {
  event.preventDefault();

  let form = document.querySelector("#data");

  let name = form.name.value;
  let category = form.category.value;
  let imageUrl = form.image.value;
  let price = form.price.value;
  let gender = form.gender.value;
  let sold = form.sold.checked;

  let p = new ConstructorR(
    name,
    category,
    imageUrl,
    price,
    gender,
    sold
  );

    arr.push(p);
    
    localStorage.setItem('Products',JSON.stringify(arr))
    


  
}
