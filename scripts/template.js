
function getNoteTemplate(indexNote) {
  return `
    <div class="note-card" id="note-${indexNote}">
      <div class="note-header">
        <h3>${notesTitles[indexNote]}</h3>
      </div>
      
      <div class="note-body">
        <p>${notes[indexNote]}</p>
      </div>

      <div class="note-footer">
        <button class="btn-delete" onclick="deleteNote(${indexNote})">
          <span><img src="./assets/icon/trash.svg" alt="logoTrash"></span> Löschen
        </button>
        <button class="btn-archive" onclick="moveToArchive(${indexNote})">
          <span><img src="./assets/icon/archiv.svg" alt="logoArchiv"></span> Archivieren
        </button>
      </div>
    </div>
  `;
}

function getTrashNoteTemplate(indexTrashNote) {
  return `
    <div class="note-card trash-card">
      <div class="note-header">
        <h3>${trashNotesTitles[indexTrashNote]}</h3>
      </div>
      
      <div class="note-body">
        <p>${trashNotes[indexTrashNote]}</p>
      </div>

      <div class="note-footer">
        <button class="btn-restore" onclick="trashToNote(${indexTrashNote})" title="Wiederherstellen">
          <img src="./assets/icon/logo.svg" alt="logoNote"> Eingang
        </button>
        <button class="btn-archive-small" onclick="trashToArchiv(${indexTrashNote})" title="Archivieren">
         <img src="./assets/icon/archiv.svg" alt="logoArchiv"> Archivieren
        </button>
        <button class="btn-delete-final" onclick="emptyTrash(${indexTrashNote})" title="Endgültig löschen">
          🗑️ Löschen
        </button>
      </div>
    </div>
  `;
}

function getArchivNoteTemplate(index) {
  return `
    <article class="note-card archive-card">
      <div class="note-header">
        <h3>${archivNotesTitles[index]}</h3>
      </div>
      
      <div class="note-body">
        <p>${archivNotes[index]}</p>
      </div>

      <div class="note-footer">
        <button class="btn-restore" onclick="archivToNote(${index})" title="Zurück zum Eingang">
          <img src="./assets/icon/logo.svg" alt="logoNote"> Eingang
        </button>
        <button class="btn-delete" onclick="archiveToTrash(${index})" title="In den Papierkorb">
          <img src="./assets/icon/trash.svg" alt="logoTrash"> Löschen
        </button>
      </div>
    </article>
  `;
}

