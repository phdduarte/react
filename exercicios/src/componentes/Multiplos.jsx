import React, {div} from 'react';

export const BoaTarde = props => (
    <div>
        <h1>Boa Tarde, {props.name}</h1>
    </div>    
);

export const BoaNoite = props => (
    <div>
        <h1>Boa Noite, {props.name}</h1>
    </div>    
);

// export default BoaTarde;

// Quiser exportar os dois sem precisar de {}
export default { BoaTarde, BoaNoite };