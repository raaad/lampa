new MutationObserver(() =>
  document
    .getElementsByClassName('full-start__button view--trailer')[0]
    ?.remove()
).observe(document, { childList: true, subtree: true });

console.log('##### TRAILER BUTTON REMOVED');
