import "mocha";
import {expect} from "chai";
import {stdout} from "test-console";
import {User} from "../src/user";
// import {Note} from "../src/note";
import {NoteList} from "../src/note_list";

describe("Testing note list", ()=> {
  const newNoteList: NoteList = new NoteList(new User("Eric"));
  it("List must have a linked user user and an empty notes list",()=>{
    expect(newNoteList.user.name).to.be.eq("Eric");
    expect( stdout.inspectSync(()=> newNoteList.showNotes())).to.be.eql([]);
  })
});