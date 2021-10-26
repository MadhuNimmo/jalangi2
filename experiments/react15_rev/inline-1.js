var EventButton = React.createClass({
        render: function() {
            return React.createElement(
                'button',
                { id: this.props.id, onClick: this.props.onclick },
                this.props.text
            );
        }
    });

    ReactDOM.render(
        React.createElement(EventButton, {
            id: 'react_handler_attribute',
            text: 'react_handler_attribute',
            onclick: event_handler
        }),
        document.getElementById('react_container')
    );