import axios from "axios";
// import Vue from "vue";

const BASE_URL = "api/";

export const getArticleList = async (params) => {
  console.log(params)
  const result = await axios.post(BASE_URL + "get_article_list", params);
  return result.data;
};

export const getArticle = async (params) => {
  const result = await axios.post(BASE_URL + "get_article", params);
  return result.data;
};
