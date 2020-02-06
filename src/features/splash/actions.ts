import {createAsyncAction} from 'typesafe-actions';
import {IpModel} from 'IpModel';
import {MasterData} from 'MasterData';

export const checkAvailableIp = createAsyncAction(
  'CHECK_USER_IP',
  'CHECK_USER_IP_SUCCESS',
  'CHECK_USER_IP_FAIL',
)<MasterData, IpModel, string>();

export const getMasterData = createAsyncAction(
  'GET_MASTER_DATA',
  'GET_MASTER_SUCCESS',
  'GET_MASTER_ERROR',
)<undefined, MasterData, string>();
