import { JoinTheCommunity } from 'pages/summary/sections';
import React from 'react';
import { CheckoutContact, Reviews } from './sections';

const Checkout = () => 
    <>
        <CheckoutContact></CheckoutContact>
        <Reviews></Reviews>
        <JoinTheCommunity src='shadows' title="Why don't you become a part of us?"></JoinTheCommunity>
    </>


export default Checkout