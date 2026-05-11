import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: process.env.NODE_ENV === 'development' || !process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG ? {
    kind: 'local',
  } : {
    kind: 'github',
    repo: 'AkivaBer/personal-website',
  },
  singletons: {
    homepage: singleton({
      label: 'Homepage Content',
      path: 'content/homepage',
      format: { data: 'json' },
      schema: {
        heroTitleLine1: fields.text({ label: 'Hero Title (Line 1)', defaultValue: 'Leadership in' }),
        heroTitleLine2: fields.text({ label: 'Hero Title (Line 2)', defaultValue: 'Clinical Excellence' }),
        heroDescription: fields.text({ 
          label: 'Hero Description', 
          multiline: true,
          defaultValue: "Associate Division Chief of Emergency Medicine at Children's National Hospital and Associate Professor at GWU. Bridging clinical mastery with medical-legal expertise and academic leadership."
        }),
      },
    }),
  },
  collections: {
    publications: collection({
      label: 'Publications',
      slugField: 'title',
      path: 'content/publications/*',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Title' }),
        year: fields.text({ label: 'Year' }),
        journal: fields.text({ label: 'Journal' }),
        tag: fields.text({ label: 'Category Tag' }),
      },
    }),
  },
});
