export function incrementCounter(currentState) {
  return currentState.update("counter", counter => counter + 1)
}
