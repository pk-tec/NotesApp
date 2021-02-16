const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");
const addNotes = (title, body) => {
	const notes = loadNotes();
	const duplicateNote = notes.find((note) => note.title === title);

	if (!duplicateNote) {
		notes.push({
			title: title,
			body: body,
		});
		saveNotes(notes);
		console.log(chalk.green("New note added"));
	} else {
		console.log(chalk.red("Note title taken!"));
	}
};

const removeNotes = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);
	if (notes.length > notesToKeep.length) {
		console.log(chalk.green("Notes Removed"));
		saveNotes(notesToKeep);
	} else {
		console.log(chalk.red("Notes Not found"));
	}
};

const listNotes = () => {
	const notes = loadNotes();
	console.log(chalk("Your Notes"));
	notes.forEach((e) => {
		console.log(chalk.green(e.title));
	});
};

const readNotes = (title) => {
	const notes = loadNotes();
	const searchNote = notes.find((note) => note.title === title);
	if (searchNote) {
		console.log(chalk.green(searchNote.title) + " " + searchNote.body);
	} else {
		console.log(chalk.red("Notes not found!"));
	}
};

const saveNotes = (notes) => {
	const dataJSON = JSON.stringify(notes);
	fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync("notes.json");
		const dataJSON = dataBuffer.toString();
		return JSON.parse(dataJSON);
	} catch (e) {
		return [];
	}
};

module.exports = {
	addNotes: addNotes,
	removeNotes: removeNotes,
	listNotes: listNotes,
	readNotes: readNotes,
};
