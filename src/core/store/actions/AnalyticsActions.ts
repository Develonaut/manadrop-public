import { Track } from "core/lib/Analytics";

export const ANALYTICS_INIT: string = "ANALYTICS_INIT";
export const ANALYTICS_TRACK: string = "ANALYTICS_TRACK";

export interface InitAction {
  type: typeof ANALYTICS_INIT;
}

export interface TrackAction {
  type: typeof ANALYTICS_TRACK;
}

export type AnalyticsActions = InitAction | TrackAction | any;

export function init(): InitAction {
  return {
    type: ANALYTICS_INIT
  };
}

export function track(event: Track): TrackAction {
  return {
    type: ANALYTICS_TRACK,
    ...event
  };
}
