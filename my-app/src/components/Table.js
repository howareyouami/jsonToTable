import React from 'react';
import { makeTableString } from '../helpers/makeTable';

function Table({data}) {
    return (
        <div
            style={{
                width: "90%",
                overflow: "scroll",
                fontSize: "18px"
            }}
            dangerouslySetInnerHTML={{
                __html: makeTableString([data])
            }}></div>
    );
}

export default Table;
