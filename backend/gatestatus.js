let unlocked = false;

function unlock() {
  unlocked = true;
}

function lock() {
  unlocked = false;
}

export { unlock, lock, unlocked };
