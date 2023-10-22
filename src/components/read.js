// imports
import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {
    // define state to store the fetched data
    const [data, setData] = useState([]);

    // use the useEffect hook to perform asynchronous data fetching
    useEffect(
        () => {
            // perform an asynchronous operation to fetch data from an external API
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
                .then(
                    // callback function to handle a successful response, get data(all data from the body), but here just from books
                    (response) => {
                        // set the fetched data (specifically the 'books' property) to the state
                        setData(response.data.books)
                    }
                )
                //error message in case of a failed request
                .catch(
                    (error) => {
                        // log the error message to the console
                        console.log(error);
                    }
                );
        }, [] // the empty dependency array ensures that this effect runs once on component mount
    );
    return (
        <div>
            <h2>Hello from read component!</h2>
            {/* render the Books component, pass the fetched data as "myBooks" */}
            <Books myBooks={data}></Books>
        </div>
    );
}
// export the Read component for use in other parts of the application
export default Read;
