import React from 'react';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';
import Section from '@site/src/components/pages/home/section/section';

interface Testimonial {
  quote: string;
  attribution: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We've been using GameCI for Unity since like.. day 14 of the project and it's been almost three years now. Thank you so much for the support!",
    attribution: 'Community member',
  },
  {
    quote: "We used GameCI for our delivery pipeline, and it's been a game-changer.",
    attribution: 'Community member',
  },
  {
    quote:
      'Got ranked 108 out of 460 in a recent gamejam. The development was fast and easy thanks to GameCI!',
    attribution: 'Community member',
  },
  {
    quote: 'We used workflows from GameCI to go from GitHub directly to Google Play.',
    attribution: 'Community member',
  },
];

const TestimonialsSection = () => (
  <Section title="What developers are saying">
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0 w-full max-w-5xl">
      {testimonials.map((testimonial, index) => (
        <li key={testimonial.quote}>
          <FadeIntoView delay={50 + index * 33} className="h-full">
            <blockquote className="h-full m-0 border-l-4 border-primary-light dark:border-primary-dark bg-background-highlight-light dark:bg-background-highlight-dark rounded-lg p-6 shadow-sm">
              <p className="italic text-brand-text-light/70 dark:text-brand-text-dark/70 mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="text-sm font-semibold text-brand-text-light dark:text-brand-text-dark">
                ~ {testimonial.attribution}
              </footer>
            </blockquote>
          </FadeIntoView>
        </li>
      ))}
    </ul>
  </Section>
);

export default TestimonialsSection;
