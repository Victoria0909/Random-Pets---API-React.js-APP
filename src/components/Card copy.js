import axios from "axios";
import React, {useState , useEffect} from 'react';
import './Card.css';

export const Card = () => {
			const [dogs, setDogs] = useState([]);
			const [showContent, setShowContent] = useState(false);
			const [content, setContent] = useState([]);


			const fetchDogs= async () => {
			const { data } = await axios.get(

				"https://petstore.swagger.io/v2/pet/findByStatus?status=available"
				)

				const dogs = data;
				setDogs(dogs);
				console.log(dogs);
			};
		
			useEffect(() => {  //invocam functia in useEfect
				fetchDogs();
			}, []);

			function handleClick(id) {
				axios
				.get(`https://petstore.swagger.io/v2/pet/${id}`, {

				})
				.then((response) => {
					setContent(response);
					setShowContent(true);
					console.log(response)
				})
				.catch(() => {
					console.log("error");
				});
			}
		
			return (
				<div className ='card-container'>

						{dogs.map((dog, index) => (
						<div key = {index}> 
						<input  
						type = 'button'
						value = {dog.name}
						id = {dog.id}
						onClick= {(id) => handleClick }
						
						/>
						{/* {dog.status} {dog.name}  */}
						
						{showContent && <p dangerouslySetInnerHTML={{ __html: content }}> </p> }
							
						</div>
				))}
			
			</div>
	);
};

