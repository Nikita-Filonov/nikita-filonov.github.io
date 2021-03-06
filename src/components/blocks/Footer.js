var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: 'absolute',
  left: 0,
  bottom: 0,
  height: "60px",
  width: "100%",
}


function Footer({children}) {
  return (
    <div style={style}>
      {children}
      <p>Apache License 2 | Copyright © {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
