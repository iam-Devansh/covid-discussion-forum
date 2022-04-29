import React from 'react';
import { Form, Grid, GridColumn, Header, Icon, Segment } from 'semantic-ui-react';

const Register = () => {

    const handleInput = (event) =>{

    }

    return (<Grid verticalAlign='middle' textAlign='center'>
    <Grid.Column style={{maxWidth : '500px'}}>
        <Header>
        <Icon name="slack" />
        Register
        </Header>

        <form>
            <Segment stacked>
                <Form.Input
                    name="userName"
                    value = ""
                    icon ="user"
                    iconPosition='left'
                    onChange={handleInput}
                    type="text"
                    placeholder = "User Name"
                />
                <Form.Input
                    name="email"
                    value = ""
                    icon ="mail"
                    iconPosition='left'
                    onChange={handleInput}
                    type="email"
                    placeholder = "User Email"
                />
                <Form.Input
                    name="password"
                    value = ""
                    icon ="lock"
                    iconPosition='left'
                    onChange={handleInput}
                    type="password"
                    placeholder = "User Password"
                />
                <Form.Input
                    name="confirmpassword"
                    value = ""
                    icon ="lock"
                    iconPosition='left'
                    onChange={handleInput}
                    type="password"
                    placeholder = "Re-enter Password"
                />

            </Segment>
        </form>
    </Grid.Column>

    </Grid>)
}

export default Register;