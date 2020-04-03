import React from "react";
import {ProductConsumer} from '../context';
//import {ProductConsumer} from '../context/Context';

export default  function HomePage() {
    return (
        <>
            <h1>This is home page default</h1>
    <ProductConsumer>{value => <h3>{value}</h3>}</ProductConsumer>
        </>
    );
}