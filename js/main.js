const addButton = document.querySelector(".add-button");
const inputText = document.querySelector(".input-text");
const list = document.querySelector(".list");

function addItem() {
  if (inputText.value.trim() === "") return;
  const li = document.createElement("li");

  // like
  const like = document.createElement("span");
  const likeIcon = document.createElement("i");

  like.classList.add("like");
  likeIcon.classList.add("material-icons");
  likeIcon.innerText = "favorite_border";

  //item
  const item = document.createElement("span");
  item.classList.add("item");
  item.innerText = inputText.value;

  //manage
  const manage = document.createElement("span");
  const checkIcon = document.createElement("i");
  const clearIcon = document.createElement("i");
  
  manage.classList.add("manage");
  checkIcon.classList.add("material-icons", "check");
  clearIcon.classList.add("material-icons", "clear");
  checkIcon.innerText = "check";
  clearIcon.innerText = "clear";

  //link
  like.appendChild(likeIcon);
  manage.appendChild(checkIcon);
  manage.appendChild(clearIcon);
  li.appendChild(like);
  li.appendChild(item);
  li.appendChild(manage);
  list.appendChild(li);

  // event: like
  like.addEventListener("click", (e)=>{
    const target = e.target;
    const likeStatus = target.innerText === "favorite" ? "favorite_border" : "favorite";
    target.innerText = likeStatus;
  })

  // event: check
  checkIcon.addEventListener("click", (e)=>{
    const target = e.target.parentNode.parentNode;
    target.classList.add("done");
  })

  // event: clear
  clearIcon.addEventListener("click", (e)=>{
    const target = e.target.parentNode.parentNode;
    target.remove();
  })

  inputText.value = "";
  inputText.focus();
}

inputText.addEventListener("keypress", (e)=>{
  if (e.keyCode == 13) {
    addItem();
  }
})

addButton.addEventListener("click", addItem);