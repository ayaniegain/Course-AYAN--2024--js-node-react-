type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function ButtonEvent({ handleClick }: ButtonProps) {
  return (
    <>
      <button onClick={(event) => handleClick(event, 1)}>click</button>
    </>
  );
}

export default ButtonEvent;
