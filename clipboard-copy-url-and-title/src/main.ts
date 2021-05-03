import App from './App.svelte';

async function getCurrentTabInfo() {
	let queryOptions = { active: true, currentWindow: true }
  let [tab] = await chrome.tabs.query(queryOptions);
	console.log(tab);
  return tab;
}

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});


export default app;