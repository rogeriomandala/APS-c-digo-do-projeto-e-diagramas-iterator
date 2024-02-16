import ActivityController from './ActivityController';
import ConfigPageController from './ConfigPageController';
import AnalyticsController from './AnalyticsController';
import ActivityParamController from './ActivityParamController';

export default {
    getWelcomeMessage: ActivityController.getWelcomeMessage,
    getConfigurationPage: ConfigPageController.getConfigurationPage,
    getActivityParams: ActivityParamController.getActivityParams,
    setActivityParams: ActivityParamController.setActivityParams,
    getAnalyticsActivity: AnalyticsController.getAnalyticsActivity,
    getAnalytics: AnalyticsController.getAnalytics,
    setAnalytics: AnalyticsController.setAnalytics,
    getActivities: ActivityController.getActivities,
    getActivityURL: ActivityController.getActivityURL,
    setActivity: ActivityController.setActivity,

};