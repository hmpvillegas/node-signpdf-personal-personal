export const ERROR_TYPE_UNKNOWN = 1;
export const ERROR_TYPE_INPUT = 2;
export const ERROR_TYPE_PARSE = 3;

class SignPdfError extends Error {
    constructor(msg, type = ERROR_TYPE_UNKNOWN) {
        super(msg);
        this.type = type;
    }
}

// Shorthand
SignPdfError.TYPE_UNKNOWN = ERROR_TYPE_UNKNOWN;
SignPdfError.TYPE_INPUT = ERROR_TYPE_INPUT;
SignPdfError.TYPE_PARSE = ERROR_TYPE_PARSE;

export default SignPdfError;
