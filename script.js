let allNotes = {
  notesTitles: ["Hailie", "Mittag", "Abends"],
  notes: ["Hausaugaben machen", "Kochen", "JavaScript lernen"],

  trashNotesTitles: [],
  trashNotes: [],

  archivNotesTitles: [],
  archivNotes: [],
};

function init() {
  loadFromLocalStorage();
  renderAllNotes();
}

function renderAllNotes() {
  renderNotes();
  renderArchive();
  renderTrashNotes();
}

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < allNotes.notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function addNote() {
  let noteInputRef = document.getElementById("note_input");
  let titleInputRef = document.getElementById("note_title");

  let noteInput = noteInputRef.value;
  let titleInput = titleInputRef.value;

  //Only saves if both fields are filled in
  if (noteInput && titleInput) {
    allNotes.notes.push(noteInput);
    allNotes.notesTitles.push(titleInput);

    renderNotes();
    saveToLocalStorage();

    noteInputRef.value = "";
    titleInputRef.value = "";
  }
}

function deleteNote(indexNote) {
  let trashNoteTitle = notesTitles.splice(indexNote, 1);
  let trashNote = notes.splice(indexNote, 1);

  trashNotesTitles.push(trashNoteTitle);
  trashNotes.push(trashNote);

  renderNotes();
  renderTrashNotes();
  saveToLocalStorage();
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < allNotes.trashNotes.length;
    indexTrashNote++
  ) {
    trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
  }
}

function emptyTrash(indexTrashNote) {
  trashNotesTitles.splice(indexTrashNote, 1);
  trashNotes.splice(indexTrashNote, 1);

  renderTrashNotes();
}

function renderArchive() {
  let archivContentRef = document.getElementById("archiv_content");
  archivContentRef.innerHTML = "";

  for (let i = 0; i < allNotes.archivNotesTitles.length; i++) {
    archivContentRef.innerHTML += getArchivNoteTemplate(i);
  }
}

function moveToArchive(indexNote) {
  let movedTitle = notesTitles.splice(indexNote, 1);
  let moveNote = notes.splice(indexNote, 1);

  archivNotesTitles.push(movedTitle);
  archivNotes.push(moveNote);

  renderNotes();
  renderArchive();
}

function archiveToTrash(index) {
  let movedTitle = archivNotesTitles.splice(index, 1);
  let moveNote = archivNotes.splice(index, 1);

  trashNotesTitles.push(movedTitle);
  trashNotes.push(moveNote);

  renderArchive();
  renderTrashNotes();
}

function archivToNote(index) {
  let moveTitle = archivNotesTitles.splice(index, 1);
  let moveNote = archivNotes.splice(index, 1);

  notesTitles.push(moveTitle);
  notes.push(moveNote);

  renderNotes();
  renderArchive();
}

function trashToNote(index) {
  let moveTitle = trashNotesTitles.splice(index, 1);
  let moveNote = trashNotes.splice(index, 1);

  notesTitles.push(moveTitle);
  notes.push(moveNote);

  renderNotes();
  renderTrashNotes();
}

function trashToArchiv(index) {
  let moveTitle = trashNotesTitles.splice(index, 1);
  let moveNote = trashNotes.splice(index, 1);

  archivNotesTitles.push(moveTitle);
  archivNotes.push(moveNote);

  renderTrashNotes();
  renderArchive();
}
