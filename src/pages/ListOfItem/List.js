import React from "react";
import {Button, List} from 'antd';
import { connect } from "react-redux";

export const triggerChange =  (id) => id

const ListOfItems = (props) => {
    const deleteItem = (id) => props.removeItem(id);
    const triggerChange = (id, list) => props.trigger(id, list)
    const list = props.messages

    return (
        <List
            dataSource={list}
            renderItem={item => (
                <List.Item key={Object.values(item)[0]} >
                    <List.Item.Meta
                        description={Object.values(item)[1]}
                    />
                    <div>
                        <Button
                            type="link"
                            onClick={() => triggerChange(Object.values(item)[0], list)}
                        >Добавить
                        </Button>
                        <Button
                            type="danger"
                            onClick={() => deleteItem(Object.values(item)[0])}
                        >Удалить
                        </Button>
                    </div>
                </List.Item>
            )}
        />
    )
}

const mapStateToProps = state => {
    return {
        messages: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => dispatch({type: 'REMOVE_ITEM', payload:id})
    }
}

export const ListItems = connect(mapStateToProps, mapDispatchToProps)(ListOfItems)
