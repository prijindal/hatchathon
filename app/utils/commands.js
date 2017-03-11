const searchAction = argument => ({
  command: 'search',
  argument,
});

const undo = () => ({ command: 'undo' });

const redo = () => ({ command: 'redo' });

const commands = (input) => {
  if (input[0] === ':') {
    if (input[1] === '?' && input.length > 2) {
      return searchAction(input.substr(2));
    } else if (input[1] === 'w') {
      return {
        command: 'write',
      };
    } else if (input[1] === 's' && input.length > 4) {
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
    } else if (input[1] === 'u') {
      return undo();
    } else if (input.length > 4 && input === ':redo') {
      return redo();
    }
  } else if (input[0] === '?' && input.length > 1) {
    return searchAction(input.substr(1));
  } else if (input[0] === 'u') {
    return undo();
  }
  return {
    command: 'error',
    argument: 492,
    text: `Not an editor command: ${input}`,
  };
};

export default commands;
