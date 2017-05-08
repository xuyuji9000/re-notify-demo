import React from 'react'
import createReactClass from 'create-react-class'
import { connect } from 'react-redux'
import { actions as notifActions } from 'redux-notifications'
const { notifSend } = notifActions

let NotifDemo = createReactClass({
    send: function() {
        this.props.notifSend({
             message: 'hello world',
             kind: 'info',
             dismissAfter: 2000
        })
    },

    render: function() {
        return (
            <button onClick={this.send}>Send Notification</button>
        )
    }
})


const mapStateToProps = state => {
    return {}
}

NotifDemo = connect(mapStateToProps, {notifSend})(NotifDemo)
export default NotifDemo
