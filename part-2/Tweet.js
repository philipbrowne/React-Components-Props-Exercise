const Tweet = (props) => {
  return (
    <ListGroup>
      <ListGroupItem>
        <b>{props.username}</b>
      </ListGroupItem>
      <ListGroupItem>{props.name}</ListGroupItem>
      <ListGroupItem>{props.date}</ListGroupItem>
      <ListGroupItem>{props.message}</ListGroupItem>
    </ListGroup>
  );
};
