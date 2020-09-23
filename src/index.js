import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/app/';

class WhoAmI extends Component {
    constructor (props) {
        super(props);
        this.state = {
            years:26     // can not handle props, props--read only; so add years for dinamics
            // years -- то что меняется
        }

        // this.nextYear = () => {         // 2 option,setState, для event handling
        //     this.setState(state => ({   // 2 option,setState, для event handling
        //         years: ++state.years    // 2 option,setState, для event handling
        //     }))
        // }                       // 2 option,setState, для event handling

        // this.nextYear = this.nextYear.bind(this); // 1 option,исп-ть bind, для event handling

    }
    // nextYear() {            // 1 option,исп-ть bind, для event handling
    //     this.setState(state => ({   // 1 option,исп-ть bind, для event handling
    //         years: ++state.years    // 1 option,исп-ть bind, для event handling
    //     }))         // 1 option,исп-ть bind, для event handling
    // }               // 1 option,исп-ть bind, для event handling


    nextYear = () => {         // 3 option,способ class Field, для event handling
        this.setState(state => ({   // 3 option,способ class Field, для event handling
        years: ++state.years    // 3 option,способ class Field, для event handling
        }))
    }



    render() {
        const { name, lname, personLink } = this.props;
        const {years} = this.state;
        return (
            // <>  // <> </> -- another way to do <React.Fragment></React.Fragment>React.Fragment> or <div />
            //     <button onClick={this.nextYear}>++++</button>
            //     <h1>My name is {name}, last name - {lname}, years --{years}.</h1>
            //     <a href={personLink}>My contact</a>
            // </>

            <React.Fragment>
                <button onClick={this.nextYear}>++++</button>
                <h1>My name is {name}, last name - {lname}, years --{years}.</h1>
                <a href={personLink}>My contact</a>
            </React.Fragment>

        )
    }
}

const All = () => {
    return (
        <>
            <WhoAmI name="sam" lname="samski" personLink="msn.com" />
            <WhoAmI name="dron" lname="dronnoff" personLink="yahoo.com" />
            <WhoAmI name="ben" lname="iavnoz" personLink="google.com" />
        </>
    )

}

// ReactDOM.render( <App /> , document.getElementById('root'));
ReactDOM.render(<All name='vld' lname='tvr' personLink='google.com'/>, document.getElementById('root'));
// ReactDOM.render(<WhoAmI />, document.getElementById('root'));
