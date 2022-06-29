import React from 'react';

import WelcomeUser from '../WelcomeUser/WelcomeUser';
import SignUp from '../SignUp/SignUp';
import WarningBanner from '../WarningBanner/WarningBanner';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: true,
            user: 'Rushabh Mulraj Shah'
        }
    }

    render() {
        return (
            <div className='container'>
                {
                    this.state.isLoggedIn ?
                    <WelcomeUser user={this.state.user} /> : 
                    <SignUp />
                }
                <WarningBanner warn={true} />
            </div>
        );
    }
}

export default Home;