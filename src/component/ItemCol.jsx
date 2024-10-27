import React from 'react'
import { Text, Box } from "@chakra-ui/react";
import { SimpleGrid } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'

import styles from "./ItemCol.module.css"

const ItemCol = () => {
    return <>


        <center className={styles.items}>
            <SimpleGrid columns={[2, null, 3]} spacing='100px'>


                <Box className={styles.boxx} >
                    <Image
                        boxSize='300px'
                        objectFit='cover'
                        src='https://food-ordering-app-rose.vercel.app/burger.jpg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <center className={styles.fName}>
                            Burger
                        </center>
                        <Text className={styles.pera}>A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. Common toppings include lettuce, tomato, cheese, pickles, and condiments like ketchup or mustard.</Text>
                    </Box>
                </Box>

                <Box className={styles.boxx} >
                    <Image
                        boxSize='300px'
                        objectFit='cover'
                        src='https://food-ordering-app-rose.vercel.app/pizza.jpg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <center className={styles.fName}>
                            Pizza
                        </center>
                        <Text className={styles.pera}>A classic Italian dish made with a round, flat base of dough topped with tomato sauce, cheese, and various toppings such as pepperoni, vegetables, or seafood.</Text>
                    </Box>
                </Box>


                <Box className={styles.boxx} >
                    <Image
                        boxSize='300px'
                        objectFit='cover'
                        src='https://food-ordering-app-rose.vercel.app/pasta.jpeg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <center className={styles.fName}>
                            Pasta
                        </center>
                        <Text className={styles.pera}>A traditional Italian dish that includes a variety of noodles served with different types of sauces such as marinara, Alfredo, or pesto. Popular types of pasta include spaghetti, fettuccine, and penne.</Text>
                    </Box>
                </Box>


                <Box className={styles.boxx} >
                    <Image
                        boxSize='300px'
                        objectFit='cover'
                        src='https://food-ordering-app-rose.vercel.app/sushi.jpg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <center className={styles.fName}>
                            Sushi
                        </center>
                        <Text className={styles.pera}>A Japanese dish featuring vinegared rice combined with various ingredients such as raw fish, vegetables, and sometimes tropical fruits. Sushi is often served with soy sauce, wasabi, and pickled ginger.</Text>
                    </Box>
                </Box>


                <Box className={styles.boxx} >
                    <Image
                        boxSize='300px'
                        objectFit='cover'
                        src='https://food-ordering-app-rose.vercel.app/taco.jpg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <center className={styles.fName}>
                            Taco
                        </center>
                        <Text className={styles.pera}>A traditional Mexican dish consisting of a folded or rolled tortilla filled with a variety of ingredients such as seasoned meat (beef, chicken, pork), beans, cheese, lettuce, and salsa.</Text>
                    </Box>
                </Box>


                <Box className={styles.boxx} >
                    <Image
                        boxSize='300px'
                        objectFit='cover'
                        src='https://food-ordering-app-rose.vercel.app/ramen.jpg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <center className={styles.fName}>
                            Ramen
                        </center>
                        <Text className={styles.pera}>A Japanese noodle soup with a flavorful broth, tender noodles, and various toppings like pork, egg, and vegetables.</Text>
                    </Box>
                </Box>


                <Box className={styles.boxx} >
                    <Image
                        boxSize='300px'
                        objectFit='cover'
                        src='https://food-ordering-app-rose.vercel.app/burger.jpg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <center className={styles.fName}>
                            Burger
                        </center>
                        <Text className={styles.pera}>A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. Common toppings include lettuce, tomato, cheese, pickles, and condiments like ketchup or mustard.</Text>
                    </Box>
                </Box>



                <Box className={styles.boxx} >
                    <Image
                        boxSize='300px'
                        objectFit='cover'
                        src='https://madhurasrecipe.com/wp-content/uploads/2022/04/veg_thali_3.jpg'
                        alt='Dan Abramov'
                    />
                    <Box>
                        <center className={styles.fName}>
                            Sabzi Puri
                        </center>
                        <Text className={styles.pera}>It is famous in Karnataka, in Bengaluru. It is also ver famous in the south Indian states like Tamil Nadu, Andhra Pradesh and Telangana.</Text>
                    </Box>
                </Box>

            </SimpleGrid>
        </center >

    </>
}

export default ItemCol;