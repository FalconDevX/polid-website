import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Reveal from '../src/components/Reveal/Reveal';

describe('Reveal', () => {
  it('applies the requested animation delay', () => {
    const { getByText } = render(<Reveal delay={180}>Content</Reveal>);
    expect(getByText('Content').style.animationDelay).toBe('180ms');
  });
});
