import { InjectionToken } from '@angular/core';

export interface IAppConfig {
    apiEndpoint: string;
}

export let APP_CONFIG = new InjectionToken<IAppConfig>('app.config');

export const AppConfig: IAppConfig = {
    apiEndpoint: 'http://home.tamk.fi/~c7nle/weather_api/index.php/',
};
