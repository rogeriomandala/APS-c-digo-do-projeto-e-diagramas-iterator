import { DataSource } from 'typeorm';
import Analytics from '../entity/Analytics';
import Activity from '../entity/Activity';
import ActivityParams from '../entity/ActivityParams';

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL || "postgres://postgres:123456@localhost:5432/activity_provider",
  synchronize: true,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
  logging: false,
  entities: [
    Analytics,
    Activity,
    ActivityParams
    // Employee,
    // OrganicUnity, 
    // User,
    // Document,
    // DocumentCategory,
  ],
});

