import * as types from '../types';

export function setStats(stats) {
    return {
        type: types.SET_STATS,
        payload: stats
    }
}

export function deleteStat(stat) {
    return {
        type: types.DELETE_STAT,
        payload: stat
    }
}

