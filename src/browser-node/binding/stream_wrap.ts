'use strict';


export class StreamWrap {
	constructor() {
	}
}


export class ShutdownWrap {
	constructor() {
		(<any>console).trace('TODO: someone wants a shutdown_wrap');
	}
}

export class WriteWrap {
	constructor() {
		(<any>console).trace('TODO: someone wants a write_wrap');
	}
}
