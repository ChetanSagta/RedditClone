import './Avatar.css';

interface IAvatar {
  src: string;
}

export const Avatar = (props: IAvatar) => {
  return (
    <img
      src={props.src}
      className="avatar"
      alt=""
    />
  );
};
