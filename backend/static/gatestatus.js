let isUnlocked = false;

function setUnlocked() {
  isUnlocked = true;
}

function setLocked() {
  isUnlocked = false;
}

export { isUnlocked, setUnlocked, setLocked };
