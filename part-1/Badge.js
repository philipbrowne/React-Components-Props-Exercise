const Badge = (props) => {
  const classes = `badge ${props.classes}`;
  return <span className={classes}>{props.children}</span>;
};
