let isUnlocked = false;

function isUnlocked() {
  unlocked = true;
}

function isLock() {
  unlocked = false;
}

export { unlock, lock, unlocked };
