/* eslint-disable no-unused-vars */

const renameFiles = (arrayOfFilenames) => {
  const nameTracker = {};
  return arrayOfFilenames.map((name) => {
    if (nameTracker[name] === undefined) {
      nameTracker[name] = 0;
      return name;
    }
    let extension = nameTracker[name] + 1;
    nameTracker[name] = extension;
    let extensionName = `${name}(${extension})`;

    while (
      nameTracker[extensionName] >= 0 ||
      arrayOfFilenames.includes(extensionName)
    ) {
      extension += 1;
      extensionName = `${name}(${extension})`;
    }

    nameTracker[extensionName] = 0;
    return extensionName;
  });
};
