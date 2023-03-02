import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';

const renderWithNavigation = (renderComponent: any) => {
  return render(<NavigationContainer>{renderComponent}</NavigationContainer>);
}

export default renderWithNavigation;
