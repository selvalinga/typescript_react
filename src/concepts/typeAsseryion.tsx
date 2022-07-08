import React from 'react';


function TypeAsseryion() {
        const hello : number = 500

        let employeeId = (hello as number)

       console.log('typeAsserts example',employeeId)
    return (
        <div className='App'>
            <p>
                Topic Type assertion
            </p>
        </div>
    );
}

export default TypeAsseryion;