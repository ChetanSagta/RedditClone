interface IAvatar {
  src: string;
  alt?: string;
}

export const Avatar = (props: IAvatar) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="rounded-full bg-transparent h-10 w-10"
    />
  );
};
