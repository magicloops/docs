// src/types/global.d.ts

declare module '@theme/DocSidebar' {
    const DocSidebar: React.FC<{ sidebar: any, path: string, title?: string }>;
    export default DocSidebar;
  }
  
  declare module '@docusaurus/core' {
    export function useDocusaurusContext(): any;
  }
  