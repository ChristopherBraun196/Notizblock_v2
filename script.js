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
  let trashNoteTitle = allNotes.notesTitles.splice(indexNote, 1);
  let trashNote = allNotes.notes.splice(indexNote, 1);

  allNotes.trashNotesTitles.push(trashNoteTitle);
  allNotes.trashNotes.push(trashNote);

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
  allNotes.trashNotesTitles.splice(indexTrashNote, 1);
  allNotes.trashNotes.splice(indexTrashNote, 1);

  renderTrashNotes();
}

function renderArchive() {
  let archivContentRef = document.getElementById("archiv_content");
  archivContentRef.innerHTML = "";

  for (let i = 0; i < allNotes.archivNotesTitles.length; i++) {
    archivContentRef.innerHTML += getArchivNoteTemplate(i);
  }
}

function moveToArchive(index) {
  let movedTitle = allNotes.notesTitles.splice(index, 1);
  let moveNote = allNotes.notes.splice(index, 1);

  allNotes.archivNotesTitles.push(movedTitle);
  allNotes.archivNotes.push(moveNote);

  renderNotes();
  renderArchive();
}

function archiveToTrash(index) {
  let movedTitle = allNotes.archivNotesTitles.splice(index, 1);
  let moveNote = allNotes.archivNotes.splice(index, 1);

  allNotes.trashNotesTitles.push(movedTitle);
  allNotes.trashNotes.push(moveNote);

  renderArchive();
  renderTrashNotes();
}

function archivToNote(index) {
  let moveTitle = allNotes.archivNotesTitles.splice(index, 1);
  let moveNote = allNotes.archivNotes.splice(index, 1);

  allNotes.notesTitles.push(moveTitle);
  allNotes.notes.push(moveNote);

  renderNotes();
  renderArchive();
}

function trashToNote(index) {
  let moveTitle = allNotes.trashNotesTitles.splice(index, 1);
  let moveNote = allNotes.trashNotes.splice(index, 1);

  allNotes.notesTitles.push(moveTitle);
  allNotes.notes.push(moveNote);

  renderNotes();
  renderTrashNotes();
}

function trashToArchiv(index) {
  let moveTitle = allNotes.trashNotesTitles.splice(index, 1);
  let moveNote = allNotes.trashNotes.splice(index, 1);

  allNotes.archivNotesTitles.push(moveTitle);
  allNotes.archivNotes.push(moveNote);

  renderTrashNotes();
  renderArchive();
}
