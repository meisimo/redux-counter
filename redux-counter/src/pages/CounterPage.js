import { EraseOnUnmount } from '../app/hoc';
import { Counter } from '../features/counter/Counter';
import { counterStore } from '../features/counter/store';
import logo from '../logo.svg';

const CounterPage = () => {
    return (
        <div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter />
            </header>
        </div>
    )
}

export default EraseOnUnmount(CounterPage, [counterStore]);