import React,{Component} from "react";
import './Form.scss'
import { Button, Input } from 'antd';
import { connect } from 'react-redux'
import {ModalBlock} from "./ModalBlock";
import {AlphabetToEng} from './alphabet'
import {ListItems,triggerChange} from './ListOfItem/List';



class FormPage extends Component {
    state = {
        isEdit: false,
        length: 0,
        item: ''
    }

    lengthValue = (event) => {
        this.setState({
            length: event.target.value.length
        })
    }


    addInput = () => {
        console.log(triggerChange())

        const letters = this.trackInput.state.value
        const translate = letters.split('').map(char => {
            return AlphabetToEng()[char] || char
        }).join('')


        if (this.state.length < 10 && this.state.length > 0) {
            this.props.addThisInput(translate)
        }

        this.setState({
            isEdit: false
        })

        this.trackInput.state.value = ''
    }


    changeValue = (id, items) => {
        console.log(id, items)
        const editItem = items.filter(val => val.id === id);
        this.setState({
            isEdit: !this.state.isEdit,
            item: editItem
        })

        this.trackInput.state.value = editItem[0].items;
        this.props.removeItem(id)
    }

    render() {
        const {isEdit, length} = this.state;

        const addModal = length > 10 ? <ModalBlock /> : null

        return (
            <div>
                <div className='form-block'>
                    <Input
                        placeholder="input search text"
                        style={{ width: 400 }}
                        type='text'
                        onChange={this.lengthValue}
                        ref={(input) => {this.trackInput = input}}
                    />
                    <div className='form-block-text-length'>
                        {length >= 10 ?  0 : length}
                    </div>
                    <Button
                        type="primary"
                        onClick={this.addInput}
                    >
                        {isEdit? 'Добавить' : 'Применить'}
                    </Button>
                </div>
                <div className='form-block-list'>
                    <ListItems trigger={this.changeValue}/>

                    {addModal}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        messages: state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addThisInput: (item) => dispatch({type: 'ADD_ITEM', payload:item}),
        removeItem: (id) => dispatch({type: 'REMOVE_ITEM', payload:id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
