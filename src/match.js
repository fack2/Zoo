const matchedResults = (array, input) => {
	if (input) {
		var arr1 =  (array.filter(ele => {
			if (ele.substr(0, input.length) == input) {
				return ele;
			}
		}));
	}
	return [...new Set(arr1)];
};

module.exports = matchedResults;
