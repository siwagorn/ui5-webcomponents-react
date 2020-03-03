import { action } from '@storybook/addon-actions';
import { Grid } from '@ui5/webcomponents-react/lib/Grid';
import React from 'react';
<<<<<<< HEAD
import notes from './Grid.md';
import { action } from '@storybook/addon-actions';
=======
>>>>>>> 2211d4aee03ccf84da5f45fdbc5dd42073e85d0e

export const defaultStory = () => {
  return (
    <Grid onRateChanged={action('rate changed')}>
      <div style={{ backgroundColor: 'lightgreen' }}>Div 1</div>
      <div style={{ backgroundColor: 'yellow' }}>Div 2</div>
      <div style={{ backgroundColor: 'cyan' }}>Div 3</div>
      <div style={{ backgroundColor: 'orange' }}>Div 4</div>
      <div style={{ backgroundColor: '#f0ab00' }}>Div 5</div>
      <div style={{ backgroundColor: 'red' }}>Div 6</div>
    </Grid>
  );
};

export default {
  title: 'Components / Grid',
  component: Grid
};
