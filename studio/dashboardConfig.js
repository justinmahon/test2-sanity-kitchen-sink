export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '617c641997042d8d69c0b41b',
                  title: 'Sanity Studio',
                  name: 'test-2-sanity-kitchen-sink-studio',
                  apiId: 'd0581a48-f8b5-4e84-89d3-1f09eba84fbe'
                },
                {
                  buildHookId: '617c6419e0b1ae798eb2d34f',
                  title: 'Blog Website',
                  name: 'test-2-sanity-kitchen-sink',
                  apiId: '98abf200-291c-40c0-babc-85fa2281ebd9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justinmahon/test2-sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://test-2-sanity-kitchen-sink.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
