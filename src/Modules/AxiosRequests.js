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
            console.log("Something is wrong in testBackendConnection(): " + error)
            return undefined
        }
    }

    static clearDatabase = async () => {
        try {
            let response = await axios.post(`${URL}/clear/`, headerAxios);
            console.log("clear database successful");
            return response;
        } catch (error) {
            console.log("Something is wrong in clearDatabase(): " + error)
            return undefined
        }
    }

    static getRecipes = async () => {
        try {
            let response = await axios.get(`${URL}/recipes/`, headerAxios);
            return response.data;
        } catch (error) {
            console.log("Something is wrong in getRecipes(): " + error)
            return undefined
        }
    }

    static createRecipe = async (recipe) => {
        const dataAxios = recipe
        try {
            let response = await axios.post(`${URL}/recipes/create/`, dataAxios, headerAxios);
            console.log(response.data.name);
            return response.data;
        } catch (error) {
            console.log("Something is wrong in createRecipes(): " + error)
            return undefined
        }
    }

    static getSpecificRecipe = async (recipeId) => {
        try {
            let response = await axios.get(`${URL}/recipes/${recipeId}`, headerAxios);
            console.log(response.data.name)
            return response.data;
        } catch (error) {
            console.log("Something is wrong in getSpecificRecipe(): " + error)
            return undefined
        }
    }

    static deleteRecipe = async (recipeId) => {
        try {
            let response = await axios.delete(`${URL}/recipes/${recipeId}`, headerAxios);
            console.log(response)
            return response;
        } catch (error) {
            console.log("Something is wrong in deleteRecipe(): " + error)
            return undefined
        }
    }

    static modifyRecipe = async (recipe, recipeId) => {
        const dataAxios = recipe
        try {
            let response = await axios.patch(`${URL}/recipes/${recipeId}/`, dataAxios, headerAxios);
            console.log(response.data.name);
            return response.data;
        } catch (error) {
            console.log("Something is wrong in createRecipes(): " + error)
            return undefined
        }
    }

    static make = async (recipeId) => {
        try {
            let response = await axios.post(`${URL}/recipes/${recipeId}/make/`, headerAxios);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log("Something is wrong in make(): " + error)
            return undefined
        }
    }

    static getInventory = async () => {
        try {
            let response = await axios.get(`${URL}/inventory/`, headerAxios);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log("Something is wrong in getInventory(): " + error)
            return undefined
        }
    }

    static fillInventory = async (inventory) => {
        const dataAxios = inventory
        try {
            let response = await axios.post(`${URL}/inventory/fill/`, dataAxios, headerAxios);
            console.log(response);
            return response;
        } catch (error) {
            console.log("Something is wrong in fillInventory(): " + error)
            return undefined
        }
    }

}