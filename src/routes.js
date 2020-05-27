import pageData from './data/data.json'
import PageUI from './components/PageUI.vue'

// Dynamically add the page routes based on the provided data.json. Also passes the relevant data to these routes as props. They will all be displayed with the same component, but I could imagine maybe having a "template" key for example and using a different component based on its value.
var paths = [];
for(var i = 0; i < pageData.pages.length; i++){
	paths.push({
		path: '/' + pageData.pages[i].slug,
		component: PageUI,
		props: {
			data: pageData.pages[i]
		}
	});
}

export const routes = paths;