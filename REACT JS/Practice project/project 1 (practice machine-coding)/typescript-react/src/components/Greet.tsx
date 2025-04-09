type GreetProps = {
  name: string;
  messagecount?: number;
  isLoggedIn: boolean;
};

function Greet({ name, messagecount, isLoggedIn }: GreetProps) {
  return (
    <>
      {isLoggedIn ? (
        <h2>
          Welcome {name} you have {messagecount} messages.
        </h2>
      ) : (
        <h4>Welcome Guest</h4>
      )}
    </>
  );
}

export default Greet;
