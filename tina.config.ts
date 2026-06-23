import { defineConfig } from 'tinacms'

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    publicFolder: 'public',
    outputFolder: 'output',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'hero',
        label: 'Hero',
        path: 'content/hero',
        format: 'json',
        fields: [
          { type: 'string', name: 'name', label: 'Name' },
          { type: 'string', name: 'statement', label: 'Statement', ui: { component: 'textarea' } },
          {
            type: 'object',
            name: 'roles',
            label: 'Roles',
            list: true,
            fields: [{ type: 'string', name: 'role', label: 'Role' }],
          },
          {
            type: 'object',
            name: 'cta',
            label: 'Call to Action',
            fields: [
              {
                type: 'object',
                name: 'primary',
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href', label: 'Link' },
                ],
              },
              {
                type: 'object',
                name: 'secondary',
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href', label: 'Link' },
                ],
              },
              {
                type: 'object',
                name: 'tertiary',
                fields: [
                  { type: 'string', name: 'label', label: 'Label' },
                  { type: 'string', name: 'href', label: 'Link' },
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'project',
        label: 'Projects',
        path: 'content/projects',
        format: 'json',
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
          { type: 'string', name: 'problem', label: 'Problem', ui: { component: 'textarea' } },
          { type: 'string', name: 'solution', label: 'Solution', ui: { component: 'textarea' } },
          { type: 'string', name: 'impact', label: 'Impact' },
          { type: 'image', name: 'image', label: 'Thumbnail' },
          { type: 'string', name: 'year', label: 'Year' },
          { type: 'string', name: 'github', label: 'GitHub URL' },
          { type: 'string', name: 'live', label: 'Live URL' },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          {
            type: 'string',
            name: 'techStack',
            label: 'Tech Stack',
            list: true,
          },
        ],
      },
      {
        name: 'about',
        label: 'About',
        path: 'content/about',
        format: 'json',
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: 'string', name: 'whoami', label: 'Who Am I Lines', list: true },
          { type: 'string', name: 'description', label: 'Description', ui: { component: 'textarea' } },
        ],
      },
      {
        name: 'social',
        label: 'Social Links',
        path: 'content/socials',
        format: 'json',
        fields: [
          { type: 'string', name: 'platform', label: 'Platform' },
          { type: 'string', name: 'url', label: 'URL' },
          { type: 'string', name: 'command', label: 'Command' },
          { type: 'string', name: 'icon', label: 'Icon Name' },
        ],
      },
    ],
  },
})
