import React from 'react';
import { BasePageProps } from 'app/types';

export default abstract class BasePage<P extends BasePageProps, S extends {}> extends React.Component<P, S> {
  testMethod = () => {
    console.log('test');
  };
}
