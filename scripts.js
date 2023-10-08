let users = document.getElementById("users");
let regex = /^[0-9]+$/i;

function downloadUser(results) {
  fetch('https://randomuser.me/api/?results=' + results)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.results);
      data.results.forEach((element) => {
        users.innerHTML = 
        `<div class="col">
          <div class="card h-100">
            <img src="${element.picture.large}" class="card-img-top"
              alt="Skyscrapers" />
            <div class="card-body">
              <p class="card-text">
                <p>cell: ${element.cell}</p>
                <p>city: ${element.location.city}</p>
                <p>postcode: ${element.location.postcode}</p>
                <p>email: ${element.email}</p>
              </p>
            </div>
            <div class="card-footer">
              <button type="button" class="btn btn-danger w-100" onclick="deleteUser(event)">Delete</button>
            </div>
          </div>
        </div>` + users.innerHTML;
    });
  });
}

function deleteUser(event) {
  event.target.parentElement.parentElement.parentElement.remove();
}

function downloadCustom() {
  let results = prompt("Please enter how many people you want to download", "1");
  if (results == null || results == "") {
    downloadUser(1);
  } else if (isNumber(results)) {
    downloadUser(results);
  } else {
    alert("You enter: " + results + "\nIt's not number. Try one more time");
  }
}

function isNumber(input) {
    return regex.test(input);
}

function deleteAll() {
  users.innerHTML = '';
}