import React from 'react';

const Link = ({children, to, ...rest}) => {
    return (
        <a href={to} {...rest}>
            {children}
        </a>
    );
};
export default Link;