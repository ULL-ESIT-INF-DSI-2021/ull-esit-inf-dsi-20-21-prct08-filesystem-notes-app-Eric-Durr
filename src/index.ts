// import {NoteList} from "./note_list"
// import {User} from "./note_list"
// import {Note} from "./note"

import  * as yargs from "yargs";

yargs
.command('add', "Add a new note",{
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
      alias: 'c',
      type: "string"
  }
})
.command('modify', "Change text to existing note",{
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
})
.command('append', "Add text to existing note",{
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
})
.command('list', "List all notes", {
  user: {
    describe: 'List owner',
    demand: true,
    alias: 'u',
    type: "string"
  },
})
.command('remove', "Remove an existing note", {
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
})
.command('read', "open a single note", {
  user: {
    describe: 'List owner',
    demand: true,
    alias: 'u',
    type: "string"
  },
  title: {
      describe: 'Title of TODO',
      demand: true,
      alias: 't'
  }
})
.help('h')
.argv;

yargs.parse();