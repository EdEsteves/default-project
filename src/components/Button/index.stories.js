import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './index'

const data = {};

storiesOf('Button', module)
  .add('Default', ()=>(
    <Button btnInfo={data}></Button>
  ));