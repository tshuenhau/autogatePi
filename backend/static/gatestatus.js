let isUnlocked = false;

function setUnlocked() {
  unlocked = true;
}

function setLocked() {
  unlocked = false;
}

export { unlock, lock, unlocked };
