import React from 'react';

class UserProfile extends React.Component {
    render() {
        const { firstname, lastname } = this.props.user;
        return (
            <div>
                Bonjour, {firstname} {lastname}
            </div>
        );
    }
}

export default UserProfile;
