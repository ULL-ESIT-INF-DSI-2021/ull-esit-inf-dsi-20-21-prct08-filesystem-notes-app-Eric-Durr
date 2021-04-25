import  * as yargs from "yargs";
import {NoteList} from "./note_list"
import {User} from "./user"
import { Note} from "./note";

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
      user: {
        describe: 'List owner',
        demand: true,
        alias: 'u',
        type: "string"
      },
      title: {
          describe: 'Note title',
          demand: true,
          alias: 't',
          type: "string"
      },
      body: {
          describe: 'Note body',
          demand: false,
          alias: 'b',
          type: "string"
      },
      color: {
          describe: 'Note color',
          demand: false,
          alias: 'c'
      }
  },
  handler(argv) {
    if ( typeof argv.user === 'string' 
         && typeof argv.title === 'string') {
        const noteList = new NoteList(new User(argv.user));
        if (typeof argv.body === 'string') {
          if (typeof argv.color === 'string') {
            noteList.addNote(new Note(argv.title, argv.body, argv.color));
          } else {
            noteList.addNote(new Note(argv.title, argv.body));
          }
        } else {
          noteList.addNote(new Note(argv.title));
        }
    }
  },
});

yargs.command({
  command: 'modify',
  describe: 'modify note content',
  builder: {
      user: {
        describe: 'List owner',
        demand: true,
        alias: 'u',
        type: "string"
      },
      title: {
          describe: 'Note title',
          demand: true,
          alias: 't',
          type: "string"
      },
      body: {
          describe: 'Note body',
          demand: false,
          alias: 'b',
          type: "string"
      }
  },
  handler(argv) {
    if ( typeof argv.user === 'string' 
         && typeof argv.title === 'string') {
        const noteList = new NoteList(new User(argv.user));
     
          if (typeof argv.body === 'string') {
     

            noteList.loadNote(argv.title);
            
            noteList.modNote(argv.title, argv.body);
          } 
           
    }
  },
});


yargs.command({
  command: 'append',
  describe: 'append to note content',
  builder: {
      user: {
        describe: 'List owner',
        demand: true,
        alias: 'u',
        type: "string"
      },
      title: {
          describe: 'Note title',
          demand: true,
          alias: 't',
          type: "string"
      },
      body: {
          describe: 'Note body',
          demand: false,
          alias: 'b',
          type: "string"
      }
  },
  handler(argv) {
    if ( typeof argv.user === 'string' 
         && typeof argv.title === 'string') {
        const noteList = new NoteList(new User(argv.user));
        if (typeof argv.body === 'string') {
            noteList.appendNote(argv.title, argv.body);
        }       
    }
  },
});

yargs.command({
  command: 'remove',
  describe: 'remove a note',
  builder: {
      user: {
        describe: 'List owner',
        demand: true,
        alias: 'u',
        type: "string"
      },
      title: {
          describe: 'Note title',
          demand: true,
          alias: 't',
          type: "string"
      }
  },
  handler(argv) {
    if ( typeof argv.user === 'string' 
         && typeof argv.title === 'string') {
        const noteList = new NoteList(new User(argv.user));
         noteList.rmNote(argv.title);
    }
  },
});


yargs.command({
  command: 'read',
  describe: 'read a single note',
  builder: {
      user: {
        describe: 'List owner',
        demand: true,
        alias: 'u',
        type: "string"
      },
      title: {
          describe: 'Note title',
          demand: true,
          alias: 't',
          type: "string"
      }
  },
  handler(argv) {
    if ( typeof argv.user === 'string' 
         && typeof argv.title === 'string') {
        const noteList = new NoteList(new User(argv.user));
        noteList.readNote(argv.title);
        
    }
  },
});

yargs.command({
  command: 'show',
  describe: 'list all notes',
  builder: {
      user: {
        describe: 'List owner',
        demand: true,
        alias: 'u',
        type: "string"
      }
  },
  handler(argv) {
    if ( typeof argv.user === 'string' 
         && typeof argv.title === 'string') {
        const noteList = new NoteList(new User(argv.user));
         noteList.showNotes();
    }
  },
});

yargs.parse();
