const matchedResults = (array, input) => {
	if (input) {
		return (matched = array.filter(ele => {
			if (ele.substr(0, input.length) == input) {
				return ele;
			}
		}));
	}
};
module.exports = matchedResults;
