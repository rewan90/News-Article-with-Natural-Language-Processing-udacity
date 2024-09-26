module.exports = {
  testEnvironment: 'node',
  maxWorkers: 4,

  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  coverageReporters: ["json", "text", "lcov", "clover"],
  moduleFileExtensions: ['js', 'jsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],
  
};
 