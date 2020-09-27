import React, {Fragment} from 'react';

export default props => (
    <Fragment>
        <h1>Bom dia, {props.name}</h1>
        <h2>Sua idade é {props.age}</h2>
    </Fragment>    
);