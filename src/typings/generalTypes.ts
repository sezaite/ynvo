export type Statuses = 'idle' | 'loading' | 'success';

export type QuestionTypes = 'radio' | 'checkbox' | 'picture-radio' | 'picture-checkbox';

export interface QuizQuestionType {
    id: number, 
    type: string,
    question: string,
    caption?: string,
    answers: Array<string | number>,
    pictures?: Array<string>,

}

