import { favoritePlanets } from "../data";
import { useState } from "react";

export default function FavoritePlanetList() {
    const [, updateState] = useState();
    
    const clickHandler = id => event => {
        favoritePlanets.pop(id);
        updateState({});
      };

    const listItem = favoritePlanets.map(planet=>
        <tr>
            <th scope="row">{planet.id}</th>
            <td><i>{planet.name}</i></td>
            <td>{planet.description}</td>
            <td><button className="btn btn-danger mx-auto d-block" onClick={(e) => clickHandler(planet.id)(e)}>X</button></td>
        </tr>
    );

    return (
        <div className="p-4 m-4">
            <div className="border1 rounded">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Planet</th>
                            <th scope="col">Reason for liking it</th>
                            <th scope="col">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listItem}
                    </tbody>
                </table>
            </div>
        </div>
    )
};