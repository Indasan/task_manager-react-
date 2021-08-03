import React, { Component } from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from 'reactstrap';

class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }

    handleChange = e => {
        let {name, value} = e.target;
        if (e.target.type === 'checkbox') {
            value = e.target.checked;
        }
        const activeItem = {...this.state.activeItem, [name]: value};
        this.setState({ activeItem })
    };

    render() {
        const {toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Задача</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="title">Название</Label>
                            <Input
                                type="text"
                                name="title"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Введите название задачи"
                            />
                        </FormGroup>

                        {/* 2 description label */}
                        <FormGroup>
                            <Label for="description">Описание</Label>
                            <Input
                                type="text"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Введите описание"
                            />
                        </FormGroup>

                        {/* 3 completed label */}
                        <FormGroup check>
                            <Label for="completed">
                                <Input
                                    type="checkbox"
                                    name="completed"
                                    checked={this.state.activeItem.completed}
                                    onChange={this.handleChange}
                                />
                                Завершена
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
                
                <ModalFooter>
                    <Button color='success' onClick={() => onSave(this.state.activeItem)}>Сохранить</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default CustomModal










