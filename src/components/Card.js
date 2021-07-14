import Axios from "axios";
import React, {useState , useEffect} from 'react';
import './Card.css';

export const Card = () => {
			const [dogs, setDogs] = useState([]);
		
				const fetchDogs= async () => {
					const { data } = await Axios.get(

					"https://petstore.swagger.io/v2/pet/findByStatus?status=available");
					const dogs = data;
					setDogs(dogs);
					// console.log(dogs);
				};
			
						useEffect(() => {
							fetchDogs();
						}, []);

							const petDetails = (e) =>{
							const idPet = e.split(' ')[2] // selectam dupa index
								dogs.forEach((pet, index) => {
									// console.log(pet);
										
										if(pet.id === parseFloat(idPet)) { //
											console.log(pet);
											let petData = '';
											for(let key in pet) {
												if(key === 'id' || key === 'status' || key === 'name') {
													petData += '<span>' + key + ': ' + pet[key] + '</span><br>';
												}
											}

												document.getElementById('showPetData').innerHTML = petData;
											}
										} )
									}
							return (
								<div className ='card-container'>
									<p id='showPetData'></p>
									{dogs.map((dog) => (
										<button onClick={(e) => petDetails(e.target.innerText)}
										key={dog.id}>{dog.status} {dog.name} {dog.id}</button>
									))}
								</div>
							);
				};
