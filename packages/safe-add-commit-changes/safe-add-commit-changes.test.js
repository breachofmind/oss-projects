const safeAddCommitChanges = require('./safe-add-commit-changes');

describe('safe-add-commit-changes', () => {
  it('is a function', () => {
    expect(safeAddCommitChanges).toBeInstanceOf(Function);
  });
});
