var btnModal = document.querySelector(".btn__modal");
btnModal.addEventListener('click', function() {
  let modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");
  modalDiv.innerHTML = `
    <div class="modal__content">
      <span class="close">&times;</span>
      <h1 class="modal__title">Sign In</h1>
      <form action="">
        <div class="user-info">
              <div class="user-value">
                <label class="user-title" for="name">Enter your first name and last name:</label>
                <input class="user-name" type="text" id="name" placeholder="Name">
            </div>
            <div class="user-value-2">
                <label class="user-title" for="num">Enter your age:</label>
                <input type="number" class="user-age" placeholder="Age">
            </div>
            <button class="btn btn__ok">OK</button>
            <button class="btn btn__close">Cancel</button>
      </form>
    </div>
    `;
  document.body.appendChild(modalDiv);
  let span = document.querySelector(".close");
  let btnClose = document.querySelector(".btn__close");
  let btnGetInput = document.querySelector(".btn__ok");
  
  span.onclick = function() {
    modalDiv.remove();
  };

  btnClose.onclick = function() {
    modalDiv.remove();
  };

  btnGetInput.onclick = function() {
    let inputName = document.querySelector(".user-name").value;
    let inputAge = document.querySelector(".user-age").value;
    console.log(`${inputName}, ${inputAge} age.`);
  }

});

var btnModal = document.querySelector(".btn--ghost");
btnModal.addEventListener('click', function() {
  let modalDiv = document.createElement("div");
  modalDiv.classList.add("modal");
  modalDiv.innerHTML = `
    <div class="modal__content">
      <span class="close">&times;</span>
      <h1 class="modal__title">Learn more...</h1>
      <form action="">
        <div class="user-info">
              <div class="user-value">
                <label class="user-title" for="name">Enter your first name and last name:</label>
                <input class="user-name" type="text" id="name" placeholder="Name">
            </div>
            <div class="user-value-2">
                <label class="user-title" for="num">Enter your age:</label>
                <input type="number" class="user-age" placeholder="Age">
            </div>
            <button class="btn btn__ok">OK</button>
            <button class="btn btn__close">Cancel</button>
      </form>
    </div>
    `;
  document.body.appendChild(modalDiv);
  let span = document.querySelector(".close");
  let btnClose = document.querySelector(".btn__close");
  let btnGetInput = document.querySelector(".btn__ok");
  
  span.onclick = function() {
    modalDiv.remove();
  };

  btnClose.onclick = function() {
    modalDiv.remove();
  };

  btnGetInput.onclick = function() {
    let inputName = document.querySelector(".user-name").value;
    let inputAge = document.querySelector(".user-age").value;
    console.log(`${inputName}, ${inputAge} age.`);
  }

});