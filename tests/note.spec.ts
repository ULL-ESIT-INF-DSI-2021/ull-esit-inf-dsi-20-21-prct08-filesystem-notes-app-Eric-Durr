import "mocha";
import {expect} from "chai";
import {Note} from "../src/note"

describe("Default Note class tests", ()=> {
  it("Note creation returns no user, empty content and default color", ()=>{
    let defaultNote: Note = new Note();
    expect(defaultNote.user).to.be.eq(undefined);
    expect(defaultNote.title).to.be.eq("Empty note 1");
    expect(defaultNote.body).to.be.eq("");
    expect(defaultNote.color).to.be.eq("default");
  })
})