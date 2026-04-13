export interface Option {
  s: string;
  c: boolean;
}

export interface Question {
  topic: string;
  text: string;
  code: string | null;
  opts: Option[];
}

export interface Unit {
  id: number;
  tag: string;
  title: string;
  desc: string;
  icon: string;
  topics: string[];
  questions: Question[];
  unitLabel: string;
  quizTitle: string;
}
