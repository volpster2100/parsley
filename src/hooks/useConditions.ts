import { useEffect, useState } from "react";
import conditionsData from "../config/conditions.json";
import ICondition from "../models/condition/ICondition";

function useConditions(): [{[types:string]:string[]}, boolean] {
    const [pending, setPending] = useState(true);
    const [conditions, setConditions] = useState<{[types:string]:string[]}>({});

    useEffect(() => {
        // TODO: CALL API HERE INSTEAD

        // Simulate wire time
        setTimeout(() => {

            // Simulate mapping API response to the format used by this application
            let formattedConditions:{[types:string]:string[]} = {};

            (conditionsData as ICondition[]).forEach(condition =>{
                if(!formattedConditions[condition.type]){
                    formattedConditions[condition.type] = [];
                }

                formattedConditions[condition.type].push(condition.condition)
            });

            setConditions(formattedConditions);
            setPending(false);

        }, 1000);
    }, [])

    return [conditions, pending];
}

export default useConditions;