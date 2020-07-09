import React from 'react';
import axios from 'axios';

const URL = "http://serverless-env.eba-88a2qbjq.us-east-1.elasticbeanstalk.com/";
const headerAxios = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export default class AxiosRequests extends React.Component {

    static testBackendConnection = async () => {
        try {
            let response = await axios.get(`${URL}/ping/`, headerAxios);
            return response.data;    
        } catch (error) {
            console.log("Something is wrong in testBackendConnection: " + error)
            return undefined
        }
    }

    static getRecipes = async () => {
        try {
            let response = await axios.get(`${URL}/recipes/`, headerAxios);
            return response.data;    
        } catch (error) {
            console.log("Something is wrong in getRecipes: " + error)
            return undefined
        }
    }

    static createRecipe = async (recipe) => {

const dataAxios = {
    name: recipe.name,
    instructions: recipe.instructions,
    ingredients: recipe.ingredients
}

        try {
            let response = await axios.post(`${URL}/recipes/create/`, dataAxios, headerAxios);
            console.log(response.data.name);
            return response.data;    
        } catch (error) {
            console.log("Something is wrong in getRecipes: " + error)
            return undefined
        }
    }
}