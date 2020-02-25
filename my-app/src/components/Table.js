import React from 'react';
import { makeTableString } from '../helpers/makeTable';

const Table = React.memo(({ data, j }) => {
    console.log("render=>" + j)
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
})

export default Table;
