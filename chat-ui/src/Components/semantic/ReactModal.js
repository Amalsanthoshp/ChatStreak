import React, { Component } from 'react'
import { Button, Modal } from 'semantic-ui-react'

class ReactModal extends Component {

  state = { open: false }
  constructor(){
    super()


  this.handleClick = this.handleClick.bind(this);  
  }


  show = (size) => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })

  handleClick(event) {
    this.close()
    this.props.clickHandler(event)
  }

  render() {
    const { open, size } = this.state

    return (
      <div style={{background:'white!important'}}>
        <Button onClick={this.show('small')}>Delete</Button>
        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>{this.props.title}</Modal.Header>
          <Modal.Content>
            <p>{this.props.details}</p>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>No</Button>
            <Button onClick={this.handleClick}
              positive
              icon='checkmark'
              labelPosition='right'
              content='Yes'
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}

export default ReactModal