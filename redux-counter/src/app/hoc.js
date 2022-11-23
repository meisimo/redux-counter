import { useEffect } from "react"

const Eraser = ({ children, storesToErase }) => {
    
    useEffect(() => {
        return () => {
            storesToErase.forEach(store => store.getState().clearStore())
        }
    }, [storesToErase])

    return <>{children}</>
}

export const EraseOnUnmount = (Component, storesToErase) => (props) => {
    return (
    <Eraser storesToErase={storesToErase}>
        <Component {...props} />
    </Eraser>)
}