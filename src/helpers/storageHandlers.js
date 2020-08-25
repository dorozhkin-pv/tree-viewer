const storageName = 'tree';

const storageHandlers = {
	setStorage: tree => {
		localStorage.setItem(storageName, JSON.stringify(tree));
	},

	removeStorage: () => {
		localStorage.removeItem(storageName);
	},

	inStorage: () => {
		const data = JSON.parse(localStorage.getItem(storageName));
		return data;
	}
}

export { storageHandlers }