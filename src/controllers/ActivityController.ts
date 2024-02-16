import { Request, Response } from 'express';
import { format } from "date-fns";
import { AppDataSource } from '../database/connection';
import Activity from '../entity/Activity';

export default {
  getWelcomeMessage(request: Request, response: Response) {
    return response.json({ message: 'Activity is working!', currentTime: format(new Date(), "dd/MM/yyyy HH:mm:SS") });
  },

  getActivityURL(request: Request, response: Response) {
    console.log(request.query);
    return response.status(201).send(`${process.env.HOST}/atividade/${request.params.activityID}`);
  },

  async setActivity(request: Request, response: Response) {
    const {
      activityID,
      InvenIRAstdID,
      json_params,
    } = request.body;

    const { s1, s2, s3 } = json_params;
    const redirectURL = `${process.env.HOST}/redirect?activityID=${activityID}&InvenIRAstdID=${InvenIRAstdID}&s1=${encodeURIComponent(s1)}&s2=${encodeURIComponent(s2)}&s3=${encodeURIComponent(s3)}`;

    try {
      const activityRepository = AppDataSource.getRepository(Activity);
      const activity = activityRepository.create({
        activityID,
        InvenIRAstdID,
        s1,
        s2,
        s3,
        redirectURL,
      });

      await activityRepository.save(activity);

      return response.status(201).send(redirectURL);
    } catch (error) {
      console.error(error);
      return response.status(500).json("Server error");
    }
  },

  async getActivities(request: Request, response: Response) {
    try {
      const activityRepository = AppDataSource.getRepository(Activity);

      const activities = await activityRepository.find();

      return response.status(200).json(activities);
    } catch (error) {
      console.error(error);
      return response.status(500).json("Server error");
    }
  },
};
