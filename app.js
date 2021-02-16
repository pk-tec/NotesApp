const chalk = require("chalk");
const { argv } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes");
// Customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
	command: "add",
	describe: "Add a new note",
	builder: {
		title: {
			describe: "Notes title",
			demandOption: true,
			type: "string",
		},
		body: {
			describe: "Add something",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.addNotes(argv.title, argv.body);
	},
});

//Create Remove Command

yargs.command({
	command: "remove",
	describe: "Remove a note",
	builder: {
		title: {
			describe: "Remove note",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.removeNotes(argv.title);
	},
});
//Create list Command

yargs.command({
	command: "list",
	describe: "View list of notes",
	handler() {
		notes.listNotes();
	},
});
//Create read Command

yargs.command({
	command: "read",
	describe: "Reading the note",
	builder: {
		title: {
			describe: "Read note",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.readNotes(argv.title);
	},
});

// console.log(yargs.argv);
yargs.parse();
