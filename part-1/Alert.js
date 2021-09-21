const Alert = ({ classes, children }) => {
  classes = `alert ${classes}`;
  return <div className={classes}>{children}</div>;
};
