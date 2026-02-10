function getNoteTemplate(indexNote) {
  return `<p>+ <B>title:${notesTitles[indexNote]} </b> <br>${notes[indexNote]}
    <button onclick="deleteNote(${indexNote})">Papierkorb</button> 
    <button onclick="moveToArchive(${indexNote})">Archiv</button></p>`;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `<p>+<B>title:${trashNotesTitles[indexTrashNote]}</b><br> ${trashNotes[indexTrashNote]}
  <button onclick="emptyTrash(${indexTrashNote})">Delete</button>
  <button onclick="trashToNote(${indexTrashNote})">Eingang</button>
  <button onclick="trashToArchiv(${indexTrashNote})">Archiv</button>   
  </p>`;
}

function getArchivNoteTemplate(index) {
  return `<p><b>${archivNotesTitles[index]}</b><br>${archivNotes[index]}
    <button onclick="archiveToTrash(${index})">Papierkorb</button>
    <button onclick="archivToNote(${index})">Eingang</button>     
       
 <p> `;
}
