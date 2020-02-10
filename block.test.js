const Block = require("./block");
const { GENESIS_DATA } = require("./config");

describe("Block", () => {
  const timeStamp = "01.01.2020";
  const lastHash = "last hash";
  const hash = "my hash";
  const data = ["data1", "data2"];
  const block = new Block({
    timeStamp,
    lastHash,
    hash,
    data
  });

  it("has all its  properties", () => {
    expect(block.timeStamp).toEqual(timeStamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  describe("genesis()", () => {
    const genesisBlock = Block.genesis();

    it("returns a block instanse", () => {
      expect(genesisBlock instanceof Block).toEqual(true);
    });
    it("return the genesis data", () => {
      expect(genesisBlock).toEqual(GENESIS_DATA);
    });
  });
});
