import { useEffect } from 'react';
function useOutsideClick(ref, callback) {
    useEffect(() => {
        /**
         * Close dropdown/modal if clicked outside of it.
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Unbind the event listener on cleanup
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, callback]);
}

export default useOutsideClick;
