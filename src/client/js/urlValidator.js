export function isValidURL(url) {
  const regex = /^https?:\/\/[^\s]+$/;
  if (!regex.test(url)) {
    alert('Invalid URL format. Please enter a valid URL starting with http:// or https://');
    return false;
  }

  // Additional validation rules
  const urlParts = url.split('/');
  const domain = urlParts[2];
  if (domain === 'localhost' || domain === '127.0.0.1') {
    alert('Cannot analyze localhost URLs. Please enter a valid URL.');
    return false;
  }

  return true;
}