import "mocha";
import {expect} from "chai";
import {trueFunction} from "../src/index"

describe("empty test", ()=> {
  it("..", ()=>{
    expect(trueFunction()).to.be.true;
  })
})