import { render } from './renderer/renderer';

export const loadPage = async (page) => {
  const response = await fetch(page);

  if (response.status !== 200) {
    console.log(`Looks like there was a problem. Status Code: ${response.status}`);
  } else {
    const data = await response.json();
    render(data, document.getElementById('contentPane'));
  }
};

loadPage('page.json');
