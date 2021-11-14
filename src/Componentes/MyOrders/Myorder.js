import React from 'react';
import { useParams } from 'react-router-dom';

const Myorder = (props) =>
{
    // const { email } = props.myorder;
    const { userId } = useParams();
    return (
        <div row>
            <h3 className="text-black text-start ps-2" >{userId}</h3>
            {/* <h4 className="text-black text-start ps-2">{id}</h4> */}
            {/* <h4 className="text-black text-start ps-2">{email}</h4> */}
        </div>
    );
};

export default Myorder;