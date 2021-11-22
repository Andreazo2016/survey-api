export interface CreateSurvey {
  name: string;
  user_creator_id: string;
  user_answered_id?: string;
}