import * as SentryIO from "@sentry/browser";

export type AnalyticsEventName = string;
export type AnalyticsEventProperties = object;

export interface Track {
  eventName: string;
  eventProperties?: object;
}

export const Sentry = new (class Sentry {
  private __INTERNAL__: any;

  constructor() {
    this.__INTERNAL__ = {};
    switch (process.env.NODE_ENV) {
      case "development":
        // No error reporting in dev.
        this.__INTERNAL__.key = undefined;
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
      if (!this.__INTERNAL__.key) return;
      SentryIO.init({ dsn: this.__INTERNAL__.key });
    } catch (error) {
      throw new Error(error);
    }
  };
})();
