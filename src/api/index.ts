import api from "./config";

export function getlist(data?: any) {
  return api.post('/kindInfo/appSelectKindInfoList',data);
}
