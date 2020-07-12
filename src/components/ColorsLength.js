import React, { Component } from 'react';

import { ColorsContext } from '../context/colors-context';

class ColorsLength extends Component {

    static contextType = ColorsContext;

    render() {
        return (
            <p>There are currently {this.context.colors.length} colors added.</p>
        )
    }
}

export default ColorsLength;
