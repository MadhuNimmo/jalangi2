// __tests__/FileSummarizer-test.js
'use strict';
const path = require("path");
jest.mock('fs');

describe('listFilesInDirectorySync', () => {
  /*const MOCK_FILE_INFO = {
    '/path/to/file1.js': 'console.log("file1 contents");',
    '/path/to/file2.txt': 'file2 contents',
  };*/

  /*beforeEach(() => {
    // Set up some mocked out file info before each test
    require('fs').__setMockFiles('/Users/madhurimachakraborty/Documents/GitHub/DynamicCallGraph/examples/');
  });*/

  test('includes all files in the directory in the summary', async () => {
    const FileSummarizer = require('../src/FileSummarizer');
    const fileSummary = await FileSummarizer.summarizeFilesInDirectorySync(path.resolve('./examples/'));
    expect(fileSummary).toBe(2);
  });
});