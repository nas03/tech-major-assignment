class BadRequestError extends Error {
	constructor(message: string) {
		super(message);
		this.name = 'BadRequestError';
        console.log('Bad Request Error: ', message);
	}
}
