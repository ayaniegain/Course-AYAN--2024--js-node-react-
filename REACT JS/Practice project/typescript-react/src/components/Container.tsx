type ContainerProps={
    styles: React.CSSProperties
}

function Container({styles}: ContainerProps) {
  return (
    <div style={styles}>
        text container goes here
    </div>
  )
}

export default Container