import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
}
toggleCategories() {
    if(this.state.activeTab === 0) {
        return(
        <div className="projects-grid">
       
        <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
        <CardTitle style={{color: "#fff", height: "176px", background: "url(https://cdn.acodez.in/wp-content/uploads/2018/05/Banner-image-4.png) center / cover"}}>Frontend Project #1</CardTitle>
        <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget rutrum nibh, et dapibus arcu. Fusce gravida sagittis massa ut tempus.
        </CardText>
        <CardActions border>
        <Button>Github</Button>
        <Button>Delpoyed</Button>
        <Button>Demo</Button>
        </CardActions>
        <CardMenu style={{color: "fff"}}>
        <IconButton name="share" />
        </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
        <CardTitle style={{color: "#fff", height: "176px", background: "url(https://cdn.acodez.in/wp-content/uploads/2018/05/Banner-image-4.png) center / cover"}}>Frontend Project #2</CardTitle>
        <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget rutrum nibh, et dapibus arcu. Fusce gravida sagittis massa ut tempus.
        </CardText>
        <CardActions border>
        <Button>Github</Button>
        <Button>Delpoyed</Button>
        <Button>Demo</Button>
        </CardActions>
        <CardMenu style={{color: "fff"}}>
        <IconButton name="share" />
        </CardMenu>
        </Card>

        <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
        <CardTitle style={{color: "#fff", height: "176px", background: "url(https://cdn.acodez.in/wp-content/uploads/2018/05/Banner-image-4.png) center / cover"}}>Frontend Project #3</CardTitle>
        <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget rutrum nibh, et dapibus arcu. Fusce gravida sagittis massa ut tempus.
        </CardText>
        <CardActions border>
        <Button>Github</Button>
        <Button>Delpoyed</Button>
        <Button>Demo</Button>
        </CardActions>
        <CardMenu style={{color: "fff"}}>
        <IconButton name="share" />
        </CardMenu>
        </Card>
        </div>
        )
    } else if(this.state.activeTab === 1) {
    return(<div><h1>This is Backend</h1></div>)
    } else if(this.state.activeTab === 2) {
        return(<div><h1>This is Fullstack</h1></div>)
    } else if(this.state.activeTab === 3) {
            return(
            <div className="projects-grid">
       
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(https://codelab7.com/wp-content/uploads/2018/09/react.png) center / cover"}}>React Project #1</CardTitle>
            <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget rutrum nibh, et dapibus arcu. Fusce gravida sagittis massa ut tempus.
            </CardText>
            <CardActions border>
            <Button>Github</Button>
            <Button>Delpoyed</Button>
            <Button>Demo</Button>
            </CardActions>
            <CardMenu style={{color: "fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
    
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(https://codelab7.com/wp-content/uploads/2018/09/react.png) center / cover"}}>React Project #2</CardTitle>
            <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget rutrum nibh, et dapibus arcu. Fusce gravida sagittis massa ut tempus.
            </CardText>
            <CardActions border>
            <Button>Github</Button>
            <Button>Delpoyed</Button>
            <Button>Demo</Button>
            </CardActions>
            <CardMenu style={{color: "fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
    
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(https://codelab7.com/wp-content/uploads/2018/09/react.png) center / cover"}}>React Project #3</CardTitle>
            <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget rutrum nibh, et dapibus arcu. Fusce gravida sagittis massa ut tempus.
            </CardText>
            <CardActions border>
            <Button>Github</Button>
            <Button>Delpoyed</Button>
            <Button>Demo</Button>
            </CardActions>
            <CardMenu style={{color: "fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>)
    }else if(this.state.activeTab === 4) {
            return(<div className="projects-grid">
       
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(http://www.webliquidinfotech.com/wp-content/uploads/2018/06/angularjs-training-course-in-chandigarh.jpg) center / cover"}}>Angular Project #1</CardTitle>
            <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget rutrum nibh, et dapibus arcu. Fusce gravida sagittis massa ut tempus.
            </CardText>
            <CardActions border>
            <Button>Github</Button>
            <Button>Delpoyed</Button>
            <Button>Demo</Button>
            </CardActions>
            <CardMenu style={{color: "fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
    
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(http://www.webliquidinfotech.com/wp-content/uploads/2018/06/angularjs-training-course-in-chandigarh.jpg) center / cover"}}>Angular Project #2</CardTitle>
            <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget rutrum nibh, et dapibus arcu. Fusce gravida sagittis massa ut tempus.
            </CardText>
            <CardActions border>
            <Button>Github</Button>
            <Button>Delpoyed</Button>
            <Button>Demo</Button>
            </CardActions>
            <CardMenu style={{color: "fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
    
            <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
            <CardTitle style={{color: "#fff", height: "176px", background: "url(http://www.webliquidinfotech.com/wp-content/uploads/2018/06/angularjs-training-course-in-chandigarh.jpg) center / cover"}}>Angular Project #3</CardTitle>
            <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget rutrum nibh, et dapibus arcu. Fusce gravida sagittis massa ut tempus.
            </CardText>
            <CardActions border>
            <Button>Github</Button>
            <Button>Delpoyed</Button>
            <Button>Demo</Button>
            </CardActions>
            <CardMenu style={{color: "fff"}}>
            <IconButton name="share" />
            </CardMenu>
            </Card>
            </div>)
    }else if(this.state.activeTab === 5) {
            return(<div><h1>This is VueJS</h1></div>)
    }
}

    render() {
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                <Tab>Frontend</Tab>
                <Tab>Backend</Tab>
                <Tab>Fullstack</Tab>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>VueJS</Tab>
            </Tabs>


            <Grid>
            <Cell col={12}>
                <div className="content">{this.toggleCategories()}</div>
            </Cell>
            </Grid>
            
            </div>
        )
    }
}

export default Projects;