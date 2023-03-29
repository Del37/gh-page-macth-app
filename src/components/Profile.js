import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Profile = () => {
  const [tags, setTags] = useState(['React', 'JavaScript', 'HTML', 'CSS']);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleTagSelect = (tag) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleTagRemove = (tag) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

 // TODO: Add logic to save project to database!

  return (
    <Container>
      <Row>
        <Col>
          <h2>Profile</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Label for="profilePicture">Profile Picture</Label>
              <Input type="file" name="profilePicture" id="profilePicture" />
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" />
            </FormGroup>
            <FormGroup>
              <Label for="bio">Bio</Label>
              <Input type="textarea" name="bio" id="bio" />
            </FormGroup>
            <FormGroup>
              <Label for="skills">Skills</Label>
              <Input type="text" name="skills" id="skills" />
            </FormGroup>
            <FormGroup>
              <Label for="interestingTags">Interesting Tags</Label>
              <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                <DropdownToggle caret>
                  Select Tags
                </DropdownToggle>
                <DropdownMenu>
                  {tags.map((tag, index) => (
                    <DropdownItem
                      key={index}
                      onClick={() => handleTagSelect(tag)}
                    >
                      {tag}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <div>
                {selectedTags.map((tag, index) => (
                  <span key={index} className="badge badge-primary mr-1">
                    {tag}{' '}
                    <button
                      type="button"
                      className="btn btn-sm btn-light"
                      onClick={() => handleTagRemove(tag)}
                    >
                      x
                    </button>
                  </span>
                ))}
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="currentProjects">Current Projects</Label>
              <Input type="text" name="currentProjects" id="currentProjects" />
            </FormGroup>
            <Button color="primary">Save</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
