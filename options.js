// Saves options to chrome.storage
const saveOptions = () => {
  const changeNewTab = document.getElementById('changeNewTab').checked;

  chrome.storage.sync.set(
    { changeNewTab: changeNewTab },
    () => {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(() => {
        status.textContent = '';
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome.storage.sync.get(
    { changeNewTab: true },
    (items) => {
      document.getElementById('changeNewTab').checked = items.changeNewTab;
    }
  );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);