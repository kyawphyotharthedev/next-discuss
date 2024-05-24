"use client";
import {
  Input,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";
import { useFormState } from "react-dom";

interface PostCreateFormProps{
    slug:string
}

export default function PostCreateForm({slug}:PostCreateFormProps) {
  const [formState, action] = useFormState(actions.createPost.bind(null,slug), {
    errors: {},
  });
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h2 className="text-lg">Create a post</h2>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Enter title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Enter content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            {formState.errors._form ? (
              <div className=" bg-red-200 border border-red-400 rounded px-4 py-2">{formState.errors._form?.join(", ")}</div>
            ) : null}
            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
