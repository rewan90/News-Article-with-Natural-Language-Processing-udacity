import axios from 'axios';
import { isValidURL } from './urlValidator';

// Replace with the server URL
const serverURL = 'http://localhost:8001';
const form = document.getElementById('url-form');
const urlInput = document.getElementById('url');

if (form && urlInput) {
  form.addEventListener('submit', handleSubmit);
} else {
  console.error('Form or URL input element not found');
}

function handleSubmit(event) {
  event.preventDefault();
  const url = urlInput.value;

  if (isValidURL(url)) {
    console.log("::: Form Submitted :::", url);
    sendPostRequest(serverURL + '/api/analyze', { url })
      .then((response) => {
        updateUI(response);
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    alert('Seems like an invalid URL, please try with a valid URL.');
  }
}


export function sendPostRequest(url, data) {
  console.log(url, data);
  return axios.post(url, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
}

function updateUI(data) {
  const subjectivity = data.subjectivity;
  const agreement = data.agreement;
  const confidence = data.confidence;
  const irony = data.irony;

  document.getElementById('subjectivity').innerHTML = `Subjectivity: ${subjectivity}`;
  document.getElementById('agreement').innerHTML = `Agreement: ${agreement}`;
  document.getElementById('confidence').innerHTML = `Confidence: ${confidence}`;
  document.getElementById('irony').innerHTML = `Irony: ${irony}`;
}


export { handleSubmit };