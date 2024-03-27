export const capitalize = (word: string): string => {
	if (word === '') return '';
	return word[0].toUpperCase() + word.slice(1, word.length);
};
