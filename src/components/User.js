import React, {PropTypes, Component} from 'react';

export default class User extends Component {
    render() {
        const {name} = this.props;
        return <div>
            <p>Привет, {name}!</p>
        </div>
    }
}

// Какие свойства должны быть указаны
User.propTypes = {
    name: PropTypes.string.isRequired
};