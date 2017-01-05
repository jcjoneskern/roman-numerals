describe("converter", function() {
  //testing basic numbers
  it("converts 1 to I", function() {
    expect(convert(1)).toEqual("I");
  });
  it("converts 5 to V", function() {
    expect(convert(5)).toEqual("V");
  });
  it("converts 10 to X", function() {
    expect(convert(10)).toEqual("X");
  });
  it("converts 50 to L", function() {
    expect(convert(50)).toEqual("L");
  });
  it("converts 100 to C", function() {
    expect(convert(100)).toEqual("C");
  });
  it("converts 500 to D", function() {
    expect(convert(500)).toEqual("D");
  });
  it("converts 1000 to M", function() {
    expect(convert(1000)).toEqual("M");
  });
  //provided test cases for number --> numeral
  it("converts 3 to III", function() {
    expect(convert(3)).toEqual("III");
  });
  it("converts 9 to IX", function() {
    expect(convert(9)).toEqual("IX");
  });
  it("converts 1066 to MLXVI", function() {
    expect(convert(1066)).toEqual("MLXVI");
  });
  it("converts 1989 to MCMLXXXIX", function() {
    expect(convert(1989)).toEqual("MCMLXXXIX");
  });
  //numeral --> number
  it("converts III to 3", function() {
    expect(convert("III")).toEqual(3);
  });
  it("converts IX to 9", function() {
    expect(convert("IX")).toEqual(9);
  });
  it("converts MLXVI to 1066", function() {
    expect(convert("MLXVI")).toEqual(1066);
  });
  it("converts MCMLXXXIX to 1989", function() {
    expect(convert("MCMLXXXIX")).toEqual(1989);
  });
});
