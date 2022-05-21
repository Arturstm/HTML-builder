const fs = require('fs');
const path = require('path');
const extension = fs.readdir(path.join(__dirname, 'secret-folder'), {
	encoding: 'utf-8',
	withFileTypes: false
}, (err, files) => {
	if(err) {
		console.error(err)
		return
	}
	files.forEach(file => {
		const stat = fs.stat(path.join(__dirname, "secret-folder", file), (err, stat) => {
			console.log(path.join(file).split('.').slice(0, -1).join('.') + " - " + path.extname(file).replace(".", "") + " - " + Math.floor(stat.size / 1024) + "kb");
		});
	});
});