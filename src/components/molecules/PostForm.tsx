import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { POST_MUTATION } from "../../graphql/mutation";

const PostForm = () => {
  const [Link, setLink] = useState("");
  const [Description, setDescription] = useState("");

  const [postForm, { error, data }] = useMutation<
    { description: string; url: string }
  >(POST_MUTATION, {
    variables: { description: Description, url: Link },
  });
  return (
    <div className="p-5">
      {error ? <p>Oh no! {error.message}</p> : null}
      {data ? <p>Saved!</p> : null}
      <Form>
        <FormGroup>
          <Label for="exampleEmail">link</Label>
          <Input
            value={Link}
            onChange={(event) => {
              setLink(event.target.value);
            }}
            type="text"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">description</Label>
          <Input
            value={Description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            type="text"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>

        <Button
          onClick={() => {
            Link && Description && postForm();
          }}
        >
          Add link
        </Button>
      </Form>
    </div>
  );
};

export default PostForm;
