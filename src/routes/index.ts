import express from 'express';
import { routerRemessa } from '../modules/formatXmlSelos/routes/Remessa.routes';
import multer from 'multer';
import { uploadText } from '../config/middlewares/multer';

export const routes = express();

routes.use('/remessa',routerRemessa);