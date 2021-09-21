const ListGroup = (props) => {
  const classes = `list-group ${props.classes}`;
  return <ul className={classes}>{props.children}</ul>;
};
