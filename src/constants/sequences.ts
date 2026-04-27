
import type { SequenceConfig } from '../types';

export const SEQUENCES: Record<string, SequenceConfig> = {
  fibonacci: {
    id: 'fibonacci',
    name: 'Fibonacci numbers',
    discussion: 'A number of terms of the sequence a1, a2, ..., an are given. These are the initial values. A rule called the recursion is given, which explains how an is to be computed in terms of previous terms in the sequence.',
    formula: 'Fn = Fn-1 + Fn-2',
    initialValues: [0, 1],
    minTerms: 2
  },
  lucas: {
    id: 'lucas',
    name: 'Lucas numbers',
    discussion: 'The Lucas numbers Ln have the initial values L0 = 2, L1 = 1. The recursion is Ln = Ln-1 + Ln-2 if n >= 2.',
    formula: 'Ln = Ln-1 + Ln-2',
    initialValues: [2, 1],
    minTerms: 2
  },
  tribonacci: {
    id: 'tribonacci',
    name: 'Tribonacci numbers',
    discussion: 'The Tribonacci numbers Tn have the initial values T0 = 0, T1 = 0, T2 = 1. The recursion is Tn = Tn-1 + Tn-2 + Tn-3 if n >= 3.',
    formula: 'Tn = Tn-1 + Tn-2 + Tn-3',
    initialValues: [0, 0, 1],
    minTerms: 3
  }
};
