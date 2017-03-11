const commands = (input) => {
  if (input[0] === ':') {
    if (input[1] === '?' && input.length > 2) {
      return {
        command: 'search',
        argument: input.substr(2),
      };
    }
  }
  return {};
};

export default commands;
