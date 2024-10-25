export interface Recording {
  id: number;
  title: string;
  date: string;
  duration: string;
  transcriptionPreview?: string;
  hasTranscription: boolean;
}