import React, { useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui/dist/fancybox.esm.js';
import '@fancyapps/ui/dist/fancybox.css';

const Fancybox = (props) => {
    const delegate = props.delegate || '[data-fancybox]';

    useEffect(() => {
        const opts = props.options || {
            groupAttr: false,
            Thumbs: {
                autoStart: false,
            },
            Toolbar: {
                display: [
                  'zoom',
                  'fullscreen',
                  'close',
                ]
            }
        };
        NativeFancybox.bind(delegate, opts);
        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    return <>{props.children}</>;
};

export default Fancybox;
