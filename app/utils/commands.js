const searchAction = input => ({
  command: 'search',
  argument: input.substr(2),
});

const commands = (input) => {
  if (input[0] === ':') {
    if (input[1] === '?' && input.length > 2) {
      return searchAction(input);
    }
    if (input[1] === 'w') {
      return {
        command: 'write',
      };
    }
  }
  if (input[0] === '?' && input.length > 1) {
    return searchAction(input);
  }
  return {};
};

export default commands;
