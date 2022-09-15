
/* Importing the useEffect and useState hooks from the React library. */
import { useEffect, useState } from "react";

/* Importing the useHttp hook from the use-http.js file. */
import useHttp from "../../hooks/use-http";

/* Importing the ListDish component from the ListDish.js file. */
import ListDish from "../ListDish/ListDish";

/* Importing the Loading component from the Loading.js file. */
import Loading from '../Loading/Loading'

/* Importing the DontKnowWhatEat component from the DontKnowWhatEat.js file. */
import DontKnowWhatEat from '../DontKnowWhatEat/DontKnowWhatEat'

const Dashboard = () => {

    /* Destructuring the useHttp hook. */
    const { isLoading,
        error,
        requestData } = useHttp();

    /* this variable will save all dishes */
    const [dishes, setDishes] = useState([])

    /* this variable will save al dished with preferences */
    const [preferences, setPreferences] = useState([])

    /* process the data response when the fetch dishes is completed  */
    const dishesDataResponse = (response) => {

        /* This is a validation to check if the response is success. */
        if (!response.success) {
            return;
        }

        /* save the dishes database in dishes variable */
        setDishes(response.dishes)

        /* in the first opportunity save the dishes in preferences variable 
        to show in the first change all dishes */
        setPreferences(response.dishes)
    }

    /* this function will call the endpoint '/dish/get-all-dishes' to get al dishes in the database  */
    const fetchDishes = () => {
        requestData({
            method: 'GET',
            path: '/dish/get-all-dishes'
        }, dishesDataResponse)
    }

    /* this function will filter dishes with your preferences */
    const onChangeValuesDishes = (preferencesParameters) => {

        const resultWithPreferencesParameters = dishes.filter(dish =>
            dish.temperature === preferencesParameters.temperature &&
            dish.kind === preferencesParameters.kind &&
            dish.price === preferencesParameters.price)

        setPreferences(resultWithPreferencesParameters)
    }

    /* This is a hook that is called after the component is mounted. */
    useEffect(() => {
        fetchDishes();
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