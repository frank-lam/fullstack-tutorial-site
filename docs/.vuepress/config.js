var nav = require('./nav.js')
var { EcosystemNav, ComponentNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'Full Stack Developer Tutorial',
  description: 'A magical vue admin',
  base: '/fullstack-tutorial-site/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    repo: 'frank-lam/fullstack-tutorial',
    docsRepo: 'frank-lam/fullstack-tutorial',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      apiKey: 'ffce0083d0830de5f562c045a481410b',
      indexName: 'vue_element_admin'
    },
    locales: {
      '/en': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'Features',
            items: genNav(deepClone(ComponentNav), 'EN')
          },
          {
            text: 'Ecosystem',
            items: genNav(deepClone(EcosystemNav), 'EN')
          },
          {
            text: 'Donate',
            link: '/donate/'
          }
        ],
        sidebar: {
          '/en/guide/': [
            {
              title: 'Essentials',
              collapsable: false,
              children: genEssentialsSidebar()
            },
            {
              title: 'Advanced',
              collapsable: false,
              children: genAdvancedSidebar()
            },
            {
              title: 'Other',
              collapsable: false,
              children: [
                '/guide/other/gitter.md',
                '/guide/other/release-notes.md'
              ]
            }
          ],
          '/feature/component/': getComponentSidebar(
            deepClone(ComponentNav),
            'EN'
          ),
          '/feature/script/': ['/feature/script/svgo.md']
        }
      },
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: '功能',
            items: genNav(deepClone(ComponentNav), 'ZH')
          },
          {
            text: '生态系统',
            items: genNav(deepClone(EcosystemNav), 'ZH')
          },
          {
            text: '捐赠',
            link: '/donate/'
          },
          {
            text: '作者',
            link: '/author/'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Get Start',
              collapsable: false,
              children: genEssentialsSidebar()
            },
            // {
            //   title: '进阶',
            //   collapsable: false,
            //   children: genAdvancedSidebar()
            // },
            {
              title: 'Java 核心概念',
              collapsable: false,
              children: genJavaSidebar()
            }
          ],
          '/zh/feature/component/': getComponentSidebar(
            deepClone(ComponentNav),
            'ZH'
          ),
          '/zh/feature/script/': ['/zh/feature/script/svgo.md']
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'en-CN',
      description: '架构师成长之路'
    },
    '/zh/': {
      lang: 'zh-US',
      description: 'A magical vue admin3'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1'
}


function genJavaSidebar(type = '') {
  const mapArr = [
    '/guide/java/01.md',
  ]
  return mapArr.map(i => {
    return type + i
  })
}


function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    // '/guide/essentials/layout.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = [
    '/guide/advanced/chart.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
