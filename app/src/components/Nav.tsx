import React from 'react';
function Links() {
    return (
        <div>
            <a href="/about">Sobre</a>
            <a href="/contact">Contato</a>
        </div>
    )
}

export default function Nav() {
    return (
        <nav>
            <Links />
        </nav>
    );
}