import React, { Component } from 'react';

import { ColorsContext } from '../context/colors-context';

class ColorsLength extends Component {

    static contextType = ColorsContext;

    render() {
        return (
            <ColorsContext.Consumer>
                {(context) => <p>There are currently {context.colors.length} colors added.</p>}
            </ColorsContext.Consumer>
        )
    }
}

export default ColorsLength;
