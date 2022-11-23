import { historialStore } from './store'

export const ResultsList = () => {
    const results = historialStore((state) => state.historial)

    return (
        <div >
            <ul>
                {results.map(({ result, timestamp }, index) =>
                    (<li key={index} style={{marginTop: 20}}>
                        <div>Result: {result}</div>
                        <small>{ timestamp }</small>
                    </li>))}
            </ul>
        </div>
    )
}