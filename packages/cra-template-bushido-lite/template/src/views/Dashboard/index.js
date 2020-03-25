import React from 'react';

import { Wrapper, Button, Card } from 'bushido-strap';

export default function Dashboard() {
  return (
    <Wrapper>
      <Card>
        <h1>Hello, world!</h1>
        <Button onClick={() => alert('Thanks for clicking me!')}>
          Click me!!!
        </Button>
      </Card>
    </Wrapper>
  );
}
