import { statusProps } from "./CustomStatus";

function Status({ status }: statusProps) {
  let message;

  if (status == "loading") {
    message = "Loading";
  } else if (status == "pending") {
    message = "Pending";
  } else if (status == "error") {
    message = "Error";
  }

  return <div>Current Status is {message}</div>;
}

export default Status;
