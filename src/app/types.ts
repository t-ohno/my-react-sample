export type Language = 'en' | 'ja';

export type AppState = { language: Language };

export type Action = {
  type: string;
  payload: any;
};

export interface TooltipProps {
  tooltipContent?: React.ReactChild | React.ReactChild[];
}

export enum MessageLevel {
  INFO,
  WARN,
  ERR
}

export interface BasePageProps {
  messageLevel: MessageLevel;
  messageBarValue?: string;
  visibleMessageBar: boolean;
}
