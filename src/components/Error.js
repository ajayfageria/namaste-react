import {useRouteError} from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (<h2>Something went wrong- {err.data}</h2>
    )
}
export default Error;