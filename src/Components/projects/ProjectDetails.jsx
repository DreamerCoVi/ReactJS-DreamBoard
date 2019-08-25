import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return ( 
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">ProjectTitle - {id}</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dicta facere, quae deleniti saepe cumque dolores provident ipsum quo ab sunt numquam error rem harum voluptate animi atque molestias enim?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Dreamer</div>
                    <div>August</div>
                </div>
            </div>
        </div>
     );
}
 
export default ProjectDetails;