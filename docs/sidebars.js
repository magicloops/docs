// sidebars.js
module.exports = {
  docsSidebar: [
      {
          type: 'category',
          label: 'Magic Loops Overview',
          items: [
              { type: 'link', label: 'Dashboard', href: '/docs/intro#dashboard' },
              { type: 'link', label: 'Manual Loop', href: '/docs/intro#manualLoop' }
          ]
      },
      {
          type: 'category',
          label: 'Automation Concepts',
          items: [
              { type: 'link', label: 'Loops', href: '/docs/glossary#loops' },
              { type: 'link', label: 'Blocks', href: '/docs/glossary#blocks' },
              { type: 'link', label: 'Time Trigger', href: '/docs/glossary#timeTrigger' },
              { type: 'link', label: 'Runs', href: '/docs/glossary#runs' },
              { type: 'link', label: 'Output Variable', href: '/docs/glossary#outputVariable' }
          ]
      },
      {
          type: 'category',
          label: 'Technical Glossary',
          items: [
              { type: 'link', label: 'Authorization Token', href: '/docs/glossary#authorizationToken' },
              { type: 'link', label: 'API Endpoint', href: '/docs/glossary#apiEndpoint' },
              { type: 'link', label: 'Fetch', href: '/docs/glossary#fetch' },
              { type: 'link', label: 'JSON', href: '/docs/glossary#json' },
              { type: 'link', label: 'Markdown', href: '/docs/glossary#markdown' }
          ]
      },
      {
          type: 'category',
          label: 'Data & Scraping',
          items: [
              { type: 'link', label: 'Scrape', href: '/docs/glossary#scrape' },
              { type: 'link', label: 'Templates', href: '/docs/glossary#templates' }
          ]
      }
  ]
};
