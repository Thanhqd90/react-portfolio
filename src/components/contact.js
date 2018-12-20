import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                    <h2>Thanh Dang</h2>
                    <img src="https://www.w3schools.com/w3images/avatar2.png" alt="avatar" className="avatar-img2"/>
                    <p style={{margin: "auto"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget rutrum nibh, et dapibus arcu. Fusce gravida sagittis massa ut tempus. Aenean massa arcu, scelerisque eget turpis vel, egestas pulvinar erat. Nunc vel magna commodo.</p>
                    </Cell>
                    <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />
                    <div className="contactList">
                    <List>
                        <ListItem>
                            <ListItemContent><i className="fa fa-map-marker-alt"></i> Houston, TX</ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent><i className="fa fa-phone-square"></i> (352) 484-9546</ListItemContent>
                        </ListItem>

                        <ListItem>
                        <ListItemContent><i className="fa fa-envelope"></i>thanhqd1990@gmail.com</ListItemContent>
                        </ListItem>

                    </List>
                    </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Contact;