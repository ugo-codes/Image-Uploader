import { addFile } from "../use-cases/index.js";
import { uploadedFile } from "./post-file.js";
import multer from "multer";
const upload = multer();

export const postFile = uploadedFile(upload, addFile)
