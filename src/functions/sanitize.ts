import DOMPurify from "dompurify";

function cleanData(userInput: string) {
  return DOMPurify.sanitize(userInput);
}

export default cleanData;
