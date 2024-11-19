const user = 'danielbucket'

export const repotList = [
  {
    owner: user,
    repo: 'BucketLab Server',
    url: '',
    description: 'A server for a home automation system that I am building. It will be a RESTful API.',
    techstack: ['Node.js', 'Express.js', 'Knex.js',],
  },
  {
    owner: user,
    repo: 'SpinConnect',
    url: 'https://github.com/danielbucket/SpinConnect',
    description: 'A full-stack application that allows users to combine multiple musical sources and dataset. It is built with React, Node.js, Express, and MongoDB.',
    techstack: ['React', 'Node.js', 'Express.js', 'Knex.js', 'PostgreSQL'],
  },
  {
    owner: user,
    repo: 'ArborCraft, LLC',
    url: 'https://github.com/danielbucket/arborcraft_site1.0',
    description: 'A single-page application for a local tree service company. It is built with React, Node.js, Express.js.',
    techstack: ['Webpack', 'React', 'Node.js', 'Express.js'],
  },
]

export const fakeLoaderData = () =>{
  return repotList
}