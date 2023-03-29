import { useState } from 'react';
import { Card, CardTitle, CardText, CardBody, Button } from 'reactstrap';

const ProjectList = () => {
  const [projects, setProjects] = useState([
    // TODO: Add database logic!
    {
      id: 1,
      name: 'My First Project',
      description: 'This is my first project. It is a simple todo list app.',
      created_at: '2022-03-25T10:30:00Z',
      updated_at: '2022-03-27T14:20:00Z',
      tags: ['frontend']
    },
    {
      id: 2,
      name: 'My Second Project',
      description: 'This is my second project. It is a weather app.',
      created_at: '2022-03-26T12:45:00Z',
      updated_at: '2022-03-27T14:22:00Z',
      tags: ['backend']
    },
    {
      id: 3,
      name: 'My Third Project',
      description: 'This is my third project. It is an e-commerce website.',
      created_at: '2022-03-27T09:15:00Z',
      updated_at: '2022-03-27T14:25:00Z',
      tags: ['fullstack']
    }
  ]);

  const [activeTags, setActiveTags] = useState([]);

  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  const filteredProjects = activeTags.length
    ? projects.filter((project) => activeTags.every((tag) => project.tags.includes(tag)))
    : projects;

  return (
    <div>
      <div className="mb-3">
        <Button
          color={activeTags.includes('frontend') ? 'primary' : 'secondary'}
          onClick={() => toggleTag('frontend')}
          className="mr-3"
        >
          Frontend
        </Button>
        <Button
          color={activeTags.includes('backend') ? 'primary' : 'secondary'}
          onClick={() => toggleTag('backend')}
          className="mr-3"
        >
          Backend
        </Button>
        <Button
          color={activeTags.includes('fullstack') ? 'primary' : 'secondary'}
          onClick={() => toggleTag('fullstack')}
        >
          Fullstack
        </Button>
      </div>
      {filteredProjects.map((project) => (
        <Card key={project.id} className="mb-3">
<CardBody>
  <CardTitle>{project.name}</CardTitle>
  <CardText>{project.description}</CardText>
  <p>Created at: {project.created_at}</p>
  <p>Updated at: {project.updated_at}</p>
  <div>
    {project.tags.map((tag) => (
      <Button key={tag} color="info" className="mr-2">
        {tag}
      </Button>
    ))}
  </div>
  <Button color="primary" className="mr-2 mt-2">Join</Button>
  <Button color="secondary" className="ml-2 mt-2">More Info</Button>
</CardBody>
        </Card>
      ))}
    </div>
  );
};

export default ProjectList;
