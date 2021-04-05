import React, { Component } from 'react';

class About extends Component {

    state = {
        infovisible: false,
    };

    render() {
        return(
        <div className="about-page">
            <div className="jumbotron">
                <h1 className="display-4">Matt Walter</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">

                    {this.getPersonalInfo()}


                    
                    <button onClick={ this.handleButtonClick } className="btn btn-primary btn-lg" >More About Me</button>

                </p>
            </div>

        </div>
        );
    } // end of render

    getPersonalInfo = () => {
        if (this.state.infovisible) {
            return ( 
            <div>
                <label>Email:password@gmail.com</label>
                <label>Phone: 123-456-7890</label>   
            </div>
            );
        } else {
        return <label>Click the button to get more info</label>;

        }
    };

    handleButtonClick = () => {
        console.log("more info....");
        this.setState({ infovisible: true });
    }
}
//end of class
export default About;

/*
1 - catch the click event
2 - call a function
3 - console.log("more info")
*/