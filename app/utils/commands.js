const searchAction = input => ({
  command: 'search',
  argument,
});

const commands = (input) => {
  if (input[0] === ':') {
    if (input[1] === '?' && input.length > 2) {
      return searchAction(input.substr(2));
    }
    if (input[1] === 'w') {
      return {
        command: 'write',
      };
    }
    if (input[1] === 's' && input.length > 4) {
      const subCommand = input.substr(5);
      if (subCommand === 'number') {
        return {
          command: 'setNumber',
        };
      } else if (subCommand === 'nonumber') {
        return {
          command: 'setNoNumber',
        };
      }
    }
  }
  if (input[0] === '?' && input.length > 1) {
    return searchAction(input.substr(1));
  }
  return {};
};

export default commands;
