export type Language = 'en' | 'ja';

export type AppState = { language: Language };

export type Action = {
  type: string;
  payload: any;
};

export interface TooltipProps {
  tooltipContent?: React.ReactChild | React.ReactChild[];
}

export interface BasePageProps {
  messageBarValue?: string;
  visibleMessageBar: boolean;
}

export interface BasePageState {}
