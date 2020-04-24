describe("your test suite", () => {
  window.URL.createObjectURL = jest.fn();

  afterEach(() => {
    window.URL.createObjectURL.mockReset();
  });

  it("your test case", () => {
    expect(true).toBeTruthy();
  });
});
