import React from 'react';
import { Button, Modal } from 'blueprints-ui'


export class MarkdownModal extends React.Component {
    constructor() {
        super();
        this.state = { isModalOpen: false };
    }

    render() {
        return (
            <span>
                <Button text={this.props.buttonText} 
                        backgroundColor={this.props.buttonColor}
                        onClick={() => this.setState({ isModalOpen: true })} />

                <Modal  open={this.state.isModalOpen}
                        closeMethod={() => this.setState({ isModalOpen: false })}>
                    {this.props.children}
                </Modal>
            </span>
        )
    }
}
