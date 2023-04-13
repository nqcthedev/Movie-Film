import { ExtendFile } from "./types";

export function fileTypeByUrl(fileUrl = '') {
  return (fileUrl && fileUrl.split('.').pop()) || '';
}

// ----------------------------------------------------------------------

export function fileNameByUrl(fileUrl: string) {
  return fileUrl.split('/').pop();
}

// ----------------------------------------------------------------------

export function fileData(file: ExtendFile | string) {
  // url
  if(typeof file === "string") {
    return {
      key:file,
      preview:file,
      name:fileNameByUrl(file),
      type:fileTypeByUrl(file)
    };
  }
}