import PropTypes from "prop-types";

function Student(props){
    if(props.isloggedin){
    return <h2>My name is {props.name}. Age is {props.age}</h2>
    }
}

Student.PropTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    image:PropTypes.string
};


export default Student;