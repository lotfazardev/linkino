import React, { useEffect, useState } from "react";
import { useMutation } from "react-apollo";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { POST_MUTATION } from "../../graphql/mutation";
import ErrorBox from "../atoms/ErrorBox";

const PostForm = () => {
  const [Link, setLink] = useState("");
  const [Description, setDescription] = useState("");
  const [IsError, setIsError] = useState(false);

  const [postForm, { error, data }] = useMutation<{
    description: string;
    url: string;
  }>(POST_MUTATION, {
    variables: { description: Description, url: Link },
  });

  useEffect(() => {
    setDescription("");
    setLink("");
  }, [data]);

  useEffect(() => {
    if (error) {
      setIsError(true);
    }
  }, [error]);

  useEffect(() => {
    if(IsError){
      setTimeout(()=>{
        setIsError(false)
      },5000)
    }
  }, [IsError]);

  return (
    <div className="p-5">
      {data ? <p>Saved!</p> : null}
      {IsError && error ? (
        <ErrorBox errorText={error.message} />
      ) : (
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
            color="info"
            onClick={() => {
              Link && Description && postForm();
            }}
          >
            Add link
          </Button>
        </Form>
      )}
    </div>
  );
};

export default PostForm;
