import { Request, Response } from 'express';
import { AppDataSource } from '../database/connection';
import ActivityParams from '../entity/ActivityParams';

export default {
  async getActivityParams(request: Request, response: Response) {
    try {
      const activityParamRepository = AppDataSource.getRepository(ActivityParams);

      const activityParams = await activityParamRepository.find({ select: { name: true, type: true } });

      return response.status(200).json(activityParams);
    } catch (error) {
      console.error(error);
      return response.status(500).json("Server error");
    }
  },

  async setActivityParams(request: Request, response: Response) {
    const {
      name,
      type,
    } = request.body;

    try {
      const activityParamsRepository = AppDataSource.getRepository(ActivityParams);
      const activityParam = activityParamsRepository.create({
        name,
        type,

      });

      const savedActivityParam = await activityParamsRepository.save(activityParam);

      return response.status(201).json(savedActivityParam);
    } catch (error) {
      console.error(error);
      return response.status(500).json("Server error");
    }
  },
};