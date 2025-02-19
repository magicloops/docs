const sidebars = {
  sidebar: [
      {
          type: 'category',
          label: 'Introduction',
          items: [
              'intro',
              'dashboard',
              'manual-loop'
          ],
      },
      {
          type: 'category',
          label: 'Core Components',
          items: [
              'blocks',
              'loops',
              'apps'
          ],
      },
      {
          type: 'category',
          label: 'Building Blocks',
          items: [
              'time-trigger',
              'runs',
              'output-variable',
              'templates'
          ],
      },
      {
          type: 'category',
          label: 'Technical Concepts',
          items: [
              'authorization-token',
              'api-endpoint',
              'fetch',
              'json',
              'markdown'
          ],
      },
      {
          type: 'category',
          label: 'Data & Integration',
          items: [
              'scrape'
          ],
      }
  ],
};

export default sidebars;
