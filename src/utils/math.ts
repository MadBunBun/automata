
import type { SequenceConfig } from '../types';

export interface SequenceResult {
  terms: number[];
  status: 'Valid' | 'Invalid: Too Few' | 'Invalid: Negative' | 'Invalid: Fractional';
  message: string;
}

export const generateSequence = (config: SequenceConfig, input: string): SequenceResult => {
  const termsCount = parseFloat(input);
  
  if (isNaN(termsCount)) {
    return { terms: [], status: 'Invalid: Too Few', message: 'Input is not a number.' };
  }

  if (termsCount < 0) {
    return { terms: [], status: 'Invalid: Negative', message: 'Negative terms are not allowed.' };
  }

  if (!Number.isInteger(termsCount)) {
    return { terms: [], status: 'Invalid: Fractional', message: 'Please enter a whole number.' };
  }

  if (termsCount <= config.minTerms) {
    return { 
      terms: [], 
      status: 'Invalid: Too Few', 
      message: `Input ${termsCount} is too low. ${config.name} require more than ${config.minTerms} terms.` 
    };
  }
  
  const result: number[] = [...config.initialValues];
  
  for (let i = result.length; i < termsCount; i++) {
    if (config.id === 'tribonacci') {
      result.push(result[i - 1] + result[i - 2] + result[i - 3]);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  
  return { terms: result, status: 'Valid', message: 'Sequence generated successfully.' };
};
