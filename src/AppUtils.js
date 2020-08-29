import * as ERROR_MESSAGES from "./ErrorMessage";


export const getErrorMessage = code => {
  var message = null;
  console.log('code', code);
  switch (code) {
    case "auth/user-not-found":
      message = ERROR_MESSAGES.USER_NOT_FOUND;
      break;
    case "auth/email-already-in-use":
      message = ERROR_MESSAGES.EMAIL_EXISTS;
      break;
    case "auth/internal-error":
      message = ERROR_MESSAGES.INTERNAL_ERROR;
      break;
    case "auth/invalid-credential":
      message = ERROR_MESSAGES.INVALID_CREDENTIAL;
      break;
    case "auth/invalid-email":
      message = ERROR_MESSAGES.INVALID_EMAIL_FORMAT;
      break;
    case "auth/wrong-password":
      message = ERROR_MESSAGES.INVALID_PASSWORD;
      break;
    case "auth/weak-password":
      message = ERROR_MESSAGES.WEAK_PASSWORD;
      break;
    default:
      message = ERROR_MESSAGES.DEFAULT_MESSAGE;
      break;
  }
  return message;
}