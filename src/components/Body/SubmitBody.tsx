import { useRef } from "react";
import { Button } from "../ui/Button";
import { TextArea } from "../ui/TextArea";

interface Iprops {
  bodyType: string;
}

export const SubmitBody = (props: Iprops) => {
  let hiddenFileInput = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange = (event: any) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
  };

  let submitBody = null;
  if (props.bodyType.trim() === "Post") {
    submitBody = (
      <div className="m-2">
        <TextArea
          placeholder="Text"
          rows={10}
          className="w-full border-2 mt-2 rounded-md pl-2 pt-2 outline-none"
        />
      </div>
    );
  }
  if (props.bodyType.trim() === "Images & Videos") {
    submitBody = (
      <div className="flex align-center justify-center">
        <p className="mt-4">Drag and drop images or </p>
        <Button type="submit" onClick={handleClick}>
          Upload
        </Button>
        <input
          type="file"
          name="uploadFile"
          accept="image/*,video/*"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
      </div>
    );
  }
  if (props.bodyType.trim() === "Link") {
    submitBody = (
      <div className="m-2">
        <TextArea
          placeholder="Url"
          rows={1}
          className="w-full border-2 mt-2 rounded-md pl-2 pt-2 outline-none"
        />
      </div>
    );
  }
  return submitBody;
};