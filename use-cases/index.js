import 'dotenv/config.js';
import FormData from 'form-data';
import axios from 'axios';
import { storeFile } from './add-file.js';


export const addFile = storeFile(process.env.IMGBB_API_TOKEN, FormData, axios);
