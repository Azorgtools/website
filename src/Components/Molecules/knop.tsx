import React, { Component, ReactNode } from 'react';

interface DropdownProps {
  buttonText: string;
  children: ReactNode;
}

interface DropdownState {
  isDropdownVisible: boolean;
}

class Dropdown extends Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      isDropdownVisible: false,
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownVisible: !prevState.isDropdownVisible,
    }));
  };

  render() {
    const { isDropdownVisible } = this.state;

    return (
      <div className={`dropdown ${isDropdownVisible ? 'visible' : ''}`}>
        <button className="button-grid-item"   onClick={this.toggleDropdown}>
          {this.props.buttonText}
        </button>
        {isDropdownVisible && (
          <div className="dropdown-content">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default Dropdown;
