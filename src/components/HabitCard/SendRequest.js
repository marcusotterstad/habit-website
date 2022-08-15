import React, {useEffect} from 'react';

function SendRequest({body, setCompleted}) {
    let message;

    
    useEffect(() => {
        return async () => {
            console.log(body)
            const response = await fetch('http://localhost:4000/habits/post', {
            
                method: 'POST',
                body: JSON.stringify(body)
            });

            if(response.ok) {
                setCompleted(true);
                message = response.ok;
            } else {
                throw(new Error("Could not send request"));
            }
        }
    }, []);
    
  return (
    <div>SendRequest</div>
  )
}

export default SendRequest