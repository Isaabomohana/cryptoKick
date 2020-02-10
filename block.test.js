const Block = require("./block");

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
});
