let notesTitles = ["Hailie", "Mittag", "Abends"];
let notes = ["Hausaugaben machen", "Kochen", "JavaScript lernen"];

let trashNotesTitles = [];
let trashNotes = [];

let archivNotesTitles = [];
let archivNotes = [];

function init() {
  renderNotes();
}

function renderNotes() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let indexNote = 0; indexNote < notes.length; indexNote++) {
    contentRef.innerHTML += getNoteTemplate(indexNote);
  }
}

function addNote() {
  let noteInputRef = document.getElementById("note_input");
  let noteInput = noteInputRef.value;

  notes.push(noteInput);

  renderNotes();

  noteInputRef.value = "";
}

function deleteNote(indexNote) {
  let trashNoteTitle = notesTitles.splice(indexNote, 1);
  let trashNote = notes.splice(indexNote, 1);

  trashNotesTitles.push(trashNoteTitle);
  trashNotes.push(trashNote);

  renderNotes();
  renderTrashNotes();
}

function renderTrashNotes() {
  let trashContentRef = document.getElementById("trash_content");
  trashContentRef.innerHTML = "";

  for (
    let indexTrashNote = 0;
    indexTrashNote < trashNotes.length;
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

  for (let i = 0; i < archivNotesTitles.length; i++) {
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
