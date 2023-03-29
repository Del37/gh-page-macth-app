import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardTitle, CardBody } from 'reactstrap';

const CreateProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState([]);
  const [participants, setParticipants] = useState(0);
  const [skillsRequired, setSkillsRequired] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name} Description: ${description} Tags: ${tags.join(', ')} Participants: ${participants} Skills Required: ${skillsRequired} Deadline: ${deadline}`);
    // TODO: Add logic to save project to database!
  }

  const handleTagChange = (event) => {
    const selectedTags = Array.from(event.target.selectedOptions, option => option.value);
    setTags(selectedTags);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Project Name</Label>
        <Input type="text" name="name" id="name" placeholder="Enter project name" value={name} onChange={(e) => setName(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input type="textarea" name="description" id="description" placeholder="Enter project description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="tags">Tags</Label>
        <Input type="select" name="tags" id="tags" multiple onChange={handleTagChange}>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="fullstack">Full Stack</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="participants">Number of Participants</Label>
        <Input type="number" name="participants" id="participants" placeholder="Enter the number of participants" value={participants} onChange={(e) => setParticipants(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="skillsRequired">Skills Required</Label>
        <Input type="textarea" name="skillsRequired" id="skillsRequired" placeholder="Enter the skills required" value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="deadline">Deadline</Label>
        <Input type="date" name="deadline" id="deadline" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      </FormGroup>
      {tags.length > 0 &&
        <FormGroup>
          <Label>Selected tags:</Label>
          {tags.map(tag => (
            <Card key={tag} className="mb-2">
              <CardBody>
                <CardTitle>{tag}</CardTitle>
              </CardBody>
            </Card>
          ))}
        </FormGroup>
      }
      <Button type="submit">Create Project</Button>
    </Form>
  );
};

export default CreateProject;
