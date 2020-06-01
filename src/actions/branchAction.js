import * as link from '../api/apiUrls';
import { fetchApi } from '../api/apiHelper';

export const SHOW_ERROR = 'branch:showError';
export const SHOW_RESPONSE = 'branch:showResponse';

export function fetchBranchListError(errorMessage) {
    return {
        type: SHOW_ERROR,
        payload: errorMessage
    }
}

export function fetchBranchListSuccess(res) {
    return {
        type: SHOW_RESPONSE,
        payload: res
    }
}

export function fetchBranchListApi(limit, offset) {
    return dispatch => {
        const apiUrl = link.getBranchListLink(limit, offset);
        fetchApi(apiUrl, "GET")
            .then(([response, json]) => {
                response.status === 200 && dispatch(fetchBranchListSuccess(json))
            })
            .catch(err => {
                dispatch(fetchBranchListError(err));
            });
    }
}