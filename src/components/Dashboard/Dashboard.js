
/* Importing the useEffect and useState hooks from the React library. */
import { useEffect, useState } from "react";

/* Importing the useHttp hook from the use-http.js file. */
import useHttp from "../../hooks/use-http";

/* Importing the ListDish component from the ListDish.js file. */
import ListDish from "../ListDish/ListDish";

/* Importing the Loading component from the Loading.js file. */
import Loading from '../Loading/Loading'

import DishesJson from '../../mocks/dishes.json'

/* Importing the DontKnowWhatEat component from the DontKnowWhatEat.js file. */
import DontKnowWhatEat from '../DontKnowWhatEat/DontKnowWhatEat'

const Dashboard = () => {

    /* Destructuring the useHttp hook. */
    const { isLoading,
        error,
        requestData } = useHttp();

    const [dishes, setDishes] = useState([])

    const [preferences, setPreferences] = useState([])

    const dishesDataResponse = (response) => {
        if (!response.success) {
            return;
        }
        setDishes(response)
    }

    const fetchDishes = () => {
        requestData({
            method: 'GET',
            path: ''
        }, dishesDataResponse)
    }

    const onChangeValuesDishes = (preferencesParameters) => {

        const resultWithPreferencesParameters = dishes.filter(dish =>
            dish.temperature === preferencesParameters.temperature &&
            dish.kind === preferencesParameters.kind &&
            dish.price === preferencesParameters.price)

        setPreferences(resultWithPreferencesParameters)
    }

    useEffect(() => {
        //fetchDishes();
        setDishes(DishesJson?.results)

        setPreferences(DishesJson.results)

    }, [])

    return (
        <div className="dashboard">

            <DontKnowWhatEat
                onChangeValuesDishes={onChangeValuesDishes}
            />

            <ListDish dishes={preferences} />

            {isLoading && <Loading />}

        </div>
    )
}

/* Exporting the Dashboard component. */
export default Dashboard;