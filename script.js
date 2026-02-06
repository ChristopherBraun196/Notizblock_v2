let notes = ["hey", "Zahl"];

let trashNotes = [];

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

function deleteNote(indexNote){
   let trashNote = notes.splice(indexNote, 1)
   trashNotes.push(trashNote);
    renderNotes();
    renderArchivNotes() 
}

function renderArchivNotes() {
  let archivContentRef = document.getElementById("archiv_content");
  archivContentRef.innerHTML = "";

  for (let indexArchivNote = 0; indexArchivNote < trashNotes.length; indexArchivNote++) {    
    archivContentRef.innerHTML += getArchivNoteTemplate(indexArchivNote);
  }
}

//templates

function getNoteTemplate(indexNote) {
  return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}

function getArchivNoteTemplate(indexArchivNote) {
  return `<p>+ ${trashNotes[indexArchivNote]}<button onclick="deleteNote(${indexArchivNote})">X</button></p>`;
}