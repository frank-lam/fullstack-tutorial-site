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
    lastUpdated: 'Last Updated', // string | boolean
    // algolia: {
    //   apiKey: 'ffce0083d0830de5f562c045a481410b',
    //   indexName: 'vue_element_admin'
    // },
    search: true,
    searchMaxSuggestions: 10,
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
        selectText: '选择/语言',
        // editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '全栈指南',
            link: '/notes/'
          },
          {
            text: '场景实战',
            link: '/notes/archives/'
          },
          // {
          //   text: '功能',
          //   items: genNav(deepClone(ComponentNav), 'ZH')
          // },
          // {
          //   text: '生态系统',
          //   items: genNav(deepClone(EcosystemNav), 'ZH')
          // },
          {
            text: '捐赠',
            link: '/vuepress/donate/'
          },
          {
            text: '作者',
            link: '/vuepress/author/'
          }
        ],
        sidebar: {
          '/notes/': [
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
              title: 'Java 技术栈',
              collapsable: false,
              children: genJavaSidebar()
            },
            {
              title: '数据库',
              collapsable: false,
              children: genDbSidebar()
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
  // markdown: {
  //   // options for markdown-it-anchor
  //   // anchor: { permalink: false },
  //   // options for markdown-it-toc
  //   toc: { includeLevel: [1, 2] },
  // },
  locales: {
    '/': {
      lang: 'en-CN',
      description: 'from zero to hero'
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

// Java核心知识
function genJavaSidebar(type = '') {
  const mapArr = [
    '/notes/JavaArchitecture/01%20Java%20基础.md',
    '/notes/JavaArchitecture/02%20Java%20集合框架.md',
    '/notes/JavaArchitecture/03%20Java%20并发编程.md',
    '/notes/JavaArchitecture/04%20Java%20IO.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

// 数据库
function genDbSidebar(type = '') {
  const mapArr = ['/notes/MySQL.md', '/notes/SQL.md', '/notes/Redis.md']
  return mapArr.map(i => {
    return type + i
  })
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/notes/'
    // '/guide/essentials/layout.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = ['/guide/advanced/chart.md']
  return mapArr.map(i => {
    return type + i
  })
}
