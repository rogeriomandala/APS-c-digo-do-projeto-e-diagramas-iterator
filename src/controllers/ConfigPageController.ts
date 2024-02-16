import { Request, Response } from 'express';
import path from 'path';
import { AppDataSource } from '../database/connection';
import Analytics from '../entity/Analytics';

export default {
  getConfigurationPage(request: Request, response: Response) {
    return response.sendFile(path.join(__dirname, '../public/html/configuration-page.html'));
  },
};
