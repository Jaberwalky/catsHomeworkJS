var app = function(){

  addCat("Gizmo", "Human faeces", "http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg")
 
  for ( var i = 0; i < cats.length; i++ ){
    addCat(cats[i].name, cats[i].food, cats[i].src);
  }

}

  var addImgLi = function(imageFilepath){
    var listItem = document.createElement("li");
    var image = document.createElement("img");
    image.src = imageFilepath;
    image.width = 500;
    listItem.appendChild(image);
    return listItem;
  }

  var addFavouriteFoodLi = function(food){
    var listItem = document.createElement("li");
    listItem.innerText = "Favourite Food : " + food;
    return listItem;
  }

  var addNameLi = function(name){
    var listItem = document.createElement("li");
    listItem.classList.add("header-item");
    listItem.innerText = "Name : " + name;
    return listItem;
  }

  var addContainingUL = function(){
    var uLItem = document.createElement("ul");
    uLItem.classList.add("cat");
    return uLItem;
  }

  var appendElements = function(img, faveFood, catName, uLItem, section){
    uLItem.appendChild(catName);
    uLItem.appendChild(faveFood);
    uLItem.appendChild(img);
    section.appendChild(uLItem);
  }

  addCat = function(name, food, image){
    var img = addImgLi(image);
    var faveFood = addFavouriteFoodLi(food);
    var catName = addNameLi(name);
    var uLItem = addContainingUL();

    var section = document.getElementById("cats");
    appendElements(img, faveFood, catName, uLItem, section);
  }

  var cats = [{ name: "Boba", food: "Sock fluff", src: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}, { name: "Barnaby", food: "Tuna", src: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"}, { name: "Max", food: "Whiskas Temptations", src: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"}]

window.onload = app;