import { client } from "../client";

export const customFetch = (query, setState) => {
    client
        .fetch(query)
        .then(res => setState(res))
        .catch(err => console.log(err));
};

// export const fetchOne = async (query, setState, state, id, setSecondState) => {
//         customFetch(query, setState)

//         let result = await state.find((elem) => elem.slug.current === id);
//         if (result) {
//             return setSecondState(result); 
//         }
// }