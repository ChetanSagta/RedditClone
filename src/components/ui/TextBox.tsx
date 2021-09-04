interface Props{
  type: string;
  placeholder: string;
  width?: string;
}

export const TextBox = (props: Props) => {
    return(
        <input
          className="p-1 border-black border-2 rounded m-2 flex-auto"
          width={props.width}
          type={props.type}
          placeholder={props.placeholder}
        />
    )
}