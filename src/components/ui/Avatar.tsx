interface IAvatar {
  src: string;
}

export const Avatar = (props: IAvatar) => {
  return (
    <img
      src={props.src}
      className="rounded-full bg-transparent h-10 w-10"
      alt=""
    />
  );
};
