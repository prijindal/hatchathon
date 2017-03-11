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
    if (input[1] === 's' && input.length > 4) {
      let subCommand = input.substr(5);
      console.log(subCommand);
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
    return searchAction(input);
  }
  return {};
};

export default commands;
