import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir:"./docs",
  title: "_> 云原生 & AI",
  description: "热衷于技术的运维佬",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Kubernetes', link: '/kubernetes/index' },
      { text: 'Linux', link: '/linux/index' },
      { text: 'Devops', link: '/devops/index' },
      { text: 'Monitor', link: '/monitor/index' },
      { text: 'AI', link: '/ai/index' },
      { text: '关于', link: '/about/index' }
    ],

    sidebar: [
      {
        text: 'Kubernetes',
        collapsed: false,
        items: [
          { text: 'Kubernetes 云原生', link: '/kubernetes/index' },
          
        ]
      },
           {
        text: 'Linux',
        collapsed: false,
        items: [
 
          { text: 'Linux 技术', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PungYoung' }
    ]
  }
})
