import * as React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { Heading, Grid, Box, Input, Button, Text } from 'theme-ui';

class SubscriptionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', message: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ email: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    try {
      const response = await addToMailchimp(email);
      this.setState({ email: '', message: response.msg });
    } catch (e) {
      this.setState({ email: '', message: 'Oops, something is wrong. Try again later!' });
    }
  }

  render() {
    return (
      <Box as='form' onSubmit={this.handleSubmit}>
        <Heading sx={{ fontSize: [1, 2, 3], color: 'text', mb: 3, fontWeight: 'normal' }}>
          Subscribe for updates
        </Heading>
        <Grid gap={2} columns={[2]}>
          <Box mb={3}>
            <Input
              type='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              required
              placeholder='Email'
            />
          </Box>
          <Box mb={3}>
            <Button>Subscribe</Button>
          </Box>
        </Grid>
        <Box mb={3}>
          <Text>{this.state.message}</Text>
        </Box>
      </Box>
    );
  }
}

export default SubscriptionComponent;
