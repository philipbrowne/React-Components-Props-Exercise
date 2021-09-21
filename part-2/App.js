const App = () => {
  return (
    <div>
      <Container>
        <Card>
          <Tweet
            username="doggyman550"
            name="John Johnerson"
            date={new Date(Date.now()).toString()}
            message="Hello World"
          />
          <Tweet
            username="coolBro1999"
            name="Randy Radderton"
            date={new Date(Date.now()).toString()}
            message="React is cool bruh"
          />
          <Tweet
            username="testUser"
            name="PLS DELETE"
            date={new Date(Date.now()).toString()}
            message="TEST MSG PLS DELETE SORRY"
          />
        </Card>
      </Container>
    </div>
  );
};
