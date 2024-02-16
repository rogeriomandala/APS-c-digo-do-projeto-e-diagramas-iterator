import { Router } from 'express';
import ActivityProviderFacade from './controllers/ActivityProviderFacade';



const routes = Router();

// Activity Provider
routes.get(`/`, ActivityProviderFacade.getWelcomeMessage);

// Configuration Page
routes.get(`/configuracao-atividade.html`, ActivityProviderFacade.getConfigurationPage);

// Activity Configuration Parameters
routes.get(`/json-params-atividade`, ActivityProviderFacade.getActivityParams);
routes.post(`/json-params-atividade`, ActivityProviderFacade.setActivityParams);

// analytics
routes.post(`/analytics-atividade/`, ActivityProviderFacade.getAnalyticsActivity);
routes.get(`/lista-analytics-atividade`, ActivityProviderFacade.getAnalytics);
routes.post(`/lista-analytics-atividade`, ActivityProviderFacade.setAnalytics);

// activities
routes.get(`/atividades`, ActivityProviderFacade.getActivities);
routes.get(`/deploy-atividade/:activityID`, ActivityProviderFacade.getActivityURL);
routes.post(`/atividade/:activityID`, ActivityProviderFacade.setActivity);


export default routes;
