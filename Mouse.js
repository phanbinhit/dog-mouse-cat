function Mouse(name) {
	this.name = name;
	this.dead = false;
}

Mouse.prototype.died = function () {
	this.dead = true;
}

module.export = Mouse();