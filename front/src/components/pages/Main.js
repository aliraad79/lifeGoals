import { useState, useEffect } from 'react';
import GoalFlow from "../GoalFlow";

function Main() {
    const [serverNodes, setServerNodes] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/flows')
            .then((res) => res.json())
            .then((data) => {
                setServerNodes(data.map(element =>
                    <GoalFlow name={element.name} goals={element.goals} />
                ));
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    if (serverNodes.length == 0) return <div></div>;

    return (
        <div>
            {serverNodes}
        </div>
    );
}

export default Main;
