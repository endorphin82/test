export const LOAD_ALL_ARTICLES = "LOAD_ALL_ARTICLES";
export const LOAD_ARTICLE_COMMENTS = "LOAD_ARTICLE_COMMENTS";
export const DELETE_ARTICLE_BY_ID = "DELETE_ARTICLE_BY_ID";

export const START = "_START";
export const SUCCESS = "_SUCCESS";
export const FAILURE = "_FAILURE";

const myAPIKey = "gAYaGjY3RMfGx3cUK-VxFOj8SzJDziOe";
const collection = "articles";
const database = "articles-test";
const collection_id = "5d5a7e239e635d239b5141ad";

export const URL2 = `https://api.mlab.com/api/1/databases/${database}/collections/${collection}/${collection_id}?apiKey=${myAPIKey}`;
console.log(URL2);

export const URL = "http://localhost:3004/api/article";
