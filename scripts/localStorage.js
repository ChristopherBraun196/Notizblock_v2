function saveData() {
  let inputRef = document.getElementById("data_input");

  if (inputRef.value != "") {
    myData.push(inputRef.value);
  }

  saveToLocalStorage();

  render();
  inputRef.value = "";
}

function saveToLocalStorage() {
  localStorage.setItem("notesAppData", JSON.stringify(allNotes));
}

function loadFromLocalStorage() {
  let stored = JSON.parse(localStorage.getItem("notesAppData"));

  if (!stored) {
    return;
  }

  allNotes = stored;
}
