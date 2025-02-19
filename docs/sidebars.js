// sidebars.js
module.exports = {
  docsSidebar: [
      {
          type: 'category',
          label: 'Magic Loops Overview',
          items: [
              { type: 'link', label: 'Introduction', href: '/docs/intro' },
              { type: 'link', label: 'Dashboard', href: '/docs/dashboard' },
              { type: 'link', label: 'Manual Loop', href: '/docs/manual-loop' }
          ]
      },
      {
          type: 'category',
          label: 'Core Components',
          items: [
              { type: 'link', label: 'Blocks', href: '/docs/blocks' },
              { type: 'link', label: 'Loops', href: '/docs/loops' },
              { type: 'link', label: 'Apps', href: '/docs/apps' }
          ]
      },
      {
          type: 'category',
          label: 'Building Blocks',
          items: [
              { type: 'link', label: 'Time Trigger', href: '/docs/time-trigger' },
              { type: 'link', label: 'Runs', href: '/docs/runs' },
              { type: 'link', label: 'Output Variable', href: '/docs/output-variable' },
              { type: 'link', label: 'Templates', href: '/docs/templates' }
          ]
      },
      {
          type: 'category',
          label: 'Technical Concepts',
          items: [
              { type: 'link', label: 'Authorization Token', href: '/docs/authorization-token' },
              { type: 'link', label: 'API Endpoint', href: '/docs/api-endpoint' },
              { type: 'link', label: 'Fetch', href: '/docs/fetch' },
              { type: 'link', label: 'JSON', href: '/docs/json' },
              { type: 'link', label: 'Markdown', href: '/docs/markdown' }
          ]
      },
      {
          type: 'category',
          label: 'Data & Integration',
          items: [
              { type: 'link', label: 'Scrape', href: '/docs/scrape' }
          ]
      }
  ]
};
