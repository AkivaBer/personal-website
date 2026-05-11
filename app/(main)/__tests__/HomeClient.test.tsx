import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeClient from '../HomeClient';

// Mock matchMedia for Framer Motion or other libraries that might need it in JSDOM
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, priority, ...props }: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img data-fill={fill ? "true" : undefined} data-priority={priority ? "true" : undefined} {...props} />;
  },
}));

describe('HomeClient', () => {
  const mockHomepageData = {
    heroTitleLine1: 'Test Leadership in <br />',
    heroTitleLine2: 'Test Clinical Excellence',
    heroDescription: 'Test Description bridging clinical mastery.'
  };

  const mockPublicationsData = [
    {
      title: 'Test Publication 1',
      year: '2024',
      journal: 'Test Journal of Medicine',
      tag: 'Test Research'
    },
    {
      title: 'Test Publication 2',
      year: '2023',
      journal: 'Test Journal of Science',
      tag: 'Test Education'
    }
  ];

  it('renders the hero section with dynamic homepage data', () => {
    render(
      <HomeClient 
        homepageData={mockHomepageData} 
        publicationsData={mockPublicationsData} 
      />
    );

    // Assert hero text
    expect(screen.getByText(/Test Clinical Excellence/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Description bridging clinical mastery\./i)).toBeInTheDocument();
  });

  it('renders the dynamic publications', () => {
    render(
      <HomeClient 
        homepageData={mockHomepageData} 
        publicationsData={mockPublicationsData} 
      />
    );

    // Assert publications
    expect(screen.getByText('Test Publication 1')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('Test Journal of Medicine')).toBeInTheDocument();
    
    expect(screen.getByText('Test Publication 2')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('Test Journal of Science')).toBeInTheDocument();
  });

  it('renders expertise sections', () => {
    render(
      <HomeClient 
        homepageData={mockHomepageData} 
        publicationsData={mockPublicationsData} 
      />
    );

    expect(screen.getByText('Medical-Legal Consultation')).toBeInTheDocument();
    expect(screen.getByText('Fellowship Leadership')).toBeInTheDocument();
  });
});
