
type propChildren={
    children:string;
}


function Heading({children}:propChildren) {
  return (
    <div>Heading {children}</div>
  )
}

export default Heading