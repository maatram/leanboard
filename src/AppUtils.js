import * as ERROR_MESSAGES from "./ErrorMessage";


export const getErrorMessage = code => {
  var message = null;
  switch (code) {
    case "auth/user-not-found":
      message = ERROR_MESSAGES.USER_NOT_FOUND;
      break;
    case "auth/email-already-exists":
      message = ERROR_MESSAGES.EMAIL_ALREADY_EXIST;
      break;
    case "auth/email-already-exists":
      message = ERROR_MESSAGES.EMAIL_ALREADY_EXIST;
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
    case "auth/invalid-password":
      message = ERROR_MESSAGES.INVALID_PASSWORD;
      break;
    default:
      message = ERROR_MESSAGES.DEFAULT_MESSAGE;
      break;
  }
  return message;
}