/**
 * @flow
 */
'use strict';

import type {Action} from './types';

// Info action creators

/**
 * 开始获取根目录资讯
 * @return {[类型]}
 */
export function requestRootInfo(): Action {
  return {
    type: 'REQUEST_ROOT_INFO',
  }
}

/**
 * 从网络获取根目录资讯
 * @return {[函数]} [执行网络fetch的函数]
 */
export function fetchRootInfo() {
  return (dispatch: any) => {
    dispatch(requestRootInfo())
    return fetch('http://www.ynhxzz.cn:5000/get_class_by_id/0')
      .then((response) => response.text())
      .then((responseText) => JSON.parse(responseText))
      .then((json) => {
        dispatch(onRootInfoReceived(json.data))
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

/**
 * 收到根目录资讯
 * @param  {[数组]} json: Array<Object> [从网络返回的JSON数据]
 * @return {[类型]}
 */
export function onRootInfoReceived(json: Array<Object>): Action {
  return {
    type: 'ROOT_INFO_RECEIVED',
    json
  }
}

/**
 * 开始获取次级目录资讯
 * @return {[类型]}
 */
export function requestSecondInfo(): Action {
  return {
    type: 'REQUEST_SECOND_INFO',
  }
}

/**
 * 从网络获取次级目录和新闻资讯
 * @return {[函数]} [执行网络fetch的函数]
 */
export function fetchSecondInfo(id: string, username: string) {
  return (dispatch: any) => {
    dispatch(requestSecondInfo())
    return  fetch('http://www.ynhxzz.cn:5000/get_class_by_id/' + id)
      .then((response) => response.text())
      .then((responseText) => JSON.parse(responseText))
      .then((json) => {
        dispatch(onSecondInfoReceived(json.data));

        fetch('http://www.ynhxzz.cn:5000/get_news_by_cid/' + id + '/' + username)
        .then((response) => response.text())
        .then((responseText) => JSON.parse(responseText))
        .then((json) => {
          dispatch(onSecondNewsListReceived(json.newslist));
        })
        .catch((error) => {
          console.warn(error);
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

/**
 * 收到次级目录资讯
 * @param  {[数组]} json: Array<Object> [从网络返回的JSON数据]
 * @return {[类型]}
 */
export function onSecondInfoReceived(json: Array<Object>): Action {
  return {
    type: 'SECOND_INFO_RECEIVED',
    json
  }
}

/**
 * 收到次级新闻资讯
 * @param  {[数组]} json: Array<Object> [从网络返回的JSON数据]
 * @return {[类型]}
 */
export function onSecondNewsListReceived(json: Array<Object>): Action {
  return {
    type: 'SECOND_NEWSLIST_RECEIVED',
    json
  }
}

/**
 * 开始获取三级新闻资讯
 * @return {[类型]}
 */
export function requestThirdNews(): Action {
  return {
    type: 'REQUEST_THIRD_NEWS',
  }
}

/**
 * 从网络获取根目录资讯
 * @return {[函数]} [执行网络fetch的函数]
 */
export function fetchThirdNews(id: string, username: string) {
  return (dispatch: any) => {
    dispatch(requestThirdNews())
    return fetch('http://www.ynhxzz.cn:5000/get_news_by_cid/' + id + '/' + username)
      .then((response) => response.text())
      .then((responseText) => JSON.parse(responseText))
      .then((json) => {
        dispatch(onThirdNewsListReceived(json.newslist))
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

/**
 * 收到三级新闻资讯
 * @param  {[数组]} json: Array<Object> [从网络返回的JSON数据]
 * @return {[类型]}
 */
export function onThirdNewsListReceived(json: Array<Object>): Action {
  return {
    type: 'THIRD_NEWSLIST_RECEIVED',
    json
  }
}

/**
 * 开始获取新闻详情
 * @return {[类型]}
 */
export function requestNewsDetail(): Action {
  return {
    type: 'REQUEST_NEWS_DETAIL',
  }
}

/**
 * 从网络获取新闻详情
 * @return {[函数]} [执行网络fetch的函数]
 */
export function fetchNewsDetail(id: string, username: string) {
  return (dispatch: any) => {
    dispatch(requestNewsDetail())
    return fetch('http://www.ynhxzz.cn:5000/get_news_by_id/' + id + '/' + username)
      .then((response) => response.text())
      .then((responseText) => JSON.parse(responseText))
      .then((json) => {
        dispatch(onNewsDetailReceived(json.content))
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}

/**
 * 收到新闻详情
 * @param  {[数组]} json: Array<Object> [从网络返回的JSON数据]
 * @return {[类型]}
 */
export function onNewsDetailReceived(json: string): Action {
  return {
    type: 'NEWS_DETAIL_RECEIVED',
    json
  }
}
