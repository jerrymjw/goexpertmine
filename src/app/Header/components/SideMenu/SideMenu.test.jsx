import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SideMenu from './SideMenu';

describe('<SideMenu />', () => {
  it('should render "Open Menu" button', () => {
    render(<SideMenu />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTitle('Open Menu')).toBeInTheDocument();
  });

  it('should not render menu title, items and ”Close Menu" button without click "Open Menu" button ', () => {
    render(<SideMenu />);
    // get -> 只能查找已经确定会render的元素，不能用做判断
    // query -> 用来判断元素可能不出现

    expect(screen.queryByText('Menu')).not.toBeInTheDocument();
    expect(screen.queryByText('Home')).not.toBeInTheDocument();
    expect(screen.queryByText('Expert')).not.toBeInTheDocument();
    expect(screen.queryByText('About')).not.toBeInTheDocument();
    expect(screen.queryByTitle('Close Menu')).not.toBeInTheDocument();
  });

  it('should render menu title, items and close button with button click', () => {
    render(<SideMenu />);
    fireEvent.click(screen.getByTitle('Open Menu'));

    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Expert')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Close Menu')).toBeInTheDocument();
  });

  describe('When "Close Menu" button click', () => {
    it('should render "Open Menu" button ', () => {
      render(<SideMenu />);
      fireEvent.click(screen.getByTitle('Open Menu'));
      fireEvent.click(screen.getByTitle('Close Menu'));

      expect(screen.getByRole('button')).toBeInTheDocument();
      expect(screen.getByTitle('Open Menu')).toBeInTheDocument();
    });
    it('should not render menu title, items and "Close Menu" button', () => {
      render(<SideMenu />);
      fireEvent.click(screen.getByTitle('Open Menu'));
      fireEvent.click(screen.getByTitle('Close Menu'));

      expect(screen.queryByText('Menu')).not.toBeInTheDocument();
      expect(screen.queryByText('Home')).not.toBeInTheDocument();
      expect(screen.queryByText('Expert')).not.toBeInTheDocument();
      expect(screen.queryByText('About')).not.toBeInTheDocument();
      expect(screen.queryByTitle('Close Menu')).not.toBeInTheDocument();
    });
  });
});
