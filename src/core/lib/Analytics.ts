import Amplitude from "amplitude-js";

export type AnalyticsEventName = string;
export type AnalyticsEventProperties = object;

export interface Track {
  eventName: string;
  eventProperties?: object;
}

export const Analytics = new (class Analytics {
  private __INTERNAL__: any;

  constructor() {
    this.__INTERNAL__ = {};
    switch (process.env.NODE_ENV) {
      case "development":
        this.__INTERNAL__.key = "";
        break;
      case "production":
        this.__INTERNAL__.key = "";
        break;
      default:
        break;
    }
  }

  public init = async () => {
    try {
      Amplitude.getInstance().init(this.__INTERNAL__.key, undefined, {
        includeUtm: true,
        includeReferrer: true
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  public track = ({ eventName, eventProperties = {} }: Track) => {
    Amplitude.getInstance().logEvent(eventName, eventProperties);
  };
})();
