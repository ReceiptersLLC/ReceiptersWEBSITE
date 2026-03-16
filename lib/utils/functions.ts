import {roleOrder, roles} from "@/lib/utils/defaultValues";

export function userPermission(type:string[]){

  let highestUserType: string = "Unknown";
  let highestOrder: number = 0;

  for (const userType in roleOrder) {
    const order = roleOrder[userType];
    if (type.some(role => roles[userType].includes(role)) && order > highestOrder) {
      highestUserType = userType;
      highestOrder = order;
    }
  }

  return highestUserType;
}

export function hexToRgba(hex: string, opacity: number) {
  const cleanHex = hex.replace('#', '');

  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
