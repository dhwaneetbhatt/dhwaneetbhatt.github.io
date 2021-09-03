import * as React from 'react';
import { Heading, Grid, Box, Input, Button, Text, Link } from 'theme-ui';

const SubscriptionComponent = () => {
  return (
    <Box
      as='form'
      action='https://tinyletter.com/dhwaneetbhatt'
      method='post'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Heading sx={{ fontSize: [1, 2, 3], color: 'text', mb: 3, fontWeight: 'normal' }}>Subscribe for updates</Heading>
      <Grid gap={2} columns={[2]}>
        <Box mb={3}>
          <Input type='email' name='email' required placeholder='Email' />
        </Box>
        <Box mb={3}>
          <Button>Subscribe</Button>
        </Box>
      </Grid>
      <Text sx={{ a: { variant: 'links.secondary', fontSize: [1, 1, 1] } }}>
        <Link href='https://tinyletter.com/dhwaneetbhatt' target='_blank' rel='noopener noreferrer'>
          Powered By TinyLetter
        </Link>
      </Text>
    </Box>
  );
};

export default SubscriptionComponent;
