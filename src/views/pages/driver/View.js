import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, DeleteButton, SizePerPageDropDown } from 'react-bootstrap-table';

const products = [];

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
};

function jobNameValidator(value, row) {
  const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
  if (!value) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must be inserted';
    response.notification.title = 'Requested Value';
  } else if (value.length < 10) {
    response.isValid = false;
    response.notification.type = 'error';
    response.notification.msg = 'Value must have 10+ characters';
    response.notification.title = 'Invalid Value';
  }
  return response;
}

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    products.push({
      id: id,
      name: 'Item name ' + id,
      price: 2100 + i,
    });
  }
}

addProducts(5);

class ViewPage extends Component {
  onToggleDropDown = toggleDropDown => {
    // do your stuff here
    console.log('toggle dropdown');
    toggleDropDown();
  };

  renderSizePerPageDropDown = props => {
    return (
      <SizePerPageDropDown
        className="my-size-per-page"
        btnContextual="btn-warning"
        variation="dropup"
        onClick={() => this.onToggleDropDown(props.toggleDropDown)}
      />
    );
  };

  handleDeleteButtonClick = onClick => {
    // Custom your onClick event here,
    // it's not necessary to implement this function if you have no any process before onClick
    console.log('This is my custom function for DeleteButton click event');
    onClick();
  };

  createCustomDeleteButton = onClick => {
    return (
      <DeleteButton
        btnText="Delete"
        btnContextual="btn-danger"
        className="my-custom-class"
        btnGlyphicon="glyphicon-edit"
        onClick={e => this.handleDeleteButtonClick(onClick)}
      />
    );
  };
  beforeClose(e) {
    alert(`[Custom Event]: Before modal close event triggered!`);
  }

  handleModalClose(closeModal) {
    // Custom your onCloseModal event here,
    // it's not necessary to implement this function if you have no any process before modal close
    console.log('This is my custom function for modal close event');
    closeModal();
  }

  createCustomClearButton = onClick => {
    return (
      <button className="btn btn-warning" onClick={onClick}>
        Clean
      </button>
    );
  };

  onAddRow = row => {
    // Save to server and on success:
    console.log(row);
  };

  createCustomModalHeader = (closeModal, save) => {
    const headerStyle = {
      fontWeight: 'bold',
      fontSize: 'large',
      textAlign: 'center',
      backgroundColor: '#eeeeee',
    };
    return (
      <div className="modal-header" style={headerStyle}>
        <h3>Insert Driver</h3>
        <button className="btn btn-info" onClick={() => this.handleModalClose(closeModal)}>
          Close it!
        </button>
      </div>
    );
  };

  render() {
    const options = {
      clearSearch: false,
      clearSearchBtn: this.createCustomClearButton,
      insertModalHeader: this.createCustomModalHeader,
      deleteBtn: this.createCustomDeleteButton,
      sizePerPageDropDown: this.renderSizePerPageDropDown,
      onAddRow: this.onAddRow,
    };

    const selectRow = {
      mode: 'checkbox',
    };

    return (
      <BootstrapTable
        data={products}
        options={options}
        pagination
        search={true}
        insertRow
        selectRow={selectRow}
        deleteRow={true}
        cellEdit={cellEditProp}
        striped
        hover
        rowKey="id"
      >
        <TableHeaderColumn dataField="id" isKey={true} hidden hiddenOnInsert>
          Product ID
        </TableHeaderColumn>
        <TableHeaderColumn dataField="name" editable={{ type: 'text', validator: jobNameValidator }}>
          Product Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default ViewPage;
