const App = () => {
  return (
    <div>
      <Container>
        <Card>
          <Person
            name="Chadderton"
            age={19}
            hobbies={[
              {
                key: 1,
                text: 'Partying',
              },
              {
                key: 2,
                text: 'Frats',
              },
              {
                key: 3,
                text: 'Booze',
              },
              {
                key: 4,
                text: 'Troublesome shenanigans',
              },
            ]}
          />
        </Card>
        <Card>
          <Person
            name="Nerdman"
            age={17}
            hobbies={[
              {
                key: 1,
                text: 'Studying',
              },
              {
                key: 2,
                text: 'Schoolwork',
              },
              {
                key: 3,
                text: 'Wholesomeness',
              },
              {
                key: 4,
                text: 'Being a nice boy',
              },
            ]}
          />
        </Card>
        <Card>
          <Person
            name="McStonerson"
            age={17}
            hobbies={[
              {
                key: 1,
                text: 'Smoking',
              },
              {
                key: 2,
                text: 'Sleeping',
              },
              {
                key: 3,
                text: 'Vaping',
              },
              {
                key: 4,
                text: 'Having munchies',
              },
            ]}
          />
        </Card>
      </Container>
    </div>
  );
};
