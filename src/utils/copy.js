export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Copied to clipboard!");
      // Optional: Add a success toast/snackbar here
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  }