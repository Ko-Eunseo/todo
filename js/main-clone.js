const inputText = document.querySelector(".input-text");
const addButton = document.querySelector(".add-button");
const list = document.querySelector(".list"); //ul 가져오기

const likeButtons = document.querySelectorAll(".like");

function addItem() {

  if(inputText.value.trim() === "") return; //한줄이라 중괄호 생략, trim:공백없애는명령문

  // like
  const like = document.createElement("span");
  const likeIcon = document.createElement("i");
  like.classList.add("like"); //클래스 추가
  likeIcon.classList.add("material-icons");
  likeIcon.innerText = "favorite_border";
  like.appendChild(likeIcon);

  //item
  const item = document.createElement("span");
  item.classList.add("item");
  item.innerText = inputText.value;

  //manage
  const manage = document.createElement("span");
  const checkIcon = document.createElement("i");
  const clearIcon = document.createElement("i");
  checkIcon.classList.add("material-icons", "check");
  clearIcon.classList.add("material-icons", "clear");
  checkIcon.innerText = "check";
  clearIcon.innerText = "clear";
  manage.classList.add("manage");
  manage.appendChild(checkIcon);
  manage.appendChild(clearIcon);

  const li = document.createElement("li"); //li만들기

  // event:like
  like.addEventListener("click", (e) => {
    const target = e.target;
    const text = target.innerText === "favorite" ? "favorite_border" : "favorite";
    target.innerText = text;
  })

  // event:check
  checkIcon.addEventListener("click", (e) => {
    const target = e.target.parentNode.parentNode;
    target.classList.add("done");
  })

  // event:clear
  clearIcon.addEventListener("click", (e) => {
    const target = e.target.parentNode.parentNode;
    list.removeChild(target);
  })
  

  li.appendChild(like);
  li.appendChild(item);
  li.appendChild(manage);
  list.appendChild(li); //ul의 자식 요소로 집어넣음

  inputText.value = ""; //인풋초기화
  inputText.focus(); //인풋을 했을때 포커스(커서)가 갈 수 있도록 함
}

inputText.addEventListener("keypress", e => {
  if (e.keyCode == 13) {
    addItem();
  }
})

addButton.addEventListener("click", addItem)