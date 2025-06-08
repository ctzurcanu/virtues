import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'b2f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '4a1'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', 'a68'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ae6'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '586'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'b5b'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', '4a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/1concept',
                component: ComponentCreator('/docs/1concept', '227'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/3concepts',
                component: ComponentCreator('/docs/3concepts', 'f04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/abundance',
                component: ComponentCreator('/docs/abundance', '47c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/allah',
                component: ComponentCreator('/docs/allah', '866'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/arete',
                component: ComponentCreator('/docs/arete', 'a0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/beauty',
                component: ComponentCreator('/docs/beauty', '6c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/charity',
                component: ComponentCreator('/docs/charity', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/citizen',
                component: ComponentCreator('/docs/citizen', 'f34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/competition',
                component: ComponentCreator('/docs/competition', '88e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/composed',
                component: ComponentCreator('/docs/composed', 'c25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/concepts',
                component: ComponentCreator('/docs/concepts', '27f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/economy',
                component: ComponentCreator('/docs/economy', 'd2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fairness',
                component: ComponentCreator('/docs/fairness', 'a9f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/faith',
                component: ComponentCreator('/docs/faith', 'db4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/forgiveness',
                component: ComponentCreator('/docs/forgiveness', '93c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/fortitude',
                component: ComponentCreator('/docs/fortitude', '00e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/friendship',
                component: ComponentCreator('/docs/friendship', 'c86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/goodness',
                component: ComponentCreator('/docs/goodness', '4bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/governance',
                component: ComponentCreator('/docs/governance', 'ece'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/harmony',
                component: ComponentCreator('/docs/harmony', '12a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hero',
                component: ComponentCreator('/docs/hero', '34b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hierarchies',
                component: ComponentCreator('/docs/hierarchies', '808'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/hope',
                component: ComponentCreator('/docs/hope', 'be1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/industriousness',
                component: ComponentCreator('/docs/industriousness', '2a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/institution',
                component: ComponentCreator('/docs/institution', 'f29'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/justice',
                component: ComponentCreator('/docs/justice', '39f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/knowledge',
                component: ComponentCreator('/docs/knowledge', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/logos',
                component: ComponentCreator('/docs/logos', '59f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/market',
                component: ComponentCreator('/docs/market', '025'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/measurability',
                component: ComponentCreator('/docs/measurability', '4b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/miracle',
                component: ComponentCreator('/docs/miracle', '0ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/order',
                component: ComponentCreator('/docs/order', '41f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/other',
                component: ComponentCreator('/docs/other', 'b3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/principles',
                component: ComponentCreator('/docs/principles', '387'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/prudence',
                component: ComponentCreator('/docs/prudence', 'fc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/relationship',
                component: ComponentCreator('/docs/relationship', '071'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/scenarios/',
                component: ComponentCreator('/docs/scenarios/', '62a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/scenarios/miracle',
                component: ComponentCreator('/docs/scenarios/miracle', 'f7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/scenarios/narratives',
                component: ComponentCreator('/docs/scenarios/narratives', '62e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/survival',
                component: ComponentCreator('/docs/survival', 'a35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/systems/development',
                component: ComponentCreator('/docs/systems/development', '554'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/systems/maslow',
                component: ComponentCreator('/docs/systems/maslow', 'f60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/systems/resilience',
                component: ComponentCreator('/docs/systems/resilience', 'da5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/systems/via',
                component: ComponentCreator('/docs/systems/via', '65a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/temperance',
                component: ComponentCreator('/docs/temperance', 'd61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/undefined',
                component: ComponentCreator('/docs/undefined', 'bcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/virtues',
                component: ComponentCreator('/docs/virtues', '548'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/volunteer',
                component: ComponentCreator('/docs/volunteer', '6b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
