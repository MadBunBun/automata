
export type SequenceType = 'fibonacci' | 'lucas' | 'tribonacci';

export interface SequenceConfig {
  id: SequenceType;
  name: string;
  discussion: string;
  formula: string;
  initialValues: number[];
  minTerms: number;
}
