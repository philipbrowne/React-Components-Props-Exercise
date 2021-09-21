const App = () => {
  return (
    <div>
      <Container>
        <Card>
          <Alert classes="alert-success">
            <FirstComponent />
          </Alert>
          <NamedComponent name="Phil" />
        </Card>
      </Container>
    </div>
  );
};
